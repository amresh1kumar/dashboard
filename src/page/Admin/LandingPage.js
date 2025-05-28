import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import "../../components/CSS/AdminLogin.css";
import { Button, Checkbox, Form, Input } from "antd";

const LandingPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values) => {
    console.log("Entered:", values);

    const storedUsername = localStorage.getItem("adminEmail");
    const storedPassword = localStorage.getItem("adminPassword");

    if (
      values.username.trim() === storedUsername &&
      values.password.trim() === storedPassword
    ) {
      navigate("/AdminLayout");
      form.resetFields();
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <Form
      name="basic"
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ width: "100%", height: "100vh" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="form-items">
        <h1> Admin Panel</h1>

        <Form.Item
          className="common"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your mobile number or email!",
            },
          ]}
        >
          <Input
            type="email"
            placeholder="Mobile Number or Email"
            prefix={<UserOutlined style={{ fontSize: "17px" }} />}
            style={{ padding: "10px" }}
          />
        </Form.Item>

        <Form.Item
          className="common"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            className="pass"
            placeholder="Please input your password!"
            prefix={<LockOutlined style={{ fontSize: "17px" }} />}
            style={{ padding: "10px" }}
          />
        </Form.Item>

        <Form.Item className="rem-forgot" label={null}>
          <div className="rem-forgot-inner">
            <Checkbox>Remember me</Checkbox>
            <Link to="/AdminForgetpassword">Forgot Password?</Link>
          </div>
        </Form.Item>

        <Form.Item label={null} className="login-btn">
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>

        <Form.Item label={null} className="login-btn">
          <Link to="/EmpLogin">
            <Button type="primary">Employee Login</Button>
          </Link>
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <p>
            Don't have an account? <Link to="/AdminSignUpPage">Sign Up</Link>
          </p>
        </Form.Item>
      </div>
    </Form>
  );
};

export default LandingPage;
