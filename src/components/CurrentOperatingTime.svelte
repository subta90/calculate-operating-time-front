<script lang="ts">
    import { validateCurrentOperatingTime } from "../util/InputValidator.js";
    export let currentOperatingTime: number;

    $: validationResult = validateCurrentOperatingTime(currentOperatingTime);
</script>

<div class="container">
    <div class="title">現在の稼働時間を入力:</div>
    <input
        class="inputCurrentOperatingTime"
        type="number"
        bind:value={currentOperatingTime}
        class:validField={validationResult.isValid}
        class:invalidField={!validationResult.isValid}
    />
    <div class="displayCurrentOperatingTime">
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

    .inputCurrentOperatingTime {
        height: 24px;
        margin-left: 10px;
    }

    .validField {
        border-color: green;
    }

    .invalidField {
        border-color: red;
    }

    .displayCurrentOperatingTime {
        margin-left: 20px;
    }
</style>
