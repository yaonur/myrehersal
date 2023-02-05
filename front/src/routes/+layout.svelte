<script>
	import '../app.css';
	// import { page } from '$app/stores';
	import Navbar from '../lib/Navbar.svelte';
	import user from '../stores/user';
	import Login from '$lib/Login.svelte';
	// import { Router, Route, navigate } from 'svelte-routing';
</script>

<div class="container">
	<div class="nav-container">
		<Navbar />
	</div>
		<div class="slot-container">
	{#if !$user}
		<Login />
	{:else}
			<slot />
	{/if}
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
