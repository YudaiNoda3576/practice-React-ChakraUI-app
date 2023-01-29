import { memo } from "react";
import { Login } from "../components/pages/Login";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Settings } from "../components/pages/Settings";
import { NotFound } from "../components/pages/NotFound";

export const AppRoutes = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="user_management" element={<UserManagement />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
});
