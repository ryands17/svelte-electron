<script>
  import Main from '../components/Main.svelte'

  let count = parseInt(process.env.COUNT) || 0
</script>

<style>
  h1 {
    color: green;
  }
</style>

<button on:click={() => (count += 1)}>Increment</button>
<button on:click={() => (count -= 1)}>Decrement</button>

<br />
<h1>Counter is: {count}</h1>
<Main />
