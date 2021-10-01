<script>
  import Image from "../Image.svelte";

  export let items = [];
</script>

{#each items as item}
  <Image src={item.cdn_files[0].url.replace('w_1920', 'w_1200')} alt="" />
{/each}
