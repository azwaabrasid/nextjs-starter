import { loadEnvConfig } from '@next/env';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

// Place imports that requires env variables below.

(async () => {
  try {
    console.info('Sample script is running.');
  } catch (error) {
    console.error(error);
  }

  process.exit();
})();
