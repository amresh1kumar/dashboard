import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import '../Style/EmpLogin.css';

const EmpLogin = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Employee login data:', values);
    // Handle employee login logic here
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className="emp-login-container">
      <Card title="Employee Login" className="emp-login-card">
        <Form
          form={form}
          name="emp_login"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Employee ID"
            name="employeeId"
            rules={[{ required: true, message: 'Please enter your Employee ID' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <div className="emp-login-actions">
              <Button type="primary" htmlType="submit">
                Login
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </div>
          </Form.Item>

          <Form.Item>
            <div className="emp-forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default EmpLogin;
