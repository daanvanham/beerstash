<script>
  export let string;

  $: date = new Date(string);
</script>

<span>{date.toLocaleDateString('nl')}</span>
