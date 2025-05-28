import React from "react";
// import "../components/CSS/Contact.css";
import "../components/CSS/common.css";
import "../components/CSS/Qualification.css";
import { Button, Checkbox, Form, Input } from "antd";

const App = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    localStorage.setItem("Qualification1", values.Qualification1.trim())
    localStorage.setItem("Qualification2", values.Qualification2.trim())
    localStorage.setItem("Qualification3", values.Qualification3.trim())
    localStorage.setItem("Qualification4", values.Qualification4.trim())
    localStorage.setItem("Qualification5", values.Qualification5.trim())
    alert("Submitted Successfully")
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="qualification">
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 40 }}
        wrapperCol={{ span: 16 }}
        style={{ width: "100%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <div className="qualification" style={{ marginTop: "50px" }}>
          <Form.Item
            label={<label className="custom-label">Qualification 1</label>}
            name="Qualification1"
            rules={[{ required: true, message: "Please input your Qualification 1!" }]}

          >
            <Input type="text" placeholder="Enter Qualification 1" />
          </Form.Item>
          <Form.Item
            label={<label className="custom-label"> Qualification 2</label>}
            name="Qualification2"
            rules={[
              { required: false, message: "Please input your Qualification 2!" },
            ]}
          >
            <Input type="text" placeholder="Enter Qualification 2" />
          </Form.Item>

          <Form.Item
            label={<label className="custom-label">Qualification 3</label>}
            name="Qualification3"
            rules={[{ required: false, message: "Please input your Qualification 3!" }]}
          >
            <Input type="text" placeholder="Enter Qualification 3" />
          </Form.Item>

          <Form.Item
            label={<label className="custom-label">Qualification 4</label>}
            name="Qualification4"
            rules={[
              { required: false, message: "Please input your Qualification 4!" },
            ]}
          >
            <Input type="text" placeholder="Enter Qualification 4" />
          </Form.Item>

          <Form.Item
            label={<label className="custom-label">Qualification 5</label>}
            name="Qualification5"
            rules={[
              { required: false, message: "Please input your Qualification 5!" },
            ]}
          >
            <Input type="text" placeholder="Enter Qualification 5" />
          </Form.Item>
        </div>
        {/* <div className="Qualification" style={{ marginTop: "50px" }}>
        <Form.Item
          label={<label className="custom-label">Secondary</label>}
          name="Secondary1"
                  rules={[{ required: false, message: "Please input your course name!" }]}

        >
          <Input type="text" placeholder="Please input your course name!" />
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
      
      <div className="Qualification">
        <Form.Item
          label={<label className="custom-label"> Senior Secondary</label>}
          name="Senior Secondary2"
          rules={[
            { required: false, message: "Please input your course name!" },
          ]}
        >
          <Input type="text" placeholder="Please input your course name!" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Board/University</label>}
          name="Board/University2"
          rules={[
            { required: false, message: "Please input your Board/University!" },
          ]}
        >
          <Input type="text" placeholder="Enter your Board/University" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Subject</label>}
          name="Subject2"
          rules={[{ required: false, message: "Please input your Subject!" }]}
        >
          <Input type="text" placeholder="Enter your Subject" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label">Passing Year</label>}
          name="Passing Year2"
          rules={[
            { required: false, message: "Please input your Passing Year!" },
          ]}
        >
          <Input type="text" placeholder="Enter your Passing Year" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label">Percentage</label>}
          name="Percentage2"
          rules={[
            { required: false, message: "Please input your Percentage!" },
          ]}
        >
          <Input type="text" placeholder="Enter your Percentage" />
        </Form.Item>
      </div>

      <div className="Qualification">
        <Form.Item
          label={<label className="custom-label">Graduation</label>}
          name="Graduation"
          rules={[
            { required: false, message: "Please input your course name!!" },
          ]}
        >
          <Input type="text" placeholder="Please input your course name!" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label">Board/University</label>}
          name="Board/University3"
          rules={[
            { required: false, message: "Please input your Board/University!" },
          ]}
        >
          <Input type="text" placeholder="Enter your Board/University" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Subject</label>}
          name="Subject3"
          rules={[{ required: false, message: "Please input your Subject!" }]}
        >
          <Input type="text" placeholder="Enter your Subject" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label">Passing Year</label>}
          name="Passing Year3"
          rules={[
            { required: false, message: "Please input your Passing Year!" },
          ]}
        >
          <Input type="text" placeholder="Enter your Passing Year" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label">Percentage</label>}
          name="Percentage3"
          rules={[
            { required: false, message: "Please input your Percentage!" },
          ]}
        >
          <Input type="text" placeholder="Enter your Percentage" />
        </Form.Item>
      </div>

      <div className="Qualification">
        <Form.Item
          label={<label className="custom-label">Post Graduation</label>}
          name="Post Graduation4"
          rules={[
            { required: false, message: "Please input your course name!!" },
          ]}
        >
          <Input type="text" placeholder="Please input your course name!" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label">Board/University</label>}
          name="Board/University4"
          rules={[
            { required: false, message: "Please input your Board/University!" },
          ]}
        >
          <Input type="text" placeholder="Enter your Board/University" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Subject</label>}
          name="Subject4"
          rules={[{ required: false, message: "Please input your Subject!" }]}
        >
          <Input type="text" placeholder="Enter your Subject" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label">Passing Year</label>}
          name="Passing Year4"
          rules={[
            { required: false, message: "Please input your Passing Year!" },
          ]}
        >
          <Input type="text" placeholder="Enter your Passing Year" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label">Percentage</label>}
          name="Percentage4"
          rules={[
            { required: false, message: "Please input your Percentage!" },
          ]}
        >
          <Input type="text" placeholder="Enter your Percentage" />
        </Form.Item>
      </div>

      <div className="Qualification">
        <Form.Item
          label={<label className="custom-label">Any Other</label>}
          name="Any Other"
          rules={[{ required: false, message: "Please input your course name!" }]}
        >
          <Input type="text" placeholder="Please input your course name!" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label">Board/University</label>}
          name="Board/University5"
          rules={[
            { required: false, message: "Please input your Board/University!" },
          ]}
        >
          <Input type="text" placeholder="Enter your Board/University" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Subject</label>}
          name="Subject5"
          rules={[{ required: false, message: "Please input your Subject!" }]}
        >
          <Input type="text" placeholder="Enter your Subject" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label">Passing Year</label>}
          name="Passing Year5"
          rules={[
            { required: false, message: "Please input your Passing Year!" },
          ]}
        >
          <Input type="text" placeholder="Enter your Passing Year" />
        </Form.Item>
        <Form.Item
          label={<label className="custom-label">Percentage</label>}
          name="Percentage5"
          rules={[
            { required: false, message: "Please input your Percentage!" },
          ]}
        >
          <Input type="text" placeholder="Enter your Percentage" />
        </Form.Item>
      </div> */}

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
}
export default App;
