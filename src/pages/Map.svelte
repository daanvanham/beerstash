<script>
  import { onMount } from "svelte";
  import { query } from "svelte-apollo";

  import StashesQuery from "../graphql/Stashes";
  import StashModel from "../model/Stash";

  import MarkerClusterer from "@googlemaps/markerclustererplus";
  import Sidebar from "../components/Sidebar.svelte";

  const locations = [];

  let container;
  let map;
  let visible = null;

  let result = query(StashesQuery);

  $: stashes =
    $result.data &&
    $result.data.Stashs.items.reduce(
      (carry, stash) => [...carry, StashModel.from(stash)],
      []
    );

  $: (stashes || []).forEach(stash => {
    const marker = new google.maps.Marker({
      position: {
        lat: stash.location.latitude,
        lng: stash.location.longitude
      },
      map
    });

    locations.push({
      stash,
      location: stash.location,
      marker
    });

    marker.addListener("click", () => (visible = stash));
  });

  onMount(async () => {
    map = new google.maps.Map(container, {
      zoom: 9,
      center: { lat: 51.6949686, lng: 5.0520586 }
    });

    new MarkerClusterer(map, locations.map(({ marker }) => marker), {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
    });
  });
</script>

<style>
  .full-screen {
    width: 100vw;
    height: 100%;
    margin-left: -20px;
  }

  :global(.gmnoprint),
  :global(.gm-fullscreen-control) {
    display: none;
  }
</style>

<div class="full-screen" bind:this={container} />

<Sidebar {visible} />
