import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Header/pages/Home";
import StudentInfo from "./Header/pages/StudentInfo";
import Login from "./Header/pages/Login";
import Navbar from "./navitems";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="register" element={<StudentInfo />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
