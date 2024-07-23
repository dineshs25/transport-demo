import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Select, Row, Col } from 'antd';
import axios from 'axios';

const { Option } = Select;

const FormOne = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    services: '',
    travellingDate: '',
    numberOfAdults: 0,
    numberOfKids: 0,
    email: ''
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('https://transport-demo-pm9rh.onrender.com/formOne', values);
      console.log(response.data);
      // Handle successful form submission (e.g., display a success message or clear the form)
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      // Handle error (e.g., display an error message)
    }
  };

  const increment = (field) => {
    setFormData({ ...formData, [field]: formData[field] + 1 });
  };

  const decrement = (field) => {
    if (formData[field] > 0) {
      setFormData({ ...formData, [field]: formData[field] - 1 });
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={formData}
      style={{ maxWidth: 600, margin: '0 auto' }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input placeholder="Name" onChange={(e) => handleChange('name', e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Location"
        name="location"
        rules={[{ required: true, message: 'Please input your location!' }]}
      >
        <Input placeholder="Location" onChange={(e) => handleChange('location', e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Services"
        name="services"
        rules={[{ required: true, message: 'Please select a service!' }]}
      >
        <Select placeholder="Select a service" onChange={(value) => handleChange('services', value)}>
          <Option value="local temple packages">Local Temple Packages</Option>
          <Option value="hotel booking">Hotel Booking</Option>
          <Option value="personal guide">Personal Guide</Option>
          <Option value="local cab">Local Cab</Option>
          <Option value="only freshup">Only Freshup</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Travelling Date"
        name="travellingDate"
        rules={[{ required: true, message: 'Please select your travelling date!' }]}
      >
        <DatePicker style={{ width: '100%' }} onChange={(date, dateString) => handleChange('travellingDate', dateString)} />
      </Form.Item>

      <Form.Item label="Number of Adults" name="numberOfAdults">
        <Row gutter={8}>
          <Col>
            <Button onClick={() => decrement('numberOfAdults')}>-</Button>
          </Col>
          <Col>
            <Input value={formData.numberOfAdults} readOnly style={{ width: '60px', textAlign: 'center' }} />
          </Col>
          <Col>
            <Button onClick={() => increment('numberOfAdults')}>+</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item label="Number of Kids" name="numberOfKids">
        <Row gutter={8}>
          <Col>
            <Button onClick={() => decrement('numberOfKids')}>-</Button>
          </Col>
          <Col>
            <Input value={formData.numberOfKids} readOnly style={{ width: '60px', textAlign: 'center' }} />
          </Col>
          <Col>
            <Button onClick={() => increment('numberOfKids')}>+</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
      >
        <Input placeholder="Email" onChange={(e) => handleChange('email', e.target.value)} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormOne;
