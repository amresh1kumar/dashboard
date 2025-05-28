import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../components/CSS/common.css";
import "../../components/CSS/UserProfile.css";

import { Menu } from "antd";

const App = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const items = [
    {
      key: "1",
      label: <label className="custom-menu-label">Employee Details</label>,
      children: [
        {
          key: "2",
          label: (
            <Link
              className={`menu-items ${isActive("/Layout") ? "active-link" : ""
                }`}
              to="/Layout"
            >
              Personal Details
            </Link>
          ),
        },
        {
          key: "3",
          label: (
            <Link
              className={`menu-items ${isActive("/Layout/Contact") ? "active-link" : ""
                }`}
              to="/Layout/Contact"
            >
              Contact Details
            </Link>
          ),
        },
        {
          key: "4",
          label: (
            <Link
              className={`menu-items ${isActive("/Layout/Qualification") ? "active-link" : ""
                }`}
              to="/Layout/Qualification"
            >
              Qualification
            </Link>
          ),
        },
        {
          key: "5",
          label: (
            <Link
              className={`menu-items ${isActive("/Layout/Family") ? "active-link" : ""
                }`}
              to="/Layout/Family"
            >
              Family Details
            </Link>
          ),
        },
        // {
        //   key: "6",
        //   label: (
        //     <Link
        //       className={`menu-items ${isActive("/Layout/Nomination") ? "active-link" : ""
        //         }`}
        //       to="/Layout/Nomination"
        //     >
        //       Nomination
        //     </Link>
        //   ),
        // },

        // {
        //   key: "7",
        //   label: (
        //     <Link
        //       className={`menu-items ${isActive("/Layout/Intial") ? "active-link" : ""
        //         }`}
        //       to="/Layout/Intial"
        //     >
        //       Intial
        //     </Link>
        //   ),
        // },
      ],
    },
  ];

  const getLevelKeys = (items1) => {
    const key = {};
    const func = (items2, level = 1) => {
      items2.forEach((item) => {
        if (item.key) {
          key[item.key] = level;
        }
        if (item.children) {
          func(item.children, level + 1);
        }
      });
    };
    func(items1);
    return key;
  };

  const levelKeys = getLevelKeys(items);
  const [stateOpenKeys, setStateOpenKeys] = useState(["0", "23"]);

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      items={items}
      className="dropdown"
      style={{ paddingLeft: 0 }}
    />
  );
};

export default App;
