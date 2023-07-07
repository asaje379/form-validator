# Validator

## **Description**

A tool for easily validate a value based on specific schemas

## **Installation**

```bash
npm i @asaje/form-validator
```

or

```bash
yarn add @asaje/form-validator
```

## **How to use**

```ts
import { Validator } from '@asaje/form-validator';

const result = Validator.validate('hello', [
  Validator.required(),
  Validator.alpha(),
  Validator.minLength(5),
  Validator.maxLength(12),
]);
```
