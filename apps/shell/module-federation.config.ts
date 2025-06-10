import { dependencies } from "./package.json";
import type { ModuleFederationConfig } from "@rsbuild/core";

const isDev = process.env.NODE_ENV === "development";

const COURSES_URL = isDev
  ? "http://localhost:3001"
  : "https://nx-zephyr-module-federation-example-courses.vercel.app";

const PROFILE_URL = isDev
  ? "http://localhost:3002"
  : "https://nx-zephyr-module-federation-example-profile.vercel.app";

export const mfConfig: ModuleFederationConfig["options"] = {
  name: "shell",
  filename: "remoteEntry.js",
  remotes: {
    courses: `courses@${COURSES_URL}/remoteEntry.js`,
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
