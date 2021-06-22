import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { terser } from "rollup-plugin-terser";
// import copy from "rollup-plugin-copy";

const packageJson = require("./package.json");

export default {
    input: "src/lib/index.ts",
    output: [{
            file: packageJson.main,
            format: "cjs",
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        postcss({
            extract: false,
            modules: true,
            plugins: [autoprefixer(), cssnano()],
        }),
        typescript({ useTsconfigDeclarationDir: true }),
        terser(),
    ],
};