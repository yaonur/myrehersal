<script lang="ts">
	export let supabase: any;
	export let setlist: any;

	let showEdit = false;
	let isDeleted = false;
	$:item_deleted=isDeleted ? 'line-through text-red-500' : ''
	$: edit_active = showEdit ? 'variant-filled-warning' : 'variant-ghost-warning';
	async function handleDelete() {
		const resp = await supabase.from('setlists').delete().eq('id', setlist.id);
		if (resp.error) {
			console.log(resp.error);
			return;
		}
		showEdit = !showEdit;
		isDeleted=true;
	}
	function handleEdit() {
		showEdit = !showEdit;
	}
	function handleSave() {
		showEdit = !showEdit;
	}
</script>

<div class="my-2 flex justify-between border border-cyan-200 border-opacity-10 px-4 {item_deleted}"  >
	{#if showEdit}
		<!-- content here -->
		<input type="text" class="input" placeholder={setlist.title} />
	{:else}
		<h1 class="uppercase">{setlist.title}</h1>
	{/if}
	<div class="flex justify-center gap-2">
		{#if showEdit}
			<!-- content here -->
			<button class="btn variant-glass-secondary btn-sm" on:click={handleSave}>Save</button>
			<button class="btn variant-glass-error btn-sm" on:click={handleDelete}>Delete!!!</button>
		{:else}
			<!-- else content here -->
			<button class="btn variant-glass-primary btn-sm" on:click={handleEdit} disabled={isDeleted}>Edit</button>
		{/if}
		<button class="btn  btn-sm {edit_active}" on:click={handleEdit} disabled={!showEdit}>X</button>
	</div>
</div>
