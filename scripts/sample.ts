/* eslint-disable import/first */
import { loadEnvConfig } from '@next/env';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

// Any imports that requires env variables
// must be imported after loadEnvConfig.

(async () => {
  try {
    // Write your code here.
    console.log('Sample script is running.');
  } catch (error) {
    console.error(error);
  }

  process.exit();
})();
