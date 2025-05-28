import { Form, Input, Button, Steps, Typography, message, Row, Col, DatePicker } from 'antd';
import { UserOutlined, PhoneOutlined, HomeOutlined, FileDoneOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Registerdata } from "../Coreapi";
import { useNavigate } from 'react-router-dom';

// Inside your component

const { Step } = Steps;
const { Title, Text } = Typography;

const EmployeeRegistration = () => {
    const [current, setCurrent] = useState(0);
    const [formData, setFormData] = useState({});
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const steps = [
        {
            title: 'Personal',
            icon: <UserOutlined />,
            content: (
                <>
                    <Title level={4}>Personal Details</Title>
                    <Row gutter={16} style={{ marginLeft: '20px', justifyContent: 'space-evenly' }}>
                        <Col span={12}>
                            <Form.Item name="Employeeid" label="Employee ID" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="username" label="Employee Name" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="Fathername" label="Father's Name">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="Qualification" label="Qualification">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="DateofBirth" label="Date of Birth" rules={[{ required: true }]}>
                                <DatePicker style={{ width: '100%' }} format="YYYY-MM-DD" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="FamilyDetails" label="Family Details">
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                </>
            ),
        },
        {
            title: 'Contact',
            icon: <PhoneOutlined />,
            content: (
                <>
                    <Title level={4}>Contact Details</Title>
                    <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="Mobile" label="Mobile" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </>
            ),
        },
        {
            title: 'Organization',
            icon: <HomeOutlined />,
            content: (
                <>
                    <Title level={4}>Organization Details</Title>
                    <Form.Item name="Post" label="Post" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="OfficeDetails" label="Office Details">
                        <Input />
                    </Form.Item>
                    <Title level={4}>Time Slots</Title>
                    <Form.Item name="BeginningTime" label="Beginning Time" rules={[{ required: true }]}>
                        <DatePicker style={{ width: '100%' }} format="YYYY-MM-DD HH:mm:ss" />
                    </Form.Item>
                    <Form.Item name="EndingTime" label="Ending Time" rules={[{ required: true }]}>
                        <DatePicker style={{ width: '100%' }} format="YYYY-MM-DD HH:mm:ss" />
                    </Form.Item>
                </>
            ),
        },
        {
            title: 'Review',
            icon: <FileDoneOutlined />,
            content: (
                <>
                    <Title level={3}>Review Your Details</Title>
                    <div
                        style={{
                            background: '#fafafa',
                            padding: '30px 25px',
                            borderRadius: '10px',
                            border: '1px solid #e0e0e0',
                            marginTop: '20px',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        {Object.entries(formData).map(([key, value]) => (
                            <div key={key} style={{ marginBottom: '18px' }}>
                                <Text style={{ fontSize: '14px', color: '#888' }}>
                                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                </Text>
                                <br />
                                <Text strong style={{ fontSize: '16px', color: '#333' }}>
                                    {/* Format Date for display */}
                                    {value instanceof Date ? value.toLocaleString() : value}
                                </Text>
                            </div>
                        ))}
                    </div>
                </>
            ),
        },
    ];

    const next = () => {
        form.validateFields().then(values => {
            // Format date fields
            if (values.BeginningTime) values.BeginningTime = values.BeginningTime.format('YYYY-MM-DD HH:mm:ss');
            if (values.EndingTime) values.EndingTime = values.EndingTime.format('YYYY-MM-DD HH:mm:ss');
            if (values.DateofBirth) values.DateofBirth = values.DateofBirth.format('YYYY-MM-DD');
            
            setFormData(prev => ({ ...prev, ...values }));
            form.resetFields();
            setCurrent(current + 1);
        });
    };

    const prev = () => {
        form.setFieldsValue(formData);
        setCurrent(current - 1);
    };
   


    const handleFinish = async () => {
        try {
            await Registerdata(formData); // Post the final data
            message.success('Employee data submitted successfully!');
            alert('Employee data submitted successfully!');
            console.log('Submitted Data:', formData);
            
            // Navigate to Employee Detail page
            navigate('/PersonDetails');  // Adjust the path according to your route
        } catch (error) {
            message.error('Failed to submit employee data.');
            console.error(error);
        }
    };
    
    return (
        <div style={{ maxWidth: 800, margin: '50px auto' }}>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} icon={item.icon} />
                ))}
            </Steps>

            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                style={{ marginTop: 40 }}
            >
                {steps[current].content}

                <div style={{ marginTop: 30, display: 'flex', justifyContent: 'space-between' }}>
                    {current > 0 && (
                        <Button onClick={prev}>Previous</Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={next}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    )}
                </div>
            </Form>
        </div>
    );
};

export default EmployeeRegistration;
