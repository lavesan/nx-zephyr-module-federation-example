import { dependencies } from "./package.json";

export const mfConfig = {
  name: "settings",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App"
  },
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
