import WorkingDayValidateResult from "../model/WorkingDayValidateResult";

export function validateWorkingDays(workingDays: number): WorkingDayValidateResult {
    const workingDaysUpperLimit = 31

    if (workingDays === undefined) {
        return new WorkingDayValidateResult(false, "稼働日数が未入力です");
    }
    if (workingDays > workingDaysUpperLimit) {
        return new WorkingDayValidateResult(false, "そんな日付は存在しません");
    }
    return new WorkingDayValidateResult(true, `今月の稼働日数は ${workingDays} です`);
}
