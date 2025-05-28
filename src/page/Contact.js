import React from "react";
import "../components/CSS/Contact.css";
import "../components/CSS/common.css"
import { Button, Checkbox, Form, Input } from "antd";

const App = () => {

  const onFinish = (values) => {
    console.log("Success:", values);
    localStorage.setItem("email", values.email.trim())
    localStorage.setItem("mobile", values.mobile.trim())
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contact-container">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <div className="email-mobile">
          <div className="email">
            <Form.Item
              label={<label className="custom-label">Email</label>}
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input type="email" placeholder="Enter your email" />
            </Form.Item>
          </div>

          <Form.Item
            label={<label className="custom-label">Mobile</label>}
            name="mobile"
            rules={[{ required: true, message: "Please input your Mobile!" }]}
          >
            {/* <Input.Password /> */}
            <Input placeholder="Enter your mobile number" />
          </Form.Item>

          <div className="last-div" >
            <Form.Item name="remember" valuePropName="checked" label={null}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
}
export default App;
