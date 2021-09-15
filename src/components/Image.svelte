<script>
  import Modal from "./Modal.svelte";

  export let src;
  export let alt;

  let visible = false;
</script>

<style>
  img {
    max-width: 300px;
  }

  :global(.modal) img {
    max-width: none;
    max-height: 100%;
    height: 80vh;
  }
</style>

{#if visible}
  <Modal on:close={() => (visible = false)}>
    <img {src} {alt} />
  </Modal>
{/if}

<img {src} {alt} on:click={() => (visible = true)} />
