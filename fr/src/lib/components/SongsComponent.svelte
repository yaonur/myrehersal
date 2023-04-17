<script lang='ts'> 
export let setlist:Setlist
</script>

	 <!-- content here -->
	 {#each setlist.songs as {name,tone,tempo}}
		 <!-- content here -->
		 <div class= "flex gap-4 my-1 py-1 px-4 bg-slate-400">
			<p>{name}</p>
			<p>{tone}</p>
			<p>{tempo}</p>
		 </div>
	 {/each}
	 

