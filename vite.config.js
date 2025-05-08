// vite.config.js
import { sync } from "glob";

export default {
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
};