<script>
  import { links } from 'svelte-routing'

  export let routes
</script>

<style>
  ul {
    list-style: none;
    display: flex;
    width: 40%;
    justify-content: space-around;
  }
  a {
    font-size: 20px;
    font-family: 'Courier New', Courier, monospace;
    cursor: pointer;
  }
</style>

<ul use:links>
  {#each routes as [key, val] (key)}
    <a href={val.path}>{val.title}</a>
  {/each}
</ul>
