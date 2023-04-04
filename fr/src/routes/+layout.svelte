<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';
	import { AppRail, AppRailTile, AppShell } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	export let data: LayoutData;

	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
</script>
<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<AppRail>
		<AppRail>
		<AppRail>
			{#if data.session}
				 <!-- content here -->
				 <AppRailTile tag="a" href="/" icon="user" label="Home" />
				 <AppRailTile tag="a" href="/profile" icon="user-circle" label="Profile" />
				 <AppRailTile tag="a" href="/setlists" icon="user-circle" label="Setlists" />
				 <AppRailTile tag="a" href="/logout" icon="user" label="logout" />
			{:else}
				 <!-- else content here -->
				 <AppRailTile tag="a" href="/login" icon="user" label="Login" />
				 <AppRailTile tag="a" href="/register" icon="user-plus" label="Register" />
			{/if}
		</AppRail>
	</AppRail>
	</AppRail>
	</svelte:fragment>
	<div class="pl-2 pt-2">
		<slot />
	</div>
</AppShell>