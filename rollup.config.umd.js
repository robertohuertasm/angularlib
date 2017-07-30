import resolve from 'rollup-plugin-node-resolve';

const globals = {
  '@angular/core': 'ng.core',
  'rxjs/Observable': 'Rx',
  'rxjs/add/operator/map': 'Rx.Observable.prototype'
};

export default {
  entry: 'build/out/angularlib-components.js',
  dest: 'dist/bundles/angularlib-components.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'angularlib.components',
  sourceMap: false,
  plugins: [resolve()],
  globals: globals,
  external: Object.keys(globals),
};
