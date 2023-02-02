<script>
  import  user  from "../stores/user";
  import { Navigate } from "svelte-routing";

  

</script>

{#if !user}
  <svelte:component this={Navigate} to='/login' />
{:else}
  <svelte:component this={Navigate} to='/' />
{/if}