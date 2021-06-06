<script lang="ts">
import WorkingDays from './components/WorkingDays.svelte';

let workingDays;
</script>

<main>
	<div class="input">
		<div class="workingDaysContainer">
			<WorkingDays bind:workingDays={workingDays}></WorkingDays>		
		</div>
	</div>	
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	.workingDaysContainer {
		list-style: none;
		overflow: hidden;
		display:inline-flex;
	}

</style>