import { lazy, Suspense } from "react";
import css from "./App.module.css";

import {  Route, Routes } from "react-router-dom";
import NotFound from "./NotFound/NotFound";

import Layout from "./Layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage/RegistrationPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
function App() {
  
  return (
    <div className={css.container}>
   
<Layout/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
