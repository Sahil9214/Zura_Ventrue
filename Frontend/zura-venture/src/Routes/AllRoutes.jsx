import React from "react";
import { Routes, Route } from "react-router-dom";
import Upload from "../Pages/uploadingFilePage";
import Widget from "../Pages/WPage";
import Deployment from "../Pages/DeploymentFile";
import Pricing from "../Pages/PricingPage";
import Home from "../Pages/Home/Home";
import Transcript from "../Pages/Edit/Transcript";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project/:id" element={<Upload />}></Route>
        <Route path="/widget" element={<Widget />}></Route>
        <Route path="/deployment" element={<Deployment />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/transcript/:id" element={<Transcript />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
