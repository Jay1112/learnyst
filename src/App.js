import React, { useEffect } from "react";
import { signInWithGoogle } from "./config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebase";
import { useDispatch } from "react-redux";
import { AuthActions } from "./redux/constants/AuthConstants";
import useUser from "./hooks/useUser";
import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import useTheme from "./hooks/useTheme";
import LogInPage from "./pages/LogInPage/LogInPage";

function App() {
  const dispatch = useDispatch();
  const [user, loading, error] = useAuthState(auth);
  const { getUser } = useUser();
  const { initialTheme } = useTheme();

  // function handleClick() {
  //   signInWithGoogle();
  // }

  useEffect(() => {
    initialTheme();
    if (user) {
      getUser(user.email)
    }
  }, [user]);

  return (
    <Routes>
      {   user      &&  !loading   &&  <Route path="/" element={<HomePage/>}></Route>}
      {   !user     &&  !loading   &&  <Route path="/login" element={<LogInPage/>}></Route>}
      {   !user     &&  !loading   &&  <Route path="/" element={<ProductPage/>}></Route>}
      {   loading   &&  <Route path="*" element={<LoadingPage/>}></Route> }
      {   !loading  &&  <Route path="*" element={<PageNotFound/>}></Route> }
    </Routes>
  );
}

export default App;
