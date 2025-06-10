import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { mfConfig } from "./module-federation.config";

export default defineConfig({
  server: {
    port: 3002,
  },
  plugins: [pluginReact({ splitChunks: { react: false, router: false } })],
  moduleFederation: {
    options: mfConfig,
  },
});
