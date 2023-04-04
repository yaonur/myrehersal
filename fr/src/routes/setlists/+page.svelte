<script lang="ts">
	import SetlistComponent from '$lib/components/SetlistComponent.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let showAddSetlist = false;
	let title = '';
    let err=""
	async function addSetlist() {
		if (showAddSetlist) {
            console.log(data)
			console.log('saving setlist');
			const { error } = await data.supabase.from('setlists').insert([{ title: title ,user_id:data.session!.user.id}]);
			// const { error } = await data.supabase.from('setlists').insert([{ title: title ,user_id:"b9f0c137-d9be-49dc-89ee-4c2c11b96dfe"}]);
            if(error){
                console.log(error)
                err=error.message
                return
            }
            //@ts-ignore
            data.setlists=[...data.setlists,{title:title,user_id:data.session.user.id,songs:[]}]
            console.log(data.setlists)
			showAddSetlist = false;
		} else {
			showAddSetlist = true;
		}
	}

	function cancelAdd(): any {
		showAddSetlist = false;
        err=""
	}
</script>

<div class="flex">
	{#if showAddSetlist}
		<input type="text" class="text-black" placeholder="setlist name" bind:value={title} />
		<button class="btn btn-sm variant-filled-primary" on:click={addSetlist}>Save</button>
		<button class="btn btn-sm variant-filled-warning" on:click={cancelAdd}>Cancel</button>
	{:else}
		<button class="btn btn-sm variant-filled-primary" on:click={addSetlist}>Add Setlist</button>
	{/if}
</div>
{#if err}
<p>{err}</p>
     <!-- content here -->
{:else}
     <!-- else content here -->
{/if}
{#if data.setlists}
	<!-- content here -->
	<div>
		{#each data.setlists as setlist}
			<SetlistComponent {setlist} supabase={data.supabase} />
		{/each}
	</div>
{:else}
	<h2>No setlists!</h2>
	<!-- else content here -->
{/if}
