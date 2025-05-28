import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";

const AdminLogin = () => {
  
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values) => {
    console.log("Success:", values);

    const storedUsername = localStorage.getItem("empEmail");
    const storedPassword = localStorage.getItem("empPassword");

    if (
      values.username.trim() === storedUsername &&
      values.password.trim() === storedPassword
    ) {
      navigate("/Layout");
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
        <h1>Employee Login Portal</h1>

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
            <Link to="/EmpForgetpassword">Forgot Password?</Link>
          </div>
        </Form.Item>

        <Form.Item label={null} className="login-btn">
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>

        <Form.Item label={null} className="login-btn">
          <Link to="/LandingPage">
            <Button type="primary">Admin Login</Button>
          </Link>
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <p>
            Don't have an account? <Link to="/EmpSignUpPage">Sign Up</Link>
          </p>
        </Form.Item>
      </div>
    </Form>
  );
};

export default AdminLogin;
