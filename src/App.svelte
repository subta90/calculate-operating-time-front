<script lang="ts">
import WorkingDays from './components/WorkingDays.svelte';
import CurrentOperatingTime from './components/CurrentOperatingTime.svelte';

let workingDays: number;
let currentOperatingTime: number;
</script>

<main>
	<div class="input">
		<WorkingDays bind:workingDays={workingDays}></WorkingDays>		
		<CurrentOperatingTime bind:currentOperatingTime={currentOperatingTime}></CurrentOperatingTime>
	</div>	
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	.input {
		display: flex;
		flex-direction: column;
	}

</style>