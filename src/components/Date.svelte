<script>
  export let string;

  const date = new Date(string);
</script>

<span>{date.toLocaleDateString('nl')}</span>
