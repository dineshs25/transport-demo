/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Table, Input, Space } from 'antd';
import axios from 'axios';
import moment from 'moment';
import Navbar from './Navbar';
import Footer from './Footer';
import { Header } from 'antd/es/layout/layout';

const FilteredTable = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Fetch data when component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('https://transport-demo-p9rh.onrender.com/formOne');
        setData(response.data);
        setFilteredData(response.data); // Initialize filteredData
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (value) => {
    setSearchText(value);
    const filtered = data.filter(item =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      sorter: (a, b) => a.location.localeCompare(b.location),
    },
    {
      title: 'Services',
      dataIndex: 'services',
      key: 'services',
      sorter: (a, b) => a.services.localeCompare(b.services),
    },
    {
      title: 'Number of Adults',
      dataIndex: 'numberOfAdults',
      key: 'numberOfAdults',
      sorter: (a, b) => a.numberOfAdults - b.numberOfAdults,
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Number of Kids',
      dataIndex: 'numberOfKids',
      key: 'numberOfKids',
      sorter: (a, b) => a.numberOfKids - b.numberOfKids,
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Travelling Date',
      dataIndex: 'travellingDate',
      key: 'travellingDate',
      sorter: (a, b) => new Date(a.travellingDate) - new Date(b.travellingDate),
      render: (date) => (
        date ? moment(date).format('YYYY-MM-DD') : 'N/A'
      ),
    },
  ];

  return (
    <div>
      <div className="container">
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Space>
      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="_id"
      />
      </div>
    </div>
  );
};

export default FilteredTable;
