import React, { useState } from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

const EmpForgetpassword = () => {
  const [emailVerified, setEmailVerified] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleEmailVerify = (values) => {
    const storedEmail = localStorage.getItem("adminEmail");

    if (values.email.trim() === storedEmail) {
      alert("Email verified. You can now reset your password.");
      setEmailVerified(true);
    } else {
      alert("Email not found. Please enter your registered email.");
    }
  };

  const handleResetPassword = (values) => {
    if (values.newPassword !== values.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    localStorage.setItem("adminPassword", values.newPassword.trim());
    alert("Password reset successfully!");
    form.resetFields();
    setEmailVerified(false);

    setTimeout(() => {
      navigate("/LandingPage");
    }, 1500);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ width: "100%", height: "100vh" }}
      onFinish={emailVerified ? handleResetPassword : handleEmailVerify}
    >
      <div className="form-items">
        <h1>Create a new Password</h1>
        <Form.Item
          className="common"
          name="email"
          // label="Registered Email"
          rules={[
            { required: true, message: "Please enter your registered email" },
          ]}
        >
          <Input
            placeholder="Enter your registered email"
            prefix={<MailOutlined style={{ fontSize: "17px" }} />}
            style={{ padding: "10px" }}
          />
        </Form.Item>

        {emailVerified && (
          <>
            <Form.Item
              name="newPassword"
              // label="New Password"
              rules={[
                { required: true, message: "Please enter new password" },
                { min: 6, message: "Password must be at least 6 characters" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined style={{ fontSize: "17px" }} />}
                style={{ padding: "10px" }}
                placeholder="New password"
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={["newPassword"]}
              hasFeedback
              rules={[
                { required: true, message: "Please confirm new password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined style={{ fontSize: "17px" }} />}
                style={{ padding: "10px" }}
                placeholder="Confirm new password"
              />
            </Form.Item>
          </>
        )}

        <Form.Item label={null} className="login-btn">
          <Button type="primary" htmlType="submit" block>
            {emailVerified ? "Reset Password" : "Verify Email"}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default EmpForgetpassword;
