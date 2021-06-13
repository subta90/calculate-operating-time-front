<script lang="ts">
    import { getContext } from "svelte";
    import { push } from "svelte-spa-router";
    import StartMonthDialog from "./StartMonthDialog.svelte";
    import { currentSelectedMonth, currentWorkingDays} from '../../stores/store.js';

    const { open } = getContext("simple-modal");

    const showStartMonth = () => {
        open(StartMonthDialog, {
            onOK: () => {
                push("/main");
            },
        });
    };
</script>

<p><button on:click={showStartMonth}>開始</button></p>
