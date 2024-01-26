import React from 'react'
import "../../scss/dashboard/dashboard/dashboard.scss"
import { BsArrowDownLeft , BsArrowUpRight } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { Dropdown, Select, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { TiArrowUnsorted } from "react-icons/ti";
import { Column , Pie } from '@ant-design/plots';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { useRef } from 'react';
import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import StarRatings from 'react-star-ratings';

export default function Dashboard() {
  const data = [
    {
      type: 'smoothy',
      sales: 38,
    },
    {
      type: 'shinar',
      sales: 500,
    },
    {
      type: 'pasadena',
      sales: 400,
    },
    {
      type: 'reactor',
      sales: 145,
    },
    {
      type: 'salina',
      sales: 260,
    },
    {
      type: 'shamed',
      sales: 350,
    },
    {
      type: 'surya',
      sales: 290,
    },
    {
      type: 'soedi arebia',
      sales: 600,
    },
    {
      type: 'janisary',
      sales: 500,
    },
    {
      type: 'debrowary',
      sales: 400,
    },
    {
      type: 'march',
      sales: 145,
    },
    {
      type: 'reactor1',
      sales: 145,
    },
    {
      type: 'salina1',
      sales: 260,
    },
    {
      type: 'janisary0',
      sales: 500,
    },
    {
      type: 'debrowary0',
      sales: 400,
    },
    {
      type: 'march1',
      sales: 145,
    },
    {
      type: 'reactor12',
      sales: 145,
    },
    {
      type: 'salina12',
      sales: 260,
    },
    {
      type: 'janisary02',
      sales: 500,
    },
    {
      type: 'debrowary02',
      sales: 400,
    },


  ];

  const tableData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      status : "green",
      color:"red",
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Joe Black',
      age: 42,
      status : "warning",
      color:"green",
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      status : "success",
      color:"yellow",
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      status : "geekblue",
      color:"blue",
      address: 'London No. 2 Lake Park',
    },
    {
      key: '5',
      name: 'Jim Red',
      age: 32,
      status : "red",
      color:"blue",
      address: 'London No. 2 Lake Park',
    },
  ];
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      sorter: (a, b) => a.address.length - b.address.length,
      ...getColumnSearchProps('name'),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      ...getColumnSearchProps('age'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (tags) => {
        return <span >
          <Tag color={tags}>
            {tags}
          </Tag>
        </span>
      },
      width: '20%',
    },
    {
      title: 'color',
      dataIndex: 'color',
      key: 'color',
      width: '20%',
      ...getColumnSearchProps('color'),
    },

    {
      width: '20%',
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  return (
    <div className="dashboard">
      <header className='mb-5 px-3 '>
        <div className='bg-white p-3 d-flex align-items-center justify-content-between'>
          <h2 className='text-capitalize'>Dashboard</h2>
          <div className='head-right d-flex gap-2'>
            <Select
              suffixIcon={<TiArrowUnsorted />}
              defaultValue="7 october 2022"
              // onChange={}
              options={[
                {
                  value: '7 october 2022',
                  label: '7 october 2022',
                },
                {
                  value: '7 october 2022',
                  label: '7 october 2022',
                },
                {
                  value: 'Yiminghe',
                  label: 'yiminghe',
                },
                {
                  value: 'disabled',
                  label: 'Disabled',
                  disabled: true,
                },
              ]}
            />
            <button className='text-capitalize'>Export</button>
          </div>
        </div>
      </header>
      <div className="statistics">
        <div className="row">
          <div className="col-md-3">
            <div className="content p-4">
                <div className="content-header mb-3 d-flex justify-content-between">
                    <h5 className='text-capitalize'>total sales</h5>
                    <Dropdown
                      align={{ offset: [0, 40] }}
                        menu={{
                          items : [{
                              key: 'notification1',
                              label: (
                                <Link to="">
                                  notification1
                                </Link>
                              ),
                            },
                            {
                              key: 'notification2',
                              label: (
                                <Link to="">
                                  notification2
                                </Link>
                              ),
                            },
                            {
                              key: 'notification3',
                              label: (
                                <Link to="">
                                  notification3
                                </Link>
                              ),
                            }]
                        }}
                        placement="right"
                      >
                        <CiMenuKebab></CiMenuKebab>
                      </Dropdown>
                </div>
                <div className="content-body d-flex align-items-end justify-content-between">
                    <div className="content-price">
                      <span>$25536.025</span>
                    </div>
                    <div className="content-percentage d-flex flex-column align-items-end">
                      <div className='icon'>
                        <BsArrowDownLeft></BsArrowDownLeft>
                        <span>32.5%</span>
                      </div>
                      <div className="date">
                        <span className='text-uppercase'>Compared to april 2023</span>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content p-4">
                <div className="content-header mb-3 d-flex justify-content-between">
                    <h5 className='text-capitalize'>average total value</h5>
                              <Dropdown
                      align={{ offset: [0, 40] }}
                        menu={{
                          items : [{
                              key: 'notification1',
                              label: (
                                <Link to="">
                                  notification1
                                </Link>
                              ),
                            },
                            {
                              key: 'notification2',
                              label: (
                                <Link to="">
                                  notification2
                                </Link>
                              ),
                            },
                            {
                              key: 'notification3',
                              label: (
                                <Link to="">
                                  notification3
                                </Link>
                              ),
                            }]
                        }}
                        placement="right"
                      >
                        <CiMenuKebab></CiMenuKebab>
                      </Dropdown>
                </div>
                <div className="content-body d-flex align-items-end justify-content-between">
                    <div className="content-price">
                    <span>$36336.025</span>
                    </div>
                    <div className="content-percentage d-flex flex-column align-items-end">
                      <div className='icon'>
                        <BsArrowUpRight></BsArrowUpRight>
                        <span>32%</span>
                      </div>
                      <div className="date">
                        <span className='text-uppercase'>Compared to april 2023</span>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content p-4">
                <div className="content-header mb-3 d-flex justify-content-between">
                    <h5 className='text-capitalize'>total orders</h5>
                              <Dropdown
                      align={{ offset: [0, 40] }}
                        menu={{
                          items : [{
                              key: 'notification1',
                              label: (
                                <Link to="">
                                  notification1
                                </Link>
                              ),
                            },
                            {
                              key: 'notification2',
                              label: (
                                <Link to="">
                                  notification2
                                </Link>
                              ),
                            },
                            {
                              key: 'notification3',
                              label: (
                                <Link to="">
                                  notification3
                                </Link>
                              ),
                            }]
                        }}
                        placement="right"
                      >
                        <CiMenuKebab></CiMenuKebab>
                      </Dropdown>
                </div>
                <div className="content-body d-flex align-items-end justify-content-between">
                    <div className="content-price">
                      <span>$9736.025</span>
                    </div>
                    <div className="content-percentage d-flex flex-column align-items-end">
                      <div className='icon'>
                        <BsArrowDownLeft></BsArrowDownLeft>
                        <span>49.2%</span>
                      </div>
                      <div className="date">
                        <span className='text-uppercase'>Compared to april 2023</span>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content p-4">
                <div className="content-header mb-3 d-flex justify-content-between">
                    <h5 className='text-capitalize'>total orders</h5>
                      <Dropdown
                        align={{ offset: [0, 40] }}
                        menu={{
                          items : [{
                              key: 'notification1',
                              label: (
                                <Link to="">
                                  notification1
                                </Link>
                              ),
                            },
                            {
                              key: 'notification2',
                              label: (
                                <Link to="">
                                  notification2
                                </Link>
                              ),
                            },
                            {
                              key: 'notification3',
                              label: (
                                <Link to="">
                                  notification3
                                </Link>
                              ),
                            }]
                        }}
                        placement="right"
                      >
                        <CiMenuKebab></CiMenuKebab>
                      </Dropdown>
                </div>
                <div className="content-body d-flex align-items-end justify-content-between">
                    <div className="content-price">
                      <span>$9736.025</span>
                    </div>
                    <div className="content-percentage d-flex flex-column align-items-end">
                      <div className='icon'>
                        <BsArrowDownLeft></BsArrowDownLeft>
                        <span>49.2%</span>
                      </div>
                      <div className="date">
                        <span className='text-uppercase'>Compared to april 2023</span>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="charts py-5">
        <div className="charts-header mb-2">
          <h2 className='text-capitalize px-3'>income statice</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Column {...{
                data,
                xField: 'type',
                yField: 'sales',
                colorField:'l(270) 0:#7facebeb 0.5:#7ec2f3 1:#1890ff' ,
                label: {
                  style: {
                    fill: '#ddd444',
                    opacity: 0.6,
                  },
                },
                xAxis: {
                  label: {
                    autoHide: true,
                    autoRotate: false,
                  },
                },
              }} />
          </div>
          {/* <div className="col-md-5">
            <Pie {...{
                appendPadding: 10,
                data:pieData,
                angleField: 'value',
                colorField: 'type',
                radius: 0.8,
                // label: {
                //   type: 'outer',
                //   content: '{name} {percentage}',
                // },
                interactions: [
                  {
                    type: 'pie-legend-active',
                  },
                  {
                    type: 'element-active',
                  },
                ],
              }} />
          </div> */}
        </div>
      </div>
      <div className="latest-orders pb-5">
        <div className="charts-header mb-2">
          <h2 className='text-capitalize px-3'>latest orders</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Table columns={columns} pagination={false} dataSource={tableData} />
          </div>
        </div>
      </div>
      <div className="recent">
        <div className="row">
          <div className="col-md-6">
            <div className="resent-activity p-4">
              <div className="resent-activity-header d-flex align-items-center justify-content-between mb-4 text-capitalize">
                <h4>recent activity</h4>
                <Dropdown
                  align={{ offset: [0, 40] }}
                    menu={{
                      items : [{
                          key: 'notification1',
                          label: (
                            <Link to="">
                              Show All
                            </Link>
                          ),
                        }]
                    }}
                    placement="right"
                  >
                    <CiMenuKebab className='cursor-pointer'></CiMenuKebab>
                  </Dropdown>
              </div>
              <div className="resent-activity-body">
                <ul className='list-unstyled d-flex flex-column gap-3 '>
                  <li>
                    <span className='date text-capitalize mb-1 d-block'>yesterday</span>
                    <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia atque quam perspiciatis error. Cumque voluptas blanditiis pariatur tenetur nobis eveniet earum iste sed? Blanditiis temporibus delectus eaque deleniti, maxime sunt. <Link to="">elit. Officia atque quam perspiciatis </Link></p>
                  </li>
                  <li>
                    <span className='date text-capitalize mb-1 d-block'>5 day ago</span>
                    <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia <Link to="">elit. Officia atque quam perspiciatis </Link></p>
                  </li>
                  <li>
                    <span className='date text-capitalize mb-1 d-block'>march 27</span>
                    <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia atque quam </p>
                  </li>
                  <li>
                    <span className='date text-capitalize mb-1 d-block'>novamber 30</span>
                    <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia atque quam Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati excepturi temporibus recusandae expedita dolores at, earum, architecto dignissimos officiis nemo magni aut odit id tempora. Quo tenetur necessitatibus inventore molestias! </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="resent-review">
              <div className="resent-review-header d-flex align-items-center justify-content-between text-capitalize p-4">
                <h4>recent reviews</h4>
                <Dropdown
                  align={{ offset: [0, 40] }}
                    menu={{
                      items : [{
                          key: 'notification1',
                          label: (
                            <Link to="">
                              Show All
                            </Link>
                          ),
                        }]
                    }}
                    placement="right"
                  >
                    <CiMenuKebab className='cursor-pointer'></CiMenuKebab>
                  </Dropdown>
              </div>
              <div className="resent-review-body">
                <ul className='list-unstyled d-flex flex-column '>
                  <li className='d-flex justify-content-between px-4'>
                    <div className="element d-flex gap-4 align-items-center">
                      <div className="image">
                        <img src="/images/machin/machin1.png" alt="" />
                      </div> 
                      <div className="info d-flex flex-column gap-1 ">
                        <h4 className='text-uppercase m-0'>wiper blades brandix WL2</h4>
                        <p className='text-capitalize m-0'>reviewed by Ryan ford</p>
                      </div>
                    </div>
                    <div className="rate">
                      <StarRatings
                            rating={3}
                            starRatedColor="#ffd700"
                            numberOfStars={5}
                            color="#ededed"
                            name='rating'
                            starDimension="15px"
                            starSpacing="0px"
                        />
                    </div>
                  </li>
                  <li className='d-flex justify-content-between px-4'>
                    <div className="element d-flex gap-4 align-items-center">
                      <div className="image">
                        <img src="/images/machin/machin2.png" alt="" />
                      </div> 
                      <div className="info d-flex flex-column gap-1 ">
                        <h4 className='text-uppercase m-0'>wiper blades brandix WL2 GL36555965 300 wight</h4>
                        <p className='text-capitalize m-0'>reviewed by Ryan ford</p>
                      </div>
                    </div>
                    <div className="rate">
                      <StarRatings
                            rating={2}
                            starRatedColor="#ffd700"
                            numberOfStars={5}
                            color="#ededed"
                            name='rating'
                            starDimension="15px"
                            starSpacing="0px"
                        />
                    </div>
                  </li>
                  <li className='d-flex justify-content-between px-4'>
                    <div className="element d-flex gap-4 align-items-center">
                      <div className="image">
                        <img src="/images/machin/machin3.png" alt="" />
                      </div> 
                      <div className="info d-flex flex-column gap-1 ">
                        <h4 className='text-uppercase m-0'>wiper blades brandix WL2</h4>
                        <p className='text-capitalize m-0'>reviewed by Ryan ford</p>
                      </div>
                    </div>
                    <div className="rate">
                      <StarRatings
                            rating={3.5}
                            starRatedColor="#ffd700"
                            numberOfStars={5}
                            color="#ededed"
                            name='rating'
                            starDimension="15px"
                            starSpacing="0px"
                        />
                    </div>
                  </li>
                  <li className='d-flex justify-content-between px-4'>
                    <div className="element d-flex gap-4 align-items-center">
                      <div className="image">
                        <img src="/images/machin/machin4.png" alt="" />
                      </div> 
                      <div className="info d-flex flex-column gap-1 ">
                        <h4 className='text-uppercase m-0'>wiper blades brandix WL2</h4>
                        <p className='text-capitalize m-0'>reviewed by Ryan ford</p>
                      </div>
                    </div>
                    <div className="rate">
                      <StarRatings
                            rating={3}
                            starRatedColor="#ffd700"
                            numberOfStars={5}
                            color="#ededed"
                            name='rating'
                            starDimension="15px"
                            starSpacing="0px"
                        />
                    </div>
                  </li>
                  <li className='d-flex justify-content-between px-4'>
                    <div className="element d-flex gap-4 align-items-center">
                      <div className="image">
                        <img src="/images/machin/machin5.png" alt="" />
                      </div> 
                      <div className="info d-flex flex-column gap-1 ">
                        <h4 className='text-uppercase m-0'>wiper blades brandix WL2</h4>
                        <p className='text-capitalize m-0'>reviewed by Ryan ford</p>
                      </div>
                    </div>
                    <div className="rate">
                      <StarRatings
                            rating={4}
                            starRatedColor="#ffd700"
                            numberOfStars={5}
                            color="#ededed"
                            name='rating'
                            starDimension="15px"
                            starSpacing="0px"
                        />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


