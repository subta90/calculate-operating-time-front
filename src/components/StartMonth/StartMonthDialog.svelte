<script lang="ts">
    import { getContext } from 'svelte';
    import { validateWorkingDays } from "../../util/InputValidator.js";
    import { currentSelectedMonth, currentWorkingDays } from "../../stores/store";
    
    const { close } = getContext('simple-modal');

    let selectedMonth = 1;
    let workingDays = 20;
    export let onOK = () => {};
    $: validationResult = validateWorkingDays(workingDays);

    const onClickedOK = () => {
        currentSelectedMonth.set(selectedMonth);
        currentWorkingDays.set(workingDays);
        onOK();
        close();
    };
</script>

<div class="container">
    <h3>開始月と稼働予定日数を入力してください</h3>
    <input
        class="selectMonth"
        type="number"
        bind:value={selectedMonth}
        min="1"
        max="12"
    />
    <input
        class="selectWorkingDays"
        type="number"
        bind:value={workingDays}
        min="0"
    />
    <button
        class="okButton"
        on:click={onClickedOK}
        disabled={!validationResult.isValid}>OK</button
    >
</div>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .selectMonth {
        width: 44px;
    }

    .okButton {
        width: 44px;
    }
</style>
