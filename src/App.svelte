<script lang="ts">
	import Router from 'svelte-spa-router';
	import Main from "./components/Main/Main.svelte";
	import StartMonth from "./components/StartMonth/StartMonth.svelte";
	import Modal from 'svelte-simple-modal';

	let selectedMonth = 1;
	let workingDays = 20;

	const routes = {
		"/": StartMonth,
		"/main": Main,
		"*": Main,
	};
</script>

<main>
	<h1>稼働時間計算くん</h1>
	<Modal>
		<Router routes={routes}></Router>
	</Modal>
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
</style>
