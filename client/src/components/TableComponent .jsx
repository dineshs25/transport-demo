import React, { useState, useEffect } from 'react';
import { Table, Tag, Space } from 'antd';

const TableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Retrieve and parse data from local storage
    try {
      const formData = localStorage.getItem('formData');
      // Check if formData exists and is a valid JSON string
      if (formData) {
        const parsedData = JSON.parse(formData);
        // Ensure parsedData is an array
        if (Array.isArray(parsedData)) {
          setData(parsedData);
        } else {
          console.error('Parsed data is not an array:', parsedData);
          setData([]);
        }
      } else {
        setData([]);
      }
    } catch (error) {
      console.error('Error parsing formData from local storage:', error);
      setData([]);
    }
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Services',
      dataIndex: 'services',
      key: 'services',
      render: (services) => (
        <Space>
          {services ? services.split(',').map((service, index) => (
            <Tag key={index}>{service}</Tag>
          )) : 'N/A'}
        </Space>
      ),
    },
    {
      title: 'Adults',
      dataIndex: 'adults',
      key: 'adults',
    },
    {
      title: 'Children',
      dataIndex: 'children',
      key: 'children',
    },
    {
      title: 'Travelling Date',
      dataIndex: 'date',
      key: 'date',
      render: (date) => date ? new Date(date).toLocaleDateString() : 'N/A',
    },
  ];

  return (
    <Table dataSource={data} columns={columns} rowKey="name" />
  );
};

export default TableComponent;
