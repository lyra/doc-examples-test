// vite.config.js
import { sync } from "glob";
import posthtml from '@vituum/vite-plugin-posthtml'
import fs from 'fs';
import path from 'path';
import expressions from 'posthtml-expressions'

const rawdata = fs.readFileSync(path.resolve(__dirname, 'variables.json'))
const variables = JSON.parse(rawdata)

global.vars = variables

export default {
  appType: "mpa",
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
        input: {
            input: sync("./src/**/*.html".replace(/\\/g, "/")),
            }
        },
    },
    define: {env: variables},
  plugins: [
      posthtml({
          root: path.resolve(__dirname, 'src', 'parts'),
          plugins: [
              expressions({ locals: variables })
          ]
      }),
    ]
};