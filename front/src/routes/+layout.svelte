<script>
	import '../app.css';
	// import { page } from '$app/stores';
	import Navbar from '../lib/Navbar.svelte';
	import user from '../stores/user';
	import { Router, Route, navigate } from 'svelte-routing';
	// if (!$user) {
	// 	navigate('/login');
	// }
</script>

<div class="container">
	<!--{#if $user}-->
		<div class="nav-container">
			<Navbar />
		</div>
	<!--{/if}-->
	
	<div class="slot-container">
		<slot />
	</div>
</div>

<style>
	.container {
		background-color: var(--primary-background);
		height: 100vh;
		width: 100vw;
		display: flex;
	}
	.slot-container {
		height: 100%;
		width: 100%;
	}

	.nav-container {
		background-color: var(--navbar-background);
	}
</style>
