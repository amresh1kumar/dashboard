import React from "react";
import "../components/CSS/FamilyDetalis.css";
import "../components/CSS/common.css";
import { DatePicker } from "antd";
import { Button, Checkbox, Form, Input } from "antd";

const App = () => {

  const onFinish = (values) => {
    console.log("Success:", values);
    localStorage.setItem("fatherName", values.fatherName.trim())
    localStorage.setItem("fatherAadhaarNo", values.fatherAadhaarNo.trim())
    localStorage.setItem("motherName", values.motherName.trim())
    localStorage.setItem("motherAadhaarNo", values.motherAadhaarNo.trim())
    localStorage.setItem("spouseName", values.spouseName.trim())
    localStorage.setItem("spouseDOB", values.spouseDOB.trim())
    localStorage.setItem("spouseAadhaarNo", values.spouseAadhaarNo.trim())
    localStorage.setItem("child1Name", values.child1Name.trim())
    localStorage.setItem("child1DOB", values.child1DOB.trim())
    localStorage.setItem("child1Aadhaar", values.child1Aadhaar.trim())
    localStorage.setItem("child2Name", values.child2Name.trim())
    localStorage.setItem("child2DOB", values.child2DOB.trim())
    localStorage.setItem("child2Aadhaar", values.child2Aadhaa0.trim())
    localStorage.setItem("child3Name", values.child3Name.trim())
    localStorage.setItem("child3DOB", values.child3DOB.trim())
    localStorage.setItem("child3Aadhaar", values.child3Aadhaar.trim())
    alert("Submitted Successfully")
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="familycontainer">
      <Form
        name="basic"
        layout="vertical"
        style={{ width: "100%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="father-mother-details">
          <Form.Item
            label={<label className="custom-label">Father Name</label>}
            name="fatherName"
            rules={[{ required: true, message: "Please input Father Name!" }]}
          >
            <Input placeholder="Enter  father name" />
          </Form.Item>

          <Form.Item
            label={<label className="custom-label"> Father Aadhaar Number</label>}
            name="fatherAadhaarNo"
            rules={[{ required: true, message: "Please input Father Aadhaar No.!" }]}
          >
            <Input placeholder="Enter father Aadhaar No." />
          </Form.Item>

          <Form.Item
            label={<label className="custom-label">Mother Name</label>}
            name="motherName"
            rules={[{ required: true, message: "Please input Mother Name!" }]}
          >
            <Input placeholder="Enter  Mother Name" />
          </Form.Item>

          <Form.Item
            label={<label className="custom-label"> Mother Aadhaar Number</label>}
            name="motherAadhaarNo"
            rules={[{ required: true, message: "Please input Mother Aadhaar No!" }]}
          >
            <Input placeholder="Enter Mother Aadhaar No." />
          </Form.Item>

          <Form.Item
            label={<label className="custom-label">Spouse Name</label>}
            name="spouseName"
            rules={[{ required: true, message: "Please input Spouse Name!" }]}
          >
            <Input placeholder="Enter Spouse Name" />
          </Form.Item>

          <Form.Item
            label={<label className="custom-label">Spouse Date of birth</label>}
            name="spouseDOB"
            rules={[{ required: true, message: "Please input Spouse DOB!" }]}
          >
            <DatePicker style={{ width: "100%", padding: "10px" }} />

          </Form.Item>

          <Form.Item
            label={<label className="custom-label">Spouse Aadhaar Number</label>}
            name="spouseAadhaarNo"
            rules={[{ required: true, message: "Please input Spouse Aadhaar No.!" }]}
          >
            <Input placeholder="Enter Spouse Aadhaar No." />
          </Form.Item>
        </div>

        <div className="child">
          <Form.Item
            label={<label className="custom-label">Child 1 Name</label>}
            name="child1Name"
          >
            <Input placeholder="Enter Child 1 Name" />
          </Form.Item>

          <Form.Item
            label={<label className="custom-label"> Child 1 Date of birth</label>}
            name="child1DOB"
          >
            {/* <Input placeholder="Enter Child 1 DOB" /> */}
            <DatePicker style={{ width: "100%", padding: "10px" }} />

          </Form.Item>

          <Form.Item
            label={<label className="custom-label"> Child 1 Aadhaar Number</label>}
            name="child1Aadhaar"
          >
            <Input placeholder="Enter Child 1 Aadhaar" />
          </Form.Item>
        </div>

        <div className="child">
          <Form.Item
            label={<label className="custom-label">Child 2 Name</label>}
            name="child2Name"
          >
            <Input placeholder="Enter Child 2 Name" />
          </Form.Item>

          <Form.Item
            label={<label className="custom-label"> Child 2 Date of birth</label>}
            name="child2DOB"
          >
            {/* <Input placeholder="Enter Child 2 DOB" />
             */}
            <DatePicker style={{ width: "100%", padding: "10px" }} />

          </Form.Item>

          <Form.Item
            label={<label className="custom-label"> Child 2 Aadhaar Number</label>}
            name="child2Aadhaar"
          >
            <Input placeholder="Enter Child 2 Aadhaar" />
          </Form.Item>
        </div>

        <div className="child">
          <Form.Item
            label={<label className="custom-label">Child 3 Name</label>}
            name="child3Name"
          >
            <Input placeholder="Enter Child 3 Name" />
          </Form.Item>

          <Form.Item
            label={<label className="custom-label"> Child 3 Date of birth</label>}
            name="child3DOB"
          >
            {/* <Input placeholder="Enter Child 3 DOB" /> */}
            <DatePicker style={{ width: "100%", padding: "10px" }} />

          </Form.Item>

          <Form.Item
            label={<label className="custom-label"> Child 3 Aadhaar Number</label>}
            name="child3Aadhaar"
          >
            <Input placeholder="Enter Child 3 Aadhaar" />
          </Form.Item>
        </div>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default App;
