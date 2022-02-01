<script lang="ts">
	/**
	 * Footer HTML
	 * =====================
	 *
	 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
	 *
	 * @license: MIT License
	 *
	 */
	import "./footer.ts";
	import { translate } from "@app/translations/translate";
</script>

<footer class="footer">
	<div class="content has-text-centered">
		<p>
			{translate("footer_license")} <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
		</p>
	</div>
</footer>

<style lang="scss">
	@import "./footer.scss";
</style>
