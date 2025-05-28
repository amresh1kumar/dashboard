import React, { useState } from 'react';
import { Form, Input, Button, Card } from 'antd';
import '../Style/Login.css';

const Login = () => {
  const [form] = Form.useForm();
  const [isSubmitted, setIsSubmitted] = useState(false); // Step 2

  const onFinish = (values) => {
    console.log('Login data:', values);
    setIsSubmitted(true); // Step 3
  };

  const onReset = () => {
    form.resetFields();
    setIsSubmitted(false); // Reset state so button shows again
  };

  return (
    <div className="login-container">
      <Card title="Login" className="login-card">
        <Form
          form={form}
          name="login_form"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Enter a valid email!' },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <div className="login-actions">
              {!isSubmitted && ( // Step 4: Conditionally render the Login button
                <Button type="primary" htmlType="submit" className="login-btn">
                  Login
                </Button>
              )}
              <Button htmlType="button" onClick={onReset} style={{ marginLeft: '8px' }}>
                Reset
              </Button>
            </div>
          </Form.Item>

          <Form.Item>
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
