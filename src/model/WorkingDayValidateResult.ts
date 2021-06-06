class WorkingDayValidateResult {
    isValid: boolean
    message: string

    constructor(isValid: boolean, message: string) {
        this.isValid = isValid;
        this.message = message;
    }
}

export default WorkingDayValidateResult