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
  
 
  <h1>Ui begenmediyseniz bi tarafinizi kaldirip </h1>
  <h2>FIGMADAN design yapip gonderin </h2>