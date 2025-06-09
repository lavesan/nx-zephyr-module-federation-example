import { dependencies } from "./package.json";
import type { ModuleFederationConfig } from "@rsbuild/core";

const isDev = process.env.NODE_ENV === "development";
const VERCEL_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const baseUrl = isDev ? "" : VERCEL_URL;

export const mfConfig: ModuleFederationConfig["options"] = {
  name: "shell",
  filename: "remoteEntry.js",
  remotes: {
    settings: `settings@${
      isDev ? "http://localhost:3001" : `${baseUrl}/settings`
    }/remoteEntry.js`,
    profile: `profile@${
      isDev ? "http://localhost:3002" : `${baseUrl}/profile`
    }/remoteEntry.js`,
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
