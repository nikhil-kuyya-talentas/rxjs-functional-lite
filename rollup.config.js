import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript';
import multiInput from 'rollup-plugin-multi-input';
import serve from 'rollup-plugin-serve';

export default [{
    input: ["./samples/**/index.ts"],
    output: [{
      dir: './',
      format: 'cjs'
    }],
    plugins : [nodeResolve(),typescript(),multiInput(),serve({
      open : true,
      host: 'localhost',
      port : 12345,
      verbose : true,
      contentBase : 'samples'      
    })]
}
];

