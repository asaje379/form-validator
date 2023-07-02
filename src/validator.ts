import { StringOrNumber, ValidateResult, ValidatorEngine } from './engine';

export type ValidatorFn = (value: StringOrNumber) => ValidateResult;
export type ValidationResults = { isValid: boolean; messages: string[] };

export class Validator {
  static required(msg?: string) {
    return (value: StringOrNumber) => ValidatorEngine.required(value, msg);
  }

  static pattern(schema: string, msg?: string) {
    return (value: StringOrNumber) =>
      ValidatorEngine.pattern(schema, value as string, msg);
  }

  static min(limit: number, msg?: string) {
    return (value: StringOrNumber) =>
      ValidatorEngine.min(limit, value as number, msg);
  }

  static max(limit: number, msg?: string) {
    return (value: StringOrNumber) =>
      ValidatorEngine.max(limit, value as number, msg);
  }

  static url(msg?: string) {
    return (value: StringOrNumber) => ValidatorEngine.url(value as string, msg);
  }

  static email(msg?: string) {
    return (value: StringOrNumber) =>
      ValidatorEngine.email(value as string, msg);
  }

  static password(msg?: string) {
    return (value: StringOrNumber) =>
      ValidatorEngine.password(value as string, msg);
  }

  static minLength(limit: number, msg?: string) {
    return (value: StringOrNumber) =>
      ValidatorEngine.minLength(limit, value as string, msg);
  }

  static maxLength(limit: number, msg?: string) {
    return (value: StringOrNumber) =>
      ValidatorEngine.maxLength(limit, value as string, msg);
  }

  static decimal(msg?: string) {
    return (value: StringOrNumber) =>
      ValidatorEngine.decimal(value as number, msg);
  }

  static alpha(msg?: string) {
    return (value: StringOrNumber) =>
      ValidatorEngine.alpha(value as string, msg);
  }

  static alphanum(msg?: string) {
    return (value: StringOrNumber) =>
      ValidatorEngine.alphanum(value as string, msg);
  }

  static minDate(limit: StringOrNumber, msg?: string) {
    return (value: StringOrNumber) =>
      ValidatorEngine.minDate(limit, value, msg);
  }

  static maxDate(limit: StringOrNumber, msg?: string) {
    return (value: StringOrNumber) =>
      ValidatorEngine.maxDate(limit, value, msg);
  }

  static validate(
    value: StringOrNumber,
    validations: Array<ValidatorFn>,
  ): ValidationResults {
    const messages: string[] = [];
    let isValid = true;

    for (const validation of validations) {
      const validationResult = validation(value);

      if (validationResult.msg) messages.push(validationResult.msg);
      if (!validationResult.isValid) isValid = false;
    }

    return { isValid, messages };
  }
}
