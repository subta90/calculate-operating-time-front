<script lang="ts">
    import TodaysOperatingTime from "./TodaysOperatingTime.svelte";
    import { currentSelectedMonth, currentWorkingDays } from "../../stores/store";

    let currentSelectedMonthValue: number;
    let currentWorkingDaysValue: number;

    currentSelectedMonth.subscribe(value => {
        currentSelectedMonthValue = value;
    });

    currentWorkingDays.subscribe(value => {
        currentWorkingDaysValue = value;
    });
    
</script>

<div class="container">
    <div class="currentMonth">今は{currentSelectedMonthValue}月です</div>
    <div class="currentWorkingDays">今月の稼働日数は{currentWorkingDaysValue}日です</div>
    <TodaysOperatingTime todaysOperatingTime={0}/>
</div>

<style lang="scss">

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>