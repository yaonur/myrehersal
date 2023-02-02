<script lang="ts">
	import type { ActionData } from '../../../.svelte-kit/types/src/routes/register/$types';

	export let form: ActionData;
	export let data
</script>

<div class="login-container">

	<form action="?/login" method="POST">
		<div class="input-box">
			<label for="username">Username</label>
			<input type="text" id="username" name="username" required />
		</div>
		<div class="input-box">
			<label for="password">Password</label>
			<input type="password" id="password" name="password" required />
		</div >
		<input type="submit" value="Login" />
		<a href="/register">Register</a>
	</form>
</div>

<style>
	.login-container {
		display: flex;
		height: 100vh;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-content: center;
	}

	form {
		padding:50px;
		display: flex;
		inset:2px;
		border-radius: 8px;
		flex-direction: column;
		background-color: var(--form-background);
		gap:2px;
	}
	.input-box{
		display: flex;
		justify-content: space-between;
		gap:5px;
		
	}
	input{
		color: #2a2438;
	}
</style>
