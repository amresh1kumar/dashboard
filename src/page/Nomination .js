import React from "react";
import "../components/CSS/Emp.css";
import "../components/CSS/common.css";
import { DatePicker } from "antd";
import { Button, Checkbox, Form, Input, Radio } from "antd";

const Nomination = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ width: "100%" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <div className="employee">
        <Form.Item
          label={<label className="custom-label">Pension nominee 1</label>}
          name="Pensionnominee1"
          rules={[
            { required: true, message: "Please Input Pension nominee 1!" },
          ]}
        >
          <Input placeholder="Enter Pension nominee 1" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label"> Pension nominee 2</label>}
          name="Pensionnominee2"
          rules={[
            { required: true, message: "Please Input Pension nominee 2!" },
          ]}
        >
          <Input placeholder="Enter Pension nominee 2" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label"> Pension nominee 3</label>}
          name="Pensionnominee3"
          rules={[
            { required: false, message: "Please Input Pension nominee 3!" },
          ]}
        >
          <Input placeholder="Enter Pension nominee 3" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label"> PF nominee 1 </label>}
          name="PFnominee1"
          rules={[
            { required: true, message: "Please Input PF nominee 1!" },
          ]}
        >
          <Input placeholder="Enter PF nominee 1" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">PF nominee 2 </label>}
          name="PFnominee2 "
          rules={[
            { required: true, message: "Please Input PF nominee 2 !" },
          ]}
        >
          <Input placeholder="Enter PF nominee 2 " />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">PF nominee 3</label>}
          name="PFnominee2 "
          rules={[
            { required: true, message: "Please Input PF nominee 3!" },
          ]}
        >
          <Input placeholder="Enter PF nominee 3" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">GSLIS nominee 1 </label>}
          name="GSLISnominee1"
          rules={[
            {
              required: true,
              message: "Please Input GSLIS nominee 1 !",
            },
          ]}
        >
          <Input placeholder="Please Input GSLIS nominee 1" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">GSLIS nominee 2 </label>}
          name="GSLISnominee2"
          rules={[
            {
              required: true,
              message: "Please Input GSLIS nominee 2 !",
            },
          ]}
        >
          <Input placeholder="Please Input GSLIS nominee 2" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label">GSLIS nominee 3 </label>}
          name="GSLISnominee3"
          rules={[
            {
              required: true,
              message: "Please Input GSLIS nominee 3 !",
            },
          ]}
        >
          <Input placeholder="Please Input GSLIS nominee 3" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label">Gratuity nominee 1 </label>}
          name="Gratuitynominee1 "
          rules={[
            {
              required: true,
              message: "Please Input Gratuity nominee 1!",
            },
          ]}
        >
          <Input placeholder="Please Input Gratuity nominee 1" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label">Gratuity nominee 2 </label>}
          name="Gratuitynominee2 "
          rules={[
            {
              required: true,
              message: "Please Input Gratuity nominee 2 !",
            },
          ]}
        >
          <Input placeholder="Please Input Gratuity nominee 2" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label">Gratuity nominee 3 </label>}
          name="Gratuitynominee3 "
          rules={[
            {
              required: true,
              message: "Please Input Gratuity nominee 3!",
            },
          ]}
        >
          <Input placeholder="Please Input Gratuity nominee 3" />
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
  );
};
export default Nomination;
