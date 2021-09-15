<script>
  import Image from "../Image.svelte";

  export let items = [];
</script>

{#each items as item}
  <Image src={item.cdn_files[0].url} alt="" />
{/each}
