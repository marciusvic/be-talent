import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
