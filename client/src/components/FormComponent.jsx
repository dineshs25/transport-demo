import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Select, DatePicker, InputNumber, Form, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const servicesOptions = [
  { label: 'Local Temple Packages', value: 'local_temple_packages' },
  { label: 'Local Cab', value: 'local_cab' },
  { label: 'Hotel Booking', value: 'hotel_booking' },
  { label: 'Only Freshup', value: 'only_freshup' },
  { label: 'Personal Guide', value: 'personal_guide' },
];

const FormComponent = () => {
  const { handleSubmit, control, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];
    const updatedData = [...existingData, data];
    localStorage.setItem('formData', JSON.stringify(updatedData));
    reset();
    navigate('/table');
    console.log("data",data)
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
      <Form.Item label="Name" name="name">
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <Form.Item label="Location" name="location">
        <Controller
          name="location"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <Form.Item label="Services" name="services">
        <Controller
          name="services"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select {...field} placeholder="Select services">
              {servicesOptions.map(option => (
                <Option key={option.value} value={option.value}>{option.label}</Option>
              ))}
            </Select>
          )}
        />
      </Form.Item>

      <Form.Item label="Number of Adults" name="adults">
        <Controller
          name="adults"
          control={control}
          defaultValue={1}
          render={({ field }) => (
            <InputNumber min={1} {...field} />
          )}
        />
      </Form.Item>

      <Form.Item label="Number of Children" name="children">
        <Controller
          name="children"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <InputNumber min={0} {...field} />
          )}
        />
      </Form.Item>

      <Form.Item label="Travelling Date" name="date">
        <Controller
          name="date"
          control={control}
          defaultValue={null}
          render={({ field }) => <DatePicker {...field} />}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
