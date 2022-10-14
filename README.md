# NextJS Typescript Starter

This is a [Next.js](https://nextjs.org/) starter is pre-configured with the following utilities:

- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io)
- [Husky](https://typicode.github.io/husky/)
- [Commitlint](https://commitlint.js.org/)
- [Jest](https://jestjs.io)

ESLint Configurations Reference:

- [Import/Order](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/order.md)

# Isolated Scripts

Isolated scripts for that are run manually can be put in the `/scripts/` folder.

Please note the env variables needs to be initialized first when required by any of the imports. Eslint [import/first](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md) rule will need to be disabled. Refer to the example below:

```ts
/* eslint-disable import/first */
import { loadEnvConfig } from '@next/env';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

// Any imports that requires env variables
// must be imported after loadEnvConfig.
import { testFunction } from './testFunction';

// Write your script here.
testFunction();
```
