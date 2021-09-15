<script>
  import PlaceholderComponent from "./Placeholder.svelte";
  import TextComponent from "./dynamic/Text.svelte";
  import Assets from "./dynamic/Assets.svelte";

  const registry = {
    text: TextComponent,
    assets: Assets
  };

  const getComponent = type => {
    return registry[type.toLowerCase()] || PlaceholderComponent;
  };

  export let component;
</script>

<svelte:component this={getComponent(component._type)} {...component} />
