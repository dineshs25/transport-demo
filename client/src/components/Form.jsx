/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Select, Row, Col } from 'antd';
import axios from 'axios';
import moment from 'moment';

const { Option } = Select;

const FormOne = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    locations: '', // Changed from 'locations' to 'location'
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
    const formattedValues = {
      ...values,
      travellingDate: values.travellingDate ? moment(values.travellingDate).format('YYYY-MM-DD') : '',
    };
    console.log('Submitting form data:', formattedValues); // Log form data for debugging
    try {
      const response = await axios.post('https://transport-demo-p9rh.onrender.com/formOne', formattedValues);
      console.log(response.data);
      // Handle successful form submission (e.g., display a success message or clear the form)
    } catch (error) {
      console.error('There was an error submitting the form!', error.response ? error.response.data : error.message);
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
        label="Phone"
        name="phone"
        rules={[{ required: true, message: 'Please input your phone!' }]}
      >
        <Input placeholder="Name" onChange={(e) => handleChange('phone', e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Location"
        name="location" // Changed from 'locations' to 'location'
        rules={[{ required: true, message: 'Please input your location!' }]}
      >
        <Select placeholder="Select a location" onChange={(value) => handleChange('locations', value)}> {/* Changed from 'locations' to 'location' */}
          <Option value="Tirupati">Tirupati</Option>
          <Option value="Tiruvannamalai">Tiruvannamalai</Option>
          <Option value="Madurai">Madurai</Option>
          <Option value="Srikalahasthi">Srikalahasthi</Option>
          <Option value="Kanipakam">Kanipakam</Option>
          <Option value="Kanchipuram">Kanchipuram</Option>
          <Option value="Rameswaram">Rameswaram</Option>
          <Option value="Srirangam">Srirangam</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Services"
        name="services"
        rules={[{ required: true, message: 'Please select a service!' }]}
      >
        <Select placeholder="Select a service" onChange={(value) => handleChange('services', value)}>
          <Option value="Local temple packages">Local Temple Packages</Option>
          <Option value="Hotel booking">Hotel Booking</Option>
          <Option value="Tour Guide">Tour Guide</Option>
          <Option value="Cab booking">Local Cab</Option>
          <Option value="Only Freshup">Only Freshup</Option>
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
          Get customised quote
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormOne;
