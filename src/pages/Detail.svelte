<script>
  import { query } from "svelte-apollo";

  import StashQuery from "../graphql/Stash";
  import StashModel from "../model/Stash";

  import Dynamic from "../components/Dynamic.svelte";
  import Date from "../components/Date.svelte";
  import Logs from "../components/Logs.svelte";

  export let code;

  let result = query(StashQuery, {
    variables: { code: code.toLowerCase() }
  });

  $: stash = $result.data && StashModel.from($result.data.Stash);
</script>

{#if $result.loading}
  Loading...
{:else if $result.error}
  ERROR: {$result.error}
{:else}
  <h1>{stash.title}</h1>

  <p>
    <strong>Aangemaakt door:</strong>
    {stash.creator}
  </p>

  <p>
    <strong>Aangemaakt op:</strong>
    <Date string={stash.created} />
  </p>

  <p>
    <strong>Coördinaten</strong>
    {stash.coordinates}
  </p>

  {#each stash.description as component}
    <Dynamic {component} />
  {/each}

  <p>
    <strong>Hint:</strong>
    {stash.hint}
  </p>

  <!-- <Logs logs={stash.logs} /> -->
{/if}
