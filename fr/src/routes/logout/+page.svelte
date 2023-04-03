<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    data.supabase.auth.signOut()
</script>
{#if data.session}
     <!-- content here -->
{:else}
<h1 class="px-10 center">You have succesfully logout</h1>
     <!-- else content here -->
{/if}