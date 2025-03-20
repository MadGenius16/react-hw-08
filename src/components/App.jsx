import { lazy, Suspense, useEffect } from "react";
import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Layout from "./Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthRefreshing, selectAuthToken } from "../redux/auth/selectors";
import { apiRefreshUser } from "../redux/auth/operations";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";


const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage/RegistrationPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
function App() {

const dispath = useDispatch();
const isRefreshing = useSelector(selectAuthRefreshing);
const token = useSelector(selectAuthToken)

useEffect(()=>{
  if(!token) return
  dispath(apiRefreshUser())
},[dispath, token])

  if(isRefreshing) return <b>User is refreshing, please wait</b>

  return (
    <div className={css.container}>
      <Layout />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<RestrictedRoute component={<LoginPage />}/>} />
          <Route path="register" element={<RestrictedRoute component={<RegistrationPage />} />} />
          <Route path="contacts" element={<PrivateRoute component={<ContactsPage />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
