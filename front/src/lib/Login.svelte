<script>
	import Button from '$lib/Button.svelte';
</script>

<div class="login-container">
	<h2>Contact Us</h2>
	<form method="POST" action="#"class="form-container">
		<div class="form-group">
			<label class="col-md-3 control-label" for="name">Name</label>
			<div class="col-md-9">
				<input id="name" name="name" type="text" placeholder="Your name" class="form-control" />
			</div>
		</div>

		<div class="form-group">
			<label class="col-md-3 control-label" for="password">Password</label>
			<div class="col-md-9">
				<input
					id="password"
					name="password"
					type="text"
					placeholder="Password"
					class="form-control"
				/>
			</div>
		</div>

		<div class="form-group">
			<div class="col-md-12">
				<Button type="submit" size="small">Submit</Button>
			</div>
		</div>
	</form>
</div>

<style>
	.login-container {
		margin:100px 10%;
		/*padding: 2em 1em;*/
		background-color: var(--navbar-background);
	}
	input{
		width: 100%;
		padding: 0.5em 1em;
		border-radius: 0.25em;
		border: 1px solid #999;
	}
	.form-group {
		/*margin-bottom: 1.5em;*/
	}
	label {
		display: block;
		/*margin-bottom: 0.5em;*/
	}
	input,
	textarea,
	label,
	h2 {
		color: var(--primary-color);
	}
	h2 {
		font-weight: 500;
		/*font-size: 2em;*/
		/*margin-bottom: 1em;*/
	}
</style>
