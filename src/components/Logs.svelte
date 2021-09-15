<script>
  import Log from "./Log.svelte";

  export let logs = [];
</script>

<style>
  section {
    border-top: 1px solid #ccc;
    margin: 40px -10px 0;
    padding: 10px;
  }
</style>

<section>
  <h2>Logs</h2>

  {#each logs as log}
    <Log {...log} />
  {/each}
</section>
