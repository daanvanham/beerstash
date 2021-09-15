<script>
  import { fly } from "svelte/transition";
  import { Link } from "svelte-routing";

  import Fab, { Icon } from "@smui/fab";
  import IconButton from "@smui/icon-button";
  import Date from "./Date.svelte";

  export let visible;
</script>

<style>
  .sidebar {
    position: absolute;
    top: 56px;
    left: 0;
    bottom: 0;
    width: 80vw;
    background: white;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }

  .sidebar .content {
    position: relative;
    height: 100%;
    padding: 0 40px 20px 20px;
    overflow-y: auto;
  }

  .sidebar .description :global(img) {
    max-width: 60%;
    display: block;
    margin: 0 auto;
  }

  @media (min-width: 600px) {
    .sidebar {
      top: 64px;
    }
  }

  @media (min-width: 900px) {
    .sidebar {
      width: 40vw;
    }
  }

  @media (min-width: 1200px) {
    .sidebar {
      width: 30vw;
    }
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 50%;
    overflow: hidden;
    height: 48px;
  }

  .stash-type {
    float: right;
    margin: 20px 40px 0 0;
    max-width: 20%;
    margin-top: 20px;
  }

  .go-to {
    position: absolute;
    bottom: 10px;
    right: -28px;
  }
</style>

{#if visible}
  <div class="sidebar" transition:fly={{ x: -400, duration: 600 }}>
    <div class="content">
      <div class="close">
        <IconButton class="material-icons" on:click={() => (visible = null)}>
          close
        </IconButton>
      </div>

      <img
        src={`data:image/svg+xml,${encodeURIComponent(visible.icon)}`}
        alt="stash type"
        class="stash-type" />

      <h2>{visible.title}</h2>

      <p>
        <small>
          <strong>Code:</strong>
          {visible.code}
        </small>
        <br />
        <strong>Geplaatst door:</strong>
        {visible.creator}
        <br />
        <strong>op:</strong>
        <Date string={visible.created} />
      </p>

      <h3>Coordinaten</h3>
      <p>{visible.coordinates}</p>

      <!-- <h3>Beschrijving</h3>
      <div class="description">
        {@html visible.description}
      </div> -->

      <!-- <h3>Hint</h3>
      <p>{visible.hint}</p> -->
    </div>

    <div class="go-to">
      <Link to={`stash/${visible.code}`}>
        <Fab>
          <Icon class="material-icons">arrow_forward</Icon>
        </Fab>
      </Link>
    </div>
  </div>
{/if}
