/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Select, Typography, Row, Col, Divider } from 'antd';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const { Title, Text } = Typography;
const { Option } = Select;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    services: 'packages', // Default value, adjust as needed
    locations: '',
  });

  const handleChange = (value, field) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('https://transport-demo-p9rh.onrender.com/formTwo', values);
      alert(response.data.message || 'Form submitted successfully!');
    } catch (error) {
      console.error('There was an error!', error);
      alert('Failed to submit form');
    }
  };

  return (
    <div className="contact-form-main">
      <div className="container">
        <div className="container-main">
          <span className="big-circle"></span>
          <img src="img/shape.png" className="square" alt="" />
          <div className="form">
            <div className="contact-info">
              <Title level={3}>Let's get in touch</Title>
              <Text>
                We are committed to providing a wide range of technical content, from design insights to functional guides, across various languages.
              </Text>

              <Divider />

              <div className="info">
                <div className="information">
                  <FaMapMarkerAlt /> &nbsp;&nbsp;
                  <p>1050 Somandepalli Ananatapur 515122</p>
                </div>
                <div className="information">
                  <FaEnvelope /> &nbsp;&nbsp;
                  <p>mrtravel.com</p>
                </div>
                <div className="information">
                  <FaPhone /> &nbsp;&nbsp;
                  <p>+91 87875454875</p>
                </div>
              </div>

              <Divider />

              <div className="social-media">
                <Text>Connect with us:</Text>
                <div className="social-icons">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>

              <Form layout="vertical" onFinish={handleSubmit}>
                <Title level={3}>Contact us</Title>
                <Form.Item
                  label="Username"
                  name="name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input
                    placeholder="Please Enter Name"
                    value={formData.name}
                    onChange={(e) => handleChange(e.target.value, 'name')}
                  />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Please enter a valid email' }]}
                >
                  <Input
                    placeholder="Please Enter Email"
                    value={formData.email}
                    onChange={(e) => handleChange(e.target.value, 'email')}
                  />
                </Form.Item>

                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[{ required: true, message: 'Please enter your phone number' }]}
                >
                  <Input
                    placeholder="Please Enter Mobile"
                    value={formData.phone}
                    onChange={(e) => handleChange(e.target.value, 'phone')}
                  />
                </Form.Item>

               

                <Form.Item
        label="Location"
        name="location"
        rules={[{ required: true, message: 'Please input your location!' }]}
      >
        {/* <Input placeholder="Location" onChange={(e) => handleChange('locations', e.target.value)} /> */}
        <Select placeholder="Select a location" onChange={(value) => handleChange('locations', value)}>
          <Option value="Tirupati ">Tirupati </Option>
          <Option value="Tiruvannamalai ">Tiruvannamalai </Option>
          <Option value="Madurai ">Madurai </Option>
          <Option value="Srikalahasthi ">Srikalahasthi </Option>
          <Option value="Kanipakam ">Kanipakam </Option>
          <Option value="Kanchipuram ">Kanchipuram </Option>
          <Option value="Rameswaram ">Rameswaram </Option>
          <Option value="Srirangam ">Srirangam </Option>

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

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="btn">
                    Send
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
