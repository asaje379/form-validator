export type StringOrNumber = string | number;
export type ValidateResult = {
    isValid: boolean;
    msg?: string;
};
export declare class ValidatorEngine {
    static validate(condition: boolean, msg: string): ValidateResult;
    static required(value?: StringOrNumber, msg?: string): ValidateResult;
    static pattern(schema: string, value?: string, msg?: string): ValidateResult;
    static min(limit: number, value: number, msg?: string): ValidateResult;
    static max(limit: number, value: number, msg?: string): ValidateResult;
    static url(value?: string, msg?: string): ValidateResult;
    static email(value?: string, msg?: string): ValidateResult;
    static password(value?: string, msg?: string): ValidateResult;
    static minLength(limit: number, value: string, msg?: string): ValidateResult;
    static maxLength(limit: number, value: string, msg?: string): ValidateResult;
    static decimal(value: number, msg?: string): ValidateResult;
    static alpha(value: string, msg?: string): ValidateResult;
    static alphanum(value: string, msg?: string): ValidateResult;
    static minDate(limit: StringOrNumber, value: StringOrNumber, msg?: string): ValidateResult;
    static maxDate(limit: StringOrNumber, value: StringOrNumber, msg?: string): ValidateResult;
}
