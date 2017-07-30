import resolve from 'rollup-plugin-node-resolve';

const globals = {
  '@angular/core': 'ng.core',
  'rxjs/Observable': 'Rx',
  'rxjs/add/operator/map': 'Rx.Observable.prototype'
};

export default {
  entry: 'build/out/angularlib-components.js',
  dest: 'dist/angularlib-components.es5.js',
  format: 'es',
  exports: 'named',
  moduleName: 'angularlib.components',
  sourceMap: false,
  plugins: [resolve()],
  globals: globals,
  external: Object.keys(globals),
};