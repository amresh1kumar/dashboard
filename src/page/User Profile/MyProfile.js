import React from "react";
import "..//../components/CSS/common.css";
import { Button, Checkbox, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const App = () => (
  <div className="contact-container">
    <Form
      name="basic"
      labelCol={{ span: 40 }}
      wrapperCol={{ span: 16 }}
      style={{ Width: "100%" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <div className="qualtification" style={{ marginTop: "50px" }}>
        <Form.Item
          label={<label className="custom-label">Name</label>}
          name="Secondary1"
          rules={[
            { required: false, message: "Please Enter  your  Name!" },
          ]}
        >
          <Input type="text" placeholder="Please Enter your  Name!" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label">Board/University</label>}
          name="Board/University1"
          rules={[
            { required: false, message: "Please input your Board/University!" },
          ]}
        >
          <Input type="text" placeholder="Enter your Board/University" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Subject</label>}
          name="Subject1"
          rules={[{ required: false, message: "Please input your Subject!" }]}
        >
          <Input type="text" placeholder="Enter your Subject" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label">Passing Year</label>}
          name="Passing Year1"
          rules={[
            { required: false, message: "Please input your Passing Year!" },
          ]}
        >
          <Input type="text" placeholder="Enter your Passing Year" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label">Percentage</label>}
          name="Percentage1"
          rules={[
            { required: false, message: "Please input your Percentage!" },
          ]}
        >
          <Input type="text" placeholder="Enter your Percentage" />
        </Form.Item>
      </div>

      <Form.Item name="remember" valuePropName="checked" label={null}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
);
export default App;
