import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { NotFoundPage } from "./not-found";
import { MainPage } from "./main";

export const Router: FC = () => (
  <Routes>
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/todo-app" element={<MainPage />} />
  </Routes>
);
