<script lang="ts">
	import type { PageData } from './$types';
  
	export let data: PageData;
  
	let loadedData = [];
	async function loadData() {
	  const resp = await data.supabase.from('Todos').select('*').limit(20);
	  loadedData = resp!.data;
	}
  
	$: if (data.session) {
	  loadData();
	}
  </script>
  
 
  <h1>Senturk attiriyim o beyne </h1>
  <h2>Burasi home screen akilli ol</h2>