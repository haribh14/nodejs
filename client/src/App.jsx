import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./protected/PrivateRoute";
import NotFound from "./components/Notfound";
import BookDetails from "./pages/BookDetails";  //----

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoute/>}>
        <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path ="*" element ={<NotFound/>}/>
      </Routes>
    </div>
  );
};

export default App;