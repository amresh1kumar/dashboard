import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
// import Homepage from "./components/Homepage";
import Employee from "./page/Employee";
import Contact from "./page/Contact";
import Qualification from "./page/Qulification";
import FamilyDetails from "./page/FamilyDetalis";
import OfficeDetails from "./page/office/Office";
import MyProfile from "./page/User Profile/MyProfile";
import EditProfile from "./page/User Profile/EditProfile";
import ChangePassword from "./page/User Profile/ChangePassword";
import Nomination from "./page/Nomination ";
import Intial from "./page/Intial"

//new

import Header from '../src/Landinpage/Pages/Header'
import Home from '../src/Landinpage/Pages/Home'
import Contactess from "./Landinpage/Pages/Contactss"
import About from '../src/Landinpage/Pages/About'
import Footer from '../src/Landinpage/Pages/Footer'
import Main from './Landinpage/Component/Main'
import Container from './Component/Pages/Container'

//Admin Login
import LandingPage from "./page/Admin/LandingPage";
import Register from "./page/Admin/Register";
import ForgotPassword from "./page/Admin/ForgotPassword";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./page/AdminPage/Dashboard";

//Employee Login
import EmpLogin from "./page/Emp/EmpLogin";
import EmpSignUp from "./page/Emp/SignUp";
import EmpForgotPassword from "./page/Emp/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contactess' element={<Contactess />}></Route>
        <Route path='/Container' element={<Container />}></Route>
      </Routes>
      <Routes>
        {/* For Admin login */}
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/AdminSignUpPage" element={<Register />} />
        <Route path="/AdminForgetpassword" element={<ForgotPassword />} />
        <Route path="/EmpLogin" element={<EmpLogin />} />
        <Route path="/AdminLayout" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

        {/* For Employee login */}
        <Route path="/EmpSignUpPage" element={<EmpSignUp />} />
        <Route path="/EmpForgetpassword" element={<EmpForgotPassword />} />

        {/* Main page */}
        <Route path="/Layout" element={<Layout />}>
          <Route index element={<Employee />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Family" element={<FamilyDetails />} />
          <Route path="Office" element={<OfficeDetails />} />
          <Route path="Qualification" element={<Qualification />} />
          <Route path="Nomination" element={<Nomination />} />
          <Route path="Intial" element={<Intial />} />
          <Route path="UserProfile" element={<MyProfile />} />
          <Route path="EditProfile" element={<EditProfile />} />
          <Route path="ChangePassword" element={<ChangePassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
