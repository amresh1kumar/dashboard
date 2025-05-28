import React, { useEffect, useState } from "react";
import { Table, Button, Space, Tooltip, Modal } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { GetEmployees } from "../Coreapi";
import Adduser from "../Adashboard/Adduser";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchData = async () => {
    try {
      const response = await GetEmployees();
      setUsers(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleView = (record) => {
    setSelectedUser(record);
    setViewModalVisible(true);
  };

  const handleUpdate = (record) => {
    console.log("Update record:", record);
  };

  const handleDelete = (record) => {
    console.log("Delete record:", record);
  };

  const columns = [
    { title: "Employee ID", dataIndex: "Employeeid", key: "Employeeid" },
    { title: "Username", dataIndex: "username", key: "username" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Post", dataIndex: "Post", key: "Post" },
    { title: "Mobile", dataIndex: "Mobile", key: "Mobile" },
    { title: "Office Details", dataIndex: "OfficeDetails", key: "OfficeDetails" },
    {
      title: "Beginning Time",
      dataIndex: "BeginningTime",
      key: "BeginningTime",
      render: (text) => (text ? new Date(text).toLocaleString() : "-"),
    },
    {
      title: "Ending Time",
      dataIndex: "EndingTime",
      key: "EndingTime",
      render: (text) => (text ? new Date(text).toLocaleString() : "-"),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space>
          <Tooltip title="View">
            <Button icon={<EyeOutlined />} onClick={() => handleView(record)} />
          </Tooltip>
          <Tooltip title="Update">
            <Button icon={<EditOutlined />} onClick={() => handleUpdate(record)} />
          </Tooltip>
          <Tooltip title="Delete">
            <Button icon={<DeleteOutlined />} danger onClick={() => handleDelete(record)} />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Employee List</h2>
        <Button type="primary">
          <Adduser />
        </Button>
      </div>

      <Table columns={columns} dataSource={users} rowKey="id" pagination={{ pageSize: 10 }} bordered />

      <Modal
        title="Employee Details"
        open={viewModalVisible}
        onCancel={() => setViewModalVisible(false)}
        footer={null}
      >
        {selectedUser && (
          <div>
            <p><strong>Employee ID:</strong> {selectedUser.Employeeid}</p>
            <p><strong>Name:</strong> {selectedUser.username}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Mobile:</strong> {selectedUser.Mobile}</p>
            <p><strong>Post:</strong> {selectedUser.Post}</p>
            <p><strong>Office Details:</strong> {selectedUser.OfficeDetails}</p>
            <p><strong>Father's Name:</strong> {selectedUser.Fathername}</p>
            <p><strong>Qualification:</strong> {selectedUser.Qualification}</p>
            <p><strong>Date of Birth:</strong> {selectedUser.DateofBirth ? new Date(selectedUser.DateofBirth).toLocaleDateString() : "-"}</p>
            <p><strong>Family Details:</strong> {selectedUser.FamilyDetails}</p>
            <p><strong>Beginning Time:</strong> {selectedUser.BeginningTime ? new Date(selectedUser.BeginningTime).toLocaleString() : "-"}</p>
            <p><strong>Ending Time:</strong> {selectedUser.EndingTime ? new Date(selectedUser.EndingTime).toLocaleString() : "-"}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default UserTable;
