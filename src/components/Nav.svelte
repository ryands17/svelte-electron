<script>
  export let navigate
  export let routes
</script>

<style>
  ul {
    list-style: none;
    display: flex;
    width: 40%;
    justify-content: space-around;
  }
  li {
    font-size: 20px;
    font-family: 'Courier New', Courier, monospace;
    cursor: pointer;
  }
</style>

<ul>
  {#each routes as [key, val] (key)}
    <li on:click={() => navigate(val.path)}> {val.title} </li>
  {/each}
</ul>
