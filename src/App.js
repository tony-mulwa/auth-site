import { Route, Routes } from "react-router-dom";

// pages
import { Auth, Login, Register } from "./pages/auth";
import { Dashboard, Home, ErroPage } from "./pages/dashboard";

import "./App.css";
export default function App() {
  return (
    <Routes>
      <Route path="*" element={<ErroPage />} />
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/auth" element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}
