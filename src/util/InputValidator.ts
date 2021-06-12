import ValidationResult from "../model/ValidationResult";

export function validateWorkingDays(workingDays: number): ValidationResult {
    const workingDaysUpperLimit = 31

    if (workingDays === undefined) {
        return new ValidationResult(false, "稼働日数が未入力です");
    }
    if (workingDays > workingDaysUpperLimit) {
        return new ValidationResult(false, "そんな日付は存在しません");
    }
    return new ValidationResult(true, `今月の稼働日数は ${workingDays} です`);
}

export function validateCurrentOperatingTime(operatingTime: number): ValidationResult {
    const currentOperatingTimeLowerLimit = 0

    if (operatingTime === undefined) {
        return new ValidationResult(false, "稼働時間が未入力です");
    }

    if (operatingTime < currentOperatingTimeLowerLimit) {
        return new ValidationResult(false, "時間がマイナスになってます");
    }

    return new ValidationResult(true, `現在の稼働時間は ${operatingTime} です`);
}
