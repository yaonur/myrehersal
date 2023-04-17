<script lang="ts">
	import type { PageData } from './$types';
  
	export let data: PageData;
  
	let loadedData = [];
	async function loadData() {
	  const resp = await data.supabase.from('Todos').select('*').limit(20);
	  loadedData = resp!.data as any;
	}
  
	$: if (data.session) {
	  loadData();
	}
  </script>
  
 
  <h1>SO2</h1>