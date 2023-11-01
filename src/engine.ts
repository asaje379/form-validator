export type StringOrNumber = string | number;

export type ValidateResult = {
  isValid: boolean;
  msg?: string;
};

export class ValidatorEngine {
  static validate(condition: boolean, msg: string): ValidateResult {
    if (!condition) return { isValid: false, msg };
    return { isValid: true };
  }

  static required(value?: StringOrNumber, msg: string = 'Required') {
    return ValidatorEngine.validate(String(value).length > 0, msg);
  }

  static pattern(
    schema: string,
    value?: string,
    msg: string = 'Invalid pattern',
  ) {
    return ValidatorEngine.validate(
      new RegExp(schema).test(value as string),
      msg,
    );
  }

  static min(
    limit: number,
    value: number,
    msg: string = 'Minimum value expected: {min}',
  ) {
    return ValidatorEngine.validate(
      value >= limit,
      msg.replace('{min}', String(limit)),
    );
  }

  static max(
    limit: number,
    value: number,
    msg: string = 'Maximum value expected: {max}',
  ) {
    return ValidatorEngine.validate(
      value <= limit,
      msg.replace('{max}', String(limit)),
    );
  }

  static url(value?: string, msg: string = 'Invalid URL') {
    return ValidatorEngine.pattern('^https?://.+..+', value, msg);
  }

  static email(value?: string, msg: string = 'Invalid email') {
    return ValidatorEngine.pattern('.+@.+\\..{2,8}', value, msg);
  }

  static password(value?: string, msg: string = 'Password not strong enough') {
    return ValidatorEngine.pattern(
      '^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()-__+.]){1,}).{8,}$',
      value,
      msg,
    );
  }

  static minLength(
    limit: number,
    value: string,
    msg: string = 'Minimum characters expected: {min}',
  ) {
    return ValidatorEngine.validate(
      value.length >= limit,
      msg.replace('{min}', String(limit)),
    );
  }

  static maxLength(
    limit: number,
    value: string,
    msg: string = 'Maximum characteres expected: {max}',
  ) {
    return ValidatorEngine.validate(
      value.length <= limit,
      msg.replace('{max}', String(limit)),
    );
  }

  static decimal(value: number, msg: string = 'Decimal value expected') {
    return ValidatorEngine.validate(String(value).includes('.'), msg);
  }

  static alpha(value: string, msg: string = 'Alphabetics characters only') {
    return ValidatorEngine.pattern('^[a-zA-Z]+$', value, msg);
  }

  static alphanum(value: string, msg: string = 'Alphanumeric characters only') {
    return ValidatorEngine.pattern('^[a-zA-Zd]+$', value, msg);
  }

  static minDate(
    limit: StringOrNumber,
    value: StringOrNumber,
    msg: string = 'Must be recent than {min}',
  ) {
    return ValidatorEngine.validate(
      new Date(limit).getTime() < new Date(value).getTime(),
      msg.replace('{min}', new Date(limit).toLocaleDateString()),
    );
  }

  static maxDate(
    limit: StringOrNumber,
    value: StringOrNumber,
    msg: string = 'Must be recent than {max}',
  ) {
    return ValidatorEngine.validate(
      new Date(limit).getTime() > new Date(value).getTime(),
      msg.replace('{max}', new Date(limit).toLocaleDateString()),
    );
  }
}
