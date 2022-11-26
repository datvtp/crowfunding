import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/sign-in" element={<SignInPage />}></Route>
        <Route path="/campaign" element={<CampaignPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
