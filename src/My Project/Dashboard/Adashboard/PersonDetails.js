// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   Button,
//   Space,
//   Tooltip,
//   Modal,
//   Form,
//   Input,
//   message,
// } from "antd";
// import {
//   EyeOutlined,
//   EditOutlined,
//   DeleteOutlined,
//   PlusOutlined,
// } from "@ant-design/icons";
// import { GetEmployees, DeleteEmployee } from "../Coreapi";
// import { useNavigate } from "react-router-dom";

// const UserTable = () => {
//   const [users, setUsers] = useState([]);
//   const [viewModalVisible, setViewModalVisible] = useState(false);
//   const [editModalVisible, setEditModalVisible] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [form] = Form.useForm();
//   const navigate = useNavigate();

//   const handleGet = async () => {
//     try {
//       const response = await GetEmployees();
//       setUsers(response);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   useEffect(() => {
//     handleGet();
//   }, []);

//   const handleView = (record) => {
//     setSelectedUser(record);
//     setViewModalVisible(true);
//   };

//   const handleUpdate = (record) => {
//     setSelectedUser(record);
//     setEditModalVisible(true);
//     form.setFieldsValue(record);
//   };

//   const handleDelete = async (record) => {
//     try {
//       await DeleteEmployee(record.id);
//       message.success("Employee deleted successfully");
//       handleGet();
//     } catch (error) {
//       console.error("Delete error:", error);
//       message.error("Failed to delete employee");
//     }
//   };

//   const handleEditSubmit = async () => {
//     const updatedData = form.getFieldsValue();
//     try {
//       await fetch(`http://localhost:8000/employees/${selectedUser.id}/`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedData),
//       });
//       setEditModalVisible(false);
//       handleGet();
//       message.success("Employee updated successfully!");
//     } catch (error) {
//       console.error("Update error:", error);
//       message.error("Error updating employee.");
//     }
//   };

//   const columns = [
//     { title: "Employee ID", dataIndex: "Employeeid", key: "Employeeid" },
//     { title: "Username", dataIndex: "username", key: "username" },
//     { title: "Email", dataIndex: "email", key: "email" },
//     { title: "Post", dataIndex: "Post", key: "Post" },
//     { title: "Mobile", dataIndex: "Mobile", key: "Mobile" },
//     {
//       title: "Office Details",
//       dataIndex: "OfficeDetails",
//       key: "OfficeDetails",
//     },
//     {
//       title: "Beginning Time",
//       dataIndex: "BeginningTime",
//       key: "BeginningTime",
//       render: (text) => (text ? new Date(text).toLocaleString() : "-"),
//     },
//     {
//       title: "Ending Time",
//       dataIndex: "EndingTime",
//       key: "EndingTime",
//       render: (text) => (text ? new Date(text).toLocaleString() : "-"),
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (text, record) => (
//         <Space>
//           <Tooltip title="View">
//             <Button
//               icon={<EyeOutlined />}
//               onClick={() => handleView(record)}
//             />
//           </Tooltip>
//           <Tooltip title="Update">
//             <Button
//               icon={<EditOutlined />}
//               onClick={() => handleUpdate(record)}
//             />
//           </Tooltip>
//           <Tooltip title="Delete">
//             <Button
//               icon={<DeleteOutlined />}
//               danger
//               onClick={() => handleDelete(record)}
//             />
//           </Tooltip>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div>
//       {/* Header and Add User Button */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginBottom: 16,
//         }}
//       >
//         <h2>Employee List</h2>
//         <Button
//           type="primary"
//           icon={<PlusOutlined />}
//           onClick={() => navigate("/employee")}
//         >
//           Add User
//         </Button>
//       </div>

//       {/* Table */}
//       <Table
//         columns={columns}
//         dataSource={users}
//         rowKey="id"
//         pagination={{ pageSize: 10 }}
//         bordered
//       />

//       {/* View Modal */}
//       <Modal
//         title="Employee Details"
//         open={viewModalVisible}
//         onCancel={() => setViewModalVisible(false)}
//         footer={null}
//       >
//         {selectedUser && (
//           <div>
//             <p>
//               <strong>Employee ID:</strong> {selectedUser.Employeeid}
//             </p>
//             <p>
//               <strong>Name:</strong> {selectedUser.username}
//             </p>
//             <p>
//               <strong>Email:</strong> {selectedUser.email}
//             </p>
//             <p>
//               <strong>Mobile:</strong> {selectedUser.Mobile}
//             </p>
//             <p>
//               <strong>Post:</strong> {selectedUser.Post}
//             </p>
//             <p>
//               <strong>Office Details:</strong> {selectedUser.OfficeDetails}
//             </p>
//             <p>
//               <strong>Father's Name:</strong> {selectedUser.Fathername}
//             </p>
//             <p>
//               <strong>Qualification:</strong> {selectedUser.Qualification}
//             </p>
//             <p>
//               <strong>Date of Birth:</strong>{" "}
//               {selectedUser.DateofBirth
//                 ? new Date(selectedUser.DateofBirth).toLocaleDateString()
//                 : "-"}
//             </p>
//             <p>
//               <strong>Family Details:</strong> {selectedUser.FamilyDetails}
//             </p>
//             <p>
//               <strong>Beginning Time:</strong>{" "}
//               {selectedUser.BeginningTime
//                 ? new Date(selectedUser.BeginningTime).toLocaleString()
//                 : "-"}
//             </p>
//             <p>
//               <strong>Ending Time:</strong>{" "}
//               {selectedUser.EndingTime
//                 ? new Date(selectedUser.EndingTime).toLocaleString()
//                 : "-"}
//             </p>
//           </div>
//         )}
//       </Modal>

//       {/* Update Modal */}
//       <Modal
//         title="Update Employee"
//         open={editModalVisible}
//         onCancel={() => setEditModalVisible(false)}
//         onOk={handleEditSubmit}
//         okText="Update"
//       >
//         <Form form={form} layout="vertical">
//           <Form.Item name="Employeeid" label="Employee ID">
//             <Input />
//           </Form.Item>
//           <Form.Item name="username" label="Username">
//             <Input />
//           </Form.Item>
//           <Form.Item name="email" label="Email">
//             <Input />
//           </Form.Item>
//           <Form.Item name="Mobile" label="Mobile">
//             <Input />
//           </Form.Item>
//           <Form.Item name="Post" label="Post">
//             <Input />
//           </Form.Item>
//           <Form.Item name="OfficeDetails" label="Office Details">
//             <Input />
//           </Form.Item>
//           <Form.Item name="Fathername" label="Father's Name">
//             <Input />
//           </Form.Item>
//           <Form.Item name="Qualification" label="Qualification">
//             <Input />
//           </Form.Item>
//           <Form.Item name="DateofBirth" label="Date of Birth">
//             <Input type="date" />
//           </Form.Item>
//           <Form.Item name="FamilyDetails" label="Family Details">
//             <Input.TextArea rows={2} />
//           </Form.Item>
//           <Form.Item name="BeginningTime" label="Beginning Time">
//             <Input type="datetime-local" />
//           </Form.Item>
//           <Form.Item name="EndingTime" label="Ending Time">
//             <Input type="datetime-local" />
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default UserTable;


import React, { useEffect, useState, useRef } from "react";
import {
  Table,
  Button,
  Space,
  Tooltip,
  Modal,
  Form,
  Input,
  message,
  Popconfirm,
} from "antd";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { GetEmployees, DeleteEmployee } from "../Coreapi";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const printRef = useRef();

  const handleGet = async () => {
    try {
      const response = await GetEmployees();
      setUsers(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  const handleView = (record) => {
    setSelectedUser(record);
    setViewModalVisible(true);
  };

  const handleUpdate = (record) => {
    setSelectedUser(record);
    const formatted = {
      ...record,
      DateofBirth: record.DateofBirth
        ? record.DateofBirth.split("T")[0]
        : null,
      BeginningTime: record.BeginningTime
        ? new Date(record.BeginningTime).toISOString().slice(0, 16)
        : null,
      EndingTime: record.EndingTime
        ? new Date(record.EndingTime).toISOString().slice(0, 16)
        : null,
    };
    form.setFieldsValue(formatted);
    setEditModalVisible(true);
  };

  const handleDelete = async (record) => {
    try {
      await DeleteEmployee(record.id);
      message.success("Employee deleted successfully");
      handleGet();
    } catch (error) {
      console.error("Delete error:", error);
      message.error("Failed to delete employee");
    }
  };

  const handleEditSubmit = async () => {
    const updatedData = form.getFieldsValue();
    try {
      await fetch(`http://localhost:8000/employees/${selectedUser.id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      setEditModalVisible(false);
      handleGet();
      message.success("Employee updated successfully!");
      setSelectedUser(updatedData);
      setViewModalVisible(true);
    } catch (error) {
      console.error("Update error:", error);
      message.error("Error updating employee.");
    }
  };

  return (
    <EmployeeList
      employees={users}
      onView={handleView}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
      navigate={navigate}
      printRef={printRef}
      viewModalVisible={viewModalVisible}
      setViewModalVisible={setViewModalVisible}
      selectedUser={selectedUser}
      editModalVisible={editModalVisible}
      setEditModalVisible={setEditModalVisible}
      form={form}
      handleEditSubmit={handleEditSubmit}
    />
  );
};

const EmployeeList = ({
  employees,
  onView,
  onUpdate,
  onDelete,
  navigate,
  printRef,
  viewModalVisible,
  setViewModalVisible,
  selectedUser,
  editModalVisible,
  setEditModalVisible,
  form,
  handleEditSubmit,
}) => {
  const handleDownloadSingle = (record) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Employee Details", 14, 15);

    const details = [
      ["Employee ID", record.Employeeid],
      ["Username", record.username],
      ["Email", record.email],
      ["Post", record.Post],
      ["Mobile", record.Mobile],
      ["Office Details", record.OfficeDetails],
      ["Father's Name", record.Fathername],
      ["Qualification", record.Qualification],
      [
        "Date of Birth",
        record.DateofBirth
          ? new Date(record.DateofBirth).toLocaleDateString()
          : "-",
      ],
      ["Family Details", record.FamilyDetails],
      [
        "Beginning Time",
        record.BeginningTime
          ? new Date(record.BeginningTime).toLocaleString()
          : "-",
      ],
      [
        "Ending Time",
        record.EndingTime
          ? new Date(record.EndingTime).toLocaleString()
          : "-",
      ],
    ];

    autoTable(doc, {
      startY: 25,
      head: [["Field", "Value"]],
      body: details,
      theme: "grid",
      styles: { fontSize: 12 },
      headStyles: { fillColor: [22, 160, 133] },
    });

    doc.save(`${record.Employeeid}-employee-details.pdf`);
  };

  const downloadAll = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Employee List", 14, 15);

    if (!Array.isArray(employees) || employees.length === 0) {
      doc.text("No user data available.", 14, 25);
      doc.save("employee-list.pdf");
      return;
    }

    const selectedFields = [
      "Employeeid",
      "username",
      "Post",
      "Mobile",
      "DateofBirth",
    ];

    const tableBody = employees.map((user) =>
      selectedFields.map((field) => user[field] || "")
    );

    autoTable(doc, {
      startY: 20,
      head: [selectedFields],
      body: tableBody,
      theme: "grid",
      styles: { fontSize: 10, cellPadding: 2 },
      headStyles: { fillColor: [22, 160, 133] },
    });

    doc.save("employee-list.pdf");
  };

  const columns = [
    { title: "Employee ID", dataIndex: "Employeeid", key: "Employeeid" },
    { title: "Username", dataIndex: "username", key: "username" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Post", dataIndex: "Post", key: "Post" },
    { title: "Mobile", dataIndex: "Mobile", key: "Mobile" },
    {
      title: "Office Details",
      dataIndex: "OfficeDetails",
      key: "OfficeDetails",
    },
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
            <Button icon={<EyeOutlined />} onClick={() => onView(record)} />
          </Tooltip>
          <Tooltip title="Update">
            <Button icon={<EditOutlined />} onClick={() => onUpdate(record)} />
          </Tooltip>
          <Tooltip title="Delete">
            <Popconfirm
              title="Are you sure to delete this employee?"
              onConfirm={() => onDelete(record)}
              okText="Yes"
              cancelText="No"
            >
              <Button icon={<DeleteOutlined />} danger />
            </Popconfirm>
          </Tooltip>
          <Tooltip title="Download PDF">
            <Button type="default" onClick={() => handleDownloadSingle(record)}>
              PDF
            </Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div ref={printRef}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <h2>Employee List</h2>
        <Space>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => navigate("/employee")}
          >
            Add User
          </Button>
          <Button onClick={downloadAll}>Download All</Button>
        </Space>
      </div>

      <Table
        columns={columns}
        dataSource={employees}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        bordered
      />

      {/* View Modal */}
      <Modal
        title="Employee Details"
        open={viewModalVisible}
        onCancel={() => setViewModalVisible(false)}
        footer={null}
      >
        {selectedUser && (
          <div>
            <p><strong>Employee ID:</strong> {selectedUser.Employeeid}</p>
            <p><strong>Username:</strong> {selectedUser.username}</p>
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

      {/* Edit Modal */}
      <Modal
        title="Update Employee"
        open={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        onOk={handleEditSubmit}
        okText="Update"
      >
        <Form form={form} layout="vertical">
          <Form.Item name="Employeeid" label="Employee ID">
            <Input />
          </Form.Item>
          <Form.Item name="username" label="Username">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input />
          </Form.Item>
          <Form.Item name="Mobile" label="Mobile">
            <Input />
          </Form.Item>
          <Form.Item name="Post" label="Post">
            <Input />
          </Form.Item>
          <Form.Item name="OfficeDetails" label="Office Details">
            <Input />
          </Form.Item>
          <Form.Item name="Fathername" label="Father's Name">
            <Input />
          </Form.Item>
          <Form.Item name="Qualification" label="Qualification">
            <Input />
          </Form.Item>
          <Form.Item name="DateofBirth" label="Date of Birth">
            <Input type="date" />
          </Form.Item>
          <Form.Item name="FamilyDetails" label="Family Details">
            <Input.TextArea rows={2} />
          </Form.Item>
          <Form.Item name="BeginningTime" label="Beginning Time">
            <Input type="datetime-local" />
          </Form.Item>
          <Form.Item name="EndingTime" label="Ending Time">
            <Input type="datetime-local" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserTable;

