import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./CSS/sidebar.css";
import { RxDashboard } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { ImUserTie } from "react-icons/im";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineReport } from "react-icons/md";


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
        <RxDashboard className="icons-unique" />
        <Link to="/AdminLayout">
          <button
            className={currentPath === "/AdminLayout" ? "active-button" : ""}
            style={{ marginTop: "20px" }}
          >
            Dashboard
          </button>
        </Link>

        <ImUserTie className="icons" />
        <Link>
          <button className={currentPath === "/" ? "active-button" : ""}>
            Employee Management
          </button>
        </Link>

        <FaRegUser className="icons" />
        <Link>
          <button className={currentPath === "/" ? "active-button" : ""}>
            User Profile
          </button>
        </Link>

        <MdOutlineReport className="icons" />
        <Link>
          <button className={currentPath === "/" ? "active-button" : ""}>
            Report Analystics
          </button>
        </Link>

        <IoSettingsOutline className="icons" />
        <Link>
          <button className={currentPath === "/" ? "active-button" : ""}>
            Settings
          </button>
        </Link>

        <IoIosLogOut className="icons" />
        <Link to="/LandingPage">
          <button className={currentPath === "/LandingPage" ? "active-button" : ""}>
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
