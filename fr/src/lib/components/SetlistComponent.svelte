<script lang="ts">
	import SongsComponent from "./SongsComponent.svelte";


	export let supabase: any;
	export let setlist: Setlist;

	let showEdit = false;
	let isDeleted = false;
	let showSongs = false;
	let song_name=''
	let song_tone=''
	let song_tempo=100
	$: item_deleted = isDeleted ? 'line-through text-red-500' : '';
	$: edit_active = showEdit ? 'variant-filled-warning' : 'variant-ghost-warning';
	async function handleDelete() {
		const resp = await supabase.from('setlists').delete().eq('id', setlist.id);
		if (resp.error) {
			console.log(resp.error);
			return;
		}
		showEdit = !showEdit;
		isDeleted = true;
	}
	function handleEdit() {
		showEdit = !showEdit;
	}
	function handleSave() {
		showEdit = !showEdit;
	}

	async function handleAddSong() {
		const songs=[...setlist.songs, { name: song_name, tone: song_tone, tempo: song_tempo }]
		const {data, error } = await supabase.from('setlists').update({ songs: songs}).eq('id', setlist.id);
		setlist.songs=songs
		if (error) {
			console.log(error);
			return;
		}
		console.log(data)
	}


</script>

<div class="my-2 flex justify-between border border-cyan-200 border-opacity-10 px-4 {item_deleted}">
	{#if showEdit}
		<!-- content here -->
		<input type="text" class="input" placeholder={setlist.title} />
	{:else}
		<button
			class="btn btn-lg variant-filled-primary uppercase"
			on:click={() => (showSongs = !showSongs)}>{setlist.title}</button
		>
	{/if}
	<div class="flex justify-center gap-2">
		{#if showEdit}
			<!-- content here -->
			<button class="btn variant-glass-secondary btn-sm" on:click={handleSave}>Save</button>
			<button class="btn variant-glass-error btn-sm" on:click={handleDelete}>Delete!!!</button>
		{:else}
			<!-- else content here -->
			<button class="btn variant-glass-primary btn-sm" on:click={handleEdit} disabled={isDeleted}
				>Edit</button
			>
		{/if}
		<button class="btn  btn-sm {edit_active}" on:click={handleEdit} disabled={!showEdit}>X</button>
	</div>
</div>
{#if showSongs && !isDeleted}
	<!-- content here -->
	{#if setlist.songs}
		<SongsComponent {setlist} />
	{:else}
		<p>No song to list</p>
	{/if}
	<div class="flex">
		<input class="input" type="text" placeholder="name" bind:value={song_name}>
		<input class="input" type="text" placeholder="tone" bind:value={song_tone}>
		<input class="input" type="text" placeholder="tempo" bind:value={song_tempo}>
	</div>
	<button class="btn btn-sm variant-filled-secondary" on:click={handleAddSong}>Add song</button>
{/if}
