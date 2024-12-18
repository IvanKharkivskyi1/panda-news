import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const resolve = {
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
};
