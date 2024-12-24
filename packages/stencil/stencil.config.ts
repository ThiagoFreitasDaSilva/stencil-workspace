import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@thiagofs/stencil',
      outputType: 'component',
      directivesProxyFile: '../../packages/angular/libs/stencil-wrapper/src/lib/proxy.ts',
      directivesArrayFile: '../../packages/angular/libs/stencil-wrapper/src/lib/index.ts',
    }),
    reactOutputTarget({
      stencilPackageName: '@thiagofs/stencil',
      outDir: '../../packages/react/lib/components/stencil-generated'
    }),
    { type: 'dist-custom-elements' }
  ],
  testing: {
    browserHeadless: "new",
  },
};
