import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login.jsx";
import ForgotPwd from "./pages/auth/ForgotPwd.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import Register from "./pages/auth/Register.jsx";
import Demandes from "./pages/admin/Demandes.jsx";
import DashboardAdmin from "./pages/admin/DashboardAdmin.jsx"
import RendezVous from "./pages/patient/RendezVous.jsx"
import DashboardPatient from "./pages/patient/DashboardPatient.jsx"
import Profil from "./pages/soignant/Profil.jsx"
import DashboardSoignant from "./pages/soignant/DashboardSoignant.jsx"
const storedUserData = JSON.parse(localStorage.getItem('userData'));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {
          !storedUserData && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgotpassword" element={<ForgotPwd />} />
              <Route path="/resetpassword/:token" element={<ResetPassword />} />
            </>
          )
        }
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>

        {/* Admin Routes */}
        {storedUserData && storedUserData.role === "ADMIN" && (
          <>
            <Route path="/admin" element={<DashboardAdmin/>} />
            <Route path="/admin/demandes" element={<Demandes />} />
          </>
        )}

        {/* Soignant Routes */}
        {storedUserData && storedUserData.role === "SOIGNANT" && (
          <>
            <Route path="/soignant" element={<DashboardSoignant />} />
            <Route path="/soignant/profil" element={<Profil />} />
          </>
        )}

        {/* Patient Routes */}
        {storedUserData && storedUserData.role === "PATIENT" && (
          <>
            <Route path="/patient" element={<DashboardPatient />} />
            <Route path="/soignant/rendezvous" element={<RendezVous />} />
          </>
        )}

        {/* Redirect to Home if Route Not Found */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
