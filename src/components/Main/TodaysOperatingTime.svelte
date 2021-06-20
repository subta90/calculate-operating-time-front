<script lang="ts">
    import { validateCurrentOperatingTime } from "../../util/InputValidator.js";
    export let todaysOperatingTime: number;

    $: validationResult = validateCurrentOperatingTime(todaysOperatingTime);
</script>

<div class="container">
    <div class="title">今日の稼働時間を入力:</div>
    <input
        class="inputCurrentOperatingTime"
        type="number"
        step="0.1"
        bind:value={todaysOperatingTime}
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
