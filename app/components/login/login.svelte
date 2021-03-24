<script>
	/**
	 * Login HTML
	 * =====================
	 * Svelte Page
	 *
	 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
	 *
	 * @license: MIT License
	 *
	 */
	export let login;
</script>

<div class="container">
	<section class="login">
		<div class="field">
			<label class="label">Email2</label>
			<div class="control has-icons-left has-icons-right">
				<input class="input is-danger" type="email" placeholder="hello@domain.com" value="" />
				<span class="icon is-small is-left">
					<i class="fas fa-envelope" />
				</span>
				<span class="icon is-small is-right">
					<i class="fas fa-exclamation-triangle" />
				</span>
			</div>
			<p class="help is-danger">This email is invalid</p>
		</div>

		<div class="field">
			<label class="label">Password</label>
			<div class="control">
				<input class="input" type="password" placeholder="" />
			</div>
		</div>

		<div class="field">
			<div class="control">
				<label class="checkbox">
					<input type="checkbox" />
					I agree to the <a href="#">terms and conditions</a>
				</label>
			</div>
		</div>

		<div class="field is-grouped">
			<div class="control">
				<button class="button is-link" on:click={login}>Submit</button>
			</div>
			<div class="control">
				<button class="button is-link is-light">Cancel</button>
			</div>
		</div>
	</section>
</div>
