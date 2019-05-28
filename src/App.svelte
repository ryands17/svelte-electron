<script>
  import Main from './Main.svelte'

  let count = 0
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
