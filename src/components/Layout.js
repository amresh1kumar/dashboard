import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./CSS/sidebar.css";
import UserProfileDropdown from "../page/User Profile/UserProfileDropdown";
import { IoPersonCircle } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";
import { MdFamilyRestroom } from "react-icons/md";
import { HiBuildingOffice } from "react-icons/hi2";
import { PiStudent } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import EmpDropdown from "../page/EmployeeDetails/empDropdown";

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    console.log(location);
    console.log(currentPath);
  });

  return (
    <div className="container">
      <div className="sidebar">
        {/* <IoPersonCircle className="icons-unique" />
        <Link to="/Layout">
          <button
            className={currentPath === "/Layout" ? "active-button" : ""}
            style={{ marginTop: "20px" }}
          >
            Employee Details
          </button>
        </Link>

        <MdContactPhone className="icons" />
        <Link to="Contact">
          <button
            className={currentPath === "/Layout/Contact" ? "active-button" : ""}
          >
            Contact Details
          </button>
        </Link>
        <PiStudent className="icons" />
        <Link to="Qualification">
          <button
            className={
              currentPath === "/Layout/Qualification" ? "active-button" : ""
            }
          >
            Qualification
          </button>
        </Link>

        <MdFamilyRestroom className="icons" />
        <Link to="Family">
          <button
            className={currentPath === "/Layout/Family" ? "active-button" : ""}
          >
            Family Details
          </button>
        </Link> */}

        {/* <HiBuildingOffice className="icons" />
        <Link to="Office">
          <button
            className={currentPath === "/Layout/Office" ? "active-button" : ""}
          >
            Office Details
          </button>
        </Link>
        <UserProfileDropdown /> */}
        <IoPersonCircle className="icons-unique" />
        <EmpDropdown style={{ marginTop: "20px", border: "1px solid red" }} />

        <IoIosLogOut className="icons" />
        <Link to="/EmpLogin">
          <button
            className={
              currentPath === "/Layout/EmpLogin" ? "active-button" : ""
            }
          >
            Log out
          </button>
        </Link>
      </div>

      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
