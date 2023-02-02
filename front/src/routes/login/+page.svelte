<script lang="ts">
	import type {ActionData} from "../../../.svelte-kit/types/src/routes/register/$types";
	
	export let form: ActionData

</script>

<h1>Login</h1>

<form action="?/login" method="POST">
	<div>
		<div>
			<label for="username">Username</label>
			<input type="text" id="username" name="username" required>
		
		</div>
		<div>
			<label for="password">Password</label>
			<input type="password" id="password" name="password" required>
		</div>
		<button type="submit">Login</button>
		<a href="/register">Register</a>
	</div>
</form>

