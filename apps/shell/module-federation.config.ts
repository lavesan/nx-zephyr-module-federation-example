import { dependencies } from "./package.json";
import type { ModuleFederationConfig } from "@rsbuild/core";

const isDev = process.env.NODE_ENV === "development";

const SETTINGS_URL = isDev
  ? "http://localhost:3001"
  : "https://seu-app-settings.vercel.app"; // Substitua pelo seu domínio real da Vercel

const PROFILE_URL = isDev
  ? "http://localhost:3002"
  : "https://seu-app-profile.vercel.app"; // Substitua pelo seu domínio real da Vercel

export const mfConfig: ModuleFederationConfig["options"] = {
  name: "shell",
  filename: "remoteEntry.js",
  remotes: {
    settings: `settings@${SETTINGS_URL}/remoteEntry.js`,
    profile: `profile@${PROFILE_URL}/remoteEntry.js`,
  },
  exposes: {},
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      eager: true,
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      singleton: true,
      eager: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
