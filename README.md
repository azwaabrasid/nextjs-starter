# NextJS Typescript Starter

This is a [Next.js](https://nextjs.org/) starter is pre-configured with the following utilities:

- [TypeScript](https://www.typescriptlang.org/)
  - TypeScript is a language for application-scale JavaScript.
- [Tailwind CSS](https://tailwindcss.com/)
  - Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.
- [ESLint](https://eslint.org/)
  - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [Prettier](https://prettier.io)
  - Prettier is an opinionated code formatter that supports a lot of different programming languages.
- [Husky](https://typicode.github.io/husky/)
  - Husky improves your commits by running checks when you commit or push.
- [Commitlint](https://commitlint.js.org/)
  - A simple tool that lints your commit messages and makes sure they follow a set of rules.

ESLint Configurations Reference:

- [Import/Order](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/order.md)

# Isolated Scripts

Isolated scripts for that are run manually can be put in the `app/_scripts/` folder. These scripts can be run using the following command:

`  npx ts-node app/_scripts/[filename]`

Please note the env variables needs to be initialized first when required by any of the imports. Place all your imports after the env variables initialization as described in the comment. Refer to the example below:

```ts
import { loadEnvConfig } from '@next/env';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

// Place imports that requires env variables below.
import { testFunction } from './testFunction';

// Write your script here.
testFunction();
```
