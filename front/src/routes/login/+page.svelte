<script>
	import Button from '$lib/Button.svelte';
</script>

<div class="login-container">
	<h2>Login</h2>
	<form method="POST" action="?/login">
		<div class="form-container">
			<label for="name">Name</label>
			<input id="name" name="name" type="text" placeholder="Your name" />

			<label for="password">Password</label>
			<input id="password" name="password" type="text" placeholder="Password" />

			<Button type="submit" size="small">Submit</Button>
		</div>
	</form>
</div>

<style>
	.login-container {
		margin: 100px auto;
		max-width: 500px;
		padding: 2em 1em;
		background-color: var(--navbar-background);
	}
	.form-container {
		display: flex;
		flex-direction: column;
	}
	input {
		
		/*width: 100%;*/
		padding: 0.5em 1em;
		border-radius: 0.25em;
		border: 1px solid #999;
		margin-bottom: .4em;
	}
	
	label {
		display: block;
		margin-bottom: 0.5em;
	}
	input,
	label,
	h2 {
		color: var(--primary-color);
	}
	h2 {
		font-weight: 500;
		font-size: 2em;
		margin-bottom: 1em;
	}
</style>
