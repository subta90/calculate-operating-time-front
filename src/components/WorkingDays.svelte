<script lang="ts">
    import { validateWorkingDays } from "../util/WorkingDaysValidator.js";
    export let workingDays: number;

    $: validationResult = validateWorkingDays(workingDays);
</script>

<div class="container">
    <div class="title">今月の稼働日数を入力:</div>
    <input
        class="inputWorkingDays"
        type="number"
        bind:value={workingDays}
        class:validField={validationResult.isValid}
        class:invalidField={!validationResult.isValid}
    />
    <div class="displayWorkingDays">
        {validationResult.message}
    </div>
</div>

<style lang="scss">
    .container {
        display: inline-flex;
    }

    .title {
        white-space: nowrap;
    }

    .inputWorkingDays {
        height: 24px;
        margin-left: 10px;
    }

    .validField {
        border-color: green;
    }

    .invalidField {
        border-color: red;
    }

    .displayWorkingDays {
        margin-left: 20px;
    }
</style>
