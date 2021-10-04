<script>
  import { Router, Route } from "svelte-routing";

  import { ApolloClient, InMemoryCache } from "@apollo/client/core";

  import { setClient } from "svelte-apollo";

  import Header from "./components/Header.svelte";

  import Map from "./pages/Map.svelte";
  import Detail from "./pages/Detail.svelte";
  import Log from "./pages/Log.svelte";

  export let url = "";
  export let ready = false;

  export let authToken;
  export let googleAPIkey;

  function createApolloClient(authToken) {
    const cache = new InMemoryCache();
    const client = new ApolloClient({
      uri: "https://graphql.prepr.io/graphql",
      headers: {
        Authorization: `Bearer ${authToken}`
      },
      cache
    });

    return client;
  }

  const client = createApolloClient(authToken);

  setClient(client);
</script>

<style>
  :global(body) {
    padding: 0;
  }

  .content {
    height: calc(100% - 56px);
    padding: 0 20px;
    overflow-y: auto;
  }

  @media (min-width: 600px) {
    .content {
      height: calc(100% - 64px);
    }
  }
</style>

<svelte:head>
  <script
    defer
    async
    src={`https://maps.googleapis.com/maps/api/js?key=${googleAPIkey}&callback=initMap`}>

  </script>
</svelte:head>

<Router {url}>
  <Header />

  {#if ready}
    <div class="content">
      <Route path="/">
        <Map />
      </Route>

      <Route path="stash/:code" let:params>
        <Detail {...params} />
      </Route>

      <Route path="log/:code" let:params>
        <Log {...params} />
      </Route>
    </div>
  {/if}
</Router>
