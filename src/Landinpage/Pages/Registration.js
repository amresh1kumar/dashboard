import React, { useState } from 'react';
import { Form, Input, Button, Select, Card, DatePicker, Row, Col, message } from 'antd';
import '../Style/Registration.css';
import regImage from '../Landingimage/regist.jpg';

const { Option } = Select;

const registeredEmails = ['test@example.com', 'admin@example.com'];

const Registration = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    const email = values.email?.trim().toLowerCase();
    const isEmailRegistered = registeredEmails.includes(email);

    if (isEmailRegistered) {
      message.error('This email is already registered.');
      setLoading(false);
    } else {
      registeredEmails.push(email);
      message.success('Registration successful!');
      alert('Registration successful!');
      form.resetFields();
      setLoading(false);
    }
  };

  return (
    <div className="modern-register-container">
      <img src={regImage} alt="Background" className="bg-image" />
      <div className="form-glass-wrapper">
        <Card bordered={false} className="glass-card">
          <h2 className="form-title">Create Your Account</h2>
          <Form form={form} layout="vertical" onFinish={onFinish}>

            <Form.Item
              name="registrationType"
              label="Registration Type"
              rules={[{ required: true, message: 'Please select registration type' }]}
            >
              <Select placeholder="Select Registration Type">
                <Option value="employee">Employee</Option>
                <Option value="admin">Admin</Option>
              </Select>
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="fullname" label="Full Name" rules={[{ required: true }]}>
                  <Input placeholder="Enter your full name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                  <Input placeholder="you@example.com" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                  <Input.Password placeholder="••••••••" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
                  <Input placeholder="+91 XXXXX XXXXX" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="dob" label="Date of Birth" rules={[{ required: true }]}>
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                  <Select placeholder="Select gender">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item name="address" label="Address" rules={[{ required: true }]}>
              <Input.TextArea placeholder="Enter your address" rows={3} />
            </Form.Item>

            <Form.Item
              name="terms"
              valuePropName="checked"
              rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject('You must agree to terms') }]}
            >
              <div className="terms">
                <input type="checkbox" required />
                <span>I agree to the terms and conditions</span>
              </div>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                Register
              </Button>
            </Form.Item>

          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Registration;
