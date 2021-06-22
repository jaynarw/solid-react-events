import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default [{
    input: [
        "src/index.ts",
    ],
    output: [{
        dir: "dist",
        format: "esm",
        sourcemap: true,
    }, ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        postcss({
            modules: true,
            plugins: [autoprefixer(), cssnano()],
        }),
        typescript({
            useTsconfigDeclarationDir: true,
        }),
        terser(),
    ],
}, ];