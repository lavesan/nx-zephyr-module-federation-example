import { lazy, Suspense } from "react";
const Settings = lazy(() => import("settings/App"));
// const Profile = lazy(() => import("profile/App"));

import "./App.css";

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div style={{ display: "flex", gap: 2 }}>
        <div
          style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Settings />
          </Suspense>
        </div>
        {/* <div
          style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Profile />
          </Suspense>
        </div> */}
      </div>
    </div>
  );
};

export default App;
