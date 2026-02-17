import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ScrollToTop from "../components/ScrollToTop";

const Home = lazy(() => import("../pages/Home"));
const Projects = lazy(() => import("../pages/Projects"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

function Loader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-sm text-white/70">
        Loading portfolio modules…
      </div>
    </div>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
