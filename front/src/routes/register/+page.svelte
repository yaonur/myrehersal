<script lang="ts">
	import type {ActionData} from '../../../.svelte-kit/types/src/routes/register/$types'
	
	export let form: ActionData
</script>

<h1>Register</h1>

<form action="?/register" method="POST">
	<div>
		<label for="username">Username</label>
		<input type="text" id="username" name="username" required>
		<div>
			<label for="email">email</label>
			<input type="text" id="email" name="email" required>
		</div>
		<div>
			<label for="password">Password</label>
			<input type="password" id="password" name="password" required>
		</div>
		{#if form?.user}
			<p class="error">Username is taken.</p>
		{/if}
		<button type="submit">Register</button>
	</div>
</form>