<script lang="ts">
	export let setlist: any;

	let showEdit = false;
	$: edit_active = showEdit ? 'variant-filled-warning' : 'variant-ghost-warning';
	function handleDelete(): any {
		
	}
	function handleEdit() {
		showEdit = !showEdit;
	}
	function handleSave(){
		showEdit = !showEdit;
	}
</script>

<div class="my-2 flex justify-between border border-cyan-200 border-opacity-10 px-4">
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
			<button class="btn variant-glass-primary btn-sm" on:click={handleEdit}>Edit</button>
		{/if}
		<button class="btn  btn-sm {edit_active}" on:click={handleEdit} disabled={!showEdit}>X</button
		>
	</div>
</div>
