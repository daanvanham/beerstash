<script>
  import Modal from "./Modal.svelte";

  export let src;
  export let alt;

  let visible = false;
</script>

<style>
  img {
    max-width: 300px;
    cursor: pointer;
  }

  :global(.modal) img {
    max-width: 80vw;
    max-height: 80vh;
    float: left;
  }
</style>

{#if visible}
  <Modal on:close={() => (visible = false)}>
    <img {src} {alt} />
  </Modal>
{/if}

<img {src} {alt} on:click={() => (visible = true)} />
