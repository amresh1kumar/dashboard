import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values) => {
    console.log("Success:", values);

    const emailStored = localStorage.getItem("adminEmail");

    if (values.username.trim() === emailStored) {
      alert("Email already registered");
      return;
    }

    localStorage.setItem("adminEmail", values.username.trim());
    localStorage.setItem("adminPassword", values.password.trim());
    localStorage.setItem("adminConfirmPassword", values.confirmPassword.trim());
    alert("Admin Register Successfully");
    navigate("/LandingPage");
  };
  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ Width: "100%", height: "100vh" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="form-items">
        <h1>Admin Sign Up Portal</h1>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your mobile number or email!",
            },
            {
              type: "email",
              message: "Please enter a valid email!",
            },
          ]}
        >
          <Input
            type="email"
            name="username"
            placeholder="Mobile Number or Email"
            prefix={<UserOutlined style={{ fontSize: "17px" }} />}
            style={{ padding: "10px" }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 6, message: "Password must be at least 6 characters" },
          ]}
        >
          <Input.Password
            placeholder="Please input your password!"
            prefix={<LockOutlined style={{ fontSize: "17px" }} />}
            style={{ padding: "10px" }}
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Please input your confirm password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match!"));
              },
            }),
          ]}
        >
          <Input.Password
            styles={{ marginTop: "10px" }}
            placeholder="Please input your confirm password!"
            prefix={<LockOutlined style={{ fontSize: "17px" }} />}
            style={{ padding: "10px" }}
          />
        </Form.Item>

        <Form.Item label={null} className="login-btn">
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <p>
            Already have an account?<Link to="/LandingPage">Login</Link>
          </p>
        </Form.Item>
      </div>
    </Form>
  );
};

export default AdminLogin;
