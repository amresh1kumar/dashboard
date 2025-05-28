import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../components/CSS/common.css";
import "../../components/CSS/UserProfile.css";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const items = [
  {
    key: "1",
    label: (
      <label style={{ color: "#fff", fontSize: "1.2rem", fontWeight: "500" }}>
        User Profile
      </label>
    ),
    children: [
      {
        key: "2",
        label: (
          <Link className="menu-items" to="/Layout/UserProfile">
            My Profile
          </Link>
        ),
      },
      {
        key: "3",
        label: (
          <Link className="menu-items" to="/Layout/EditProfile">
            Edit Profile
          </Link>
        ),
      },
      {
        key: "4",
        label: (
          <Link className="menu-items" to="/Layout/ChangePassword">
            Change Password
          </Link>
        ),
      },
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
const App = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["231"]}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      items={items}
      className="dropdown"
    />
  );
};
export default App;
