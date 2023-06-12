import { StringOrNumber, ValidateResult } from './engine';
export type ValidatorFn = (value: StringOrNumber) => ValidateResult;
export declare class Validator {
    static required(msg?: string): (value: StringOrNumber) => ValidateResult;
    static pattern(schema: string, msg?: string): (value: StringOrNumber) => ValidateResult;
    static min(limit: number, msg?: string): (value: StringOrNumber) => ValidateResult;
    static max(limit: number, msg?: string): (value: StringOrNumber) => ValidateResult;
    static url(msg?: string): (value: StringOrNumber) => ValidateResult;
    static email(msg?: string): (value: StringOrNumber) => ValidateResult;
    static password(msg?: string): (value: StringOrNumber) => ValidateResult;
    static minLength(limit: number, msg?: string): (value: StringOrNumber) => ValidateResult;
    static maxLength(limit: number, msg?: string): (value: StringOrNumber) => ValidateResult;
    static decimal(msg?: string): (value: StringOrNumber) => ValidateResult;
    static alpha(msg?: string): (value: StringOrNumber) => ValidateResult;
    static alphanum(msg?: string): (value: StringOrNumber) => ValidateResult;
    static minDate(limit: StringOrNumber, msg?: string): (value: StringOrNumber) => ValidateResult;
    static maxDate(limit: StringOrNumber, msg?: string): (value: StringOrNumber) => ValidateResult;
    static validate(value: StringOrNumber, validations: Array<ValidatorFn>): {
        isValid: boolean;
        messages: string[];
    };
}
