import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.script.js',
      format: 'iife',
      external: ['tinycolor2', 'lodash/flattenDeep'],
      name: 'suddzzColor',
      globals: {
        tinycolor2: 'tinyColor',
        'lodash/flattenDeep': 'flattenDeep',
      },
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'es',
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
  ],
};
