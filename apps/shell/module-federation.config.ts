import { dependencies } from "./package.json";
import type { ModuleFederationConfig } from "@rsbuild/core";

export const mfConfig: ModuleFederationConfig["options"] = {
  name: "shell",
  filename: "remoteEntry.js",
  remotes: {
    settings: "settings@http://localhost:3001/remoteEntry.js",
    // profile: "profile@http://localhost:3002/remoteEntry.js"
  },
  exposes: {},
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      eager: true,
      requiredVersion: dependencies.react
    },
    "react-dom": {
      singleton: true,
      eager: true,
      requiredVersion: dependencies["react-dom"]
    }
  }
};
