import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";

import LayoutDashboard from "layout/LayoutDashboard";
import LayoutPayment from "layout/LayoutPayment";

const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage"));
const CampaignViewPage = lazy(() => import("./pages/CampaignViewPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const ShippingPage = lazy(() => import("./pages/ShippingPage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));

Modal.setAppElement("#root");
Modal.defaultStyles = {};

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage />}></Route>
          <Route path="/campaign" element={<CampaignPage />}></Route>
          <Route path="/start-campaign" element={<StartCampaignPage />}></Route>
          <Route path="/campaign/:slug" element={<CampaignViewPage />}></Route>
          <Route path="/payment" element={<PaymentPage></PaymentPage>}></Route>
        </Route>
        <Route element={<LayoutPayment></LayoutPayment>}>
          <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route
            path="/shipping-address"
            element={<ShippingPage></ShippingPage>}
          ></Route>
        </Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/sign-in" element={<SignInPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
