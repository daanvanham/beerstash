<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import IconButton from "@smui/icon-button";

  const dispatch = createEventDispatcher();
</script>

<style>
  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  .modal {
    position: fixed;
    z-index: 1;
    top: 50%;
    left: 50%;
    max-height: 80vh;
    max-width: 80vw;
    transform: translate(-50%, -50%);
    background: #fff;
    border: 5px solid #fff;
  }

  .close {
    position: absolute;
    top: -24px;
    right: -24px;
    width: 47px;
    height: 47px;
    background: #fff;
    border-radius: 50%;
    overflow: hidden;
  }
</style>

<div
  class="overlay"
  on:click={() => dispatch('close')}
  in:fade={{ duration: 200 }}
  out:fade={{ duration: 300 }} />

<div class="modal" in:fade={{ duration: 300 }} out:fade={{ duration: 200 }}>
  <div class="close">
    <IconButton class="material-icons" on:click={() => dispatch('close')}>
      close
    </IconButton>
  </div>

  <slot />
</div>
