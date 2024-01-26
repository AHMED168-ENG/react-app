import "../../../scss/dashboard/customer/all.scss"
import React, { useEffect, useState } from 'react';
import { Dropdown, Modal, Switch, Table, Tag, Upload } from 'antd';
import DashboardBreadcrumb from '../bradcrump';
import { IoSearchSharp } from "react-icons/io5";
import { Area } from '@ant-design/charts';
import ImgCrop from 'antd-img-crop';
import { CiMenuKebab } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";


function DashboardAllCustomerComponent() {
    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about table /\/\/\/\/\/\//\/\/\/\/\
    const columns = [
        {
          title: 'First Name',
          dataIndex: 'FirstName',
          sorter: {
            compare: (a, b) => a.FirstName.localeCompare(b.FirstName),
            multiple: 3,
          },
        },
        {
          title: 'Last Name',
          dataIndex: 'LastName',
          sorter: {
            compare: (a, b) => a.LastName.localeCompare(b.LastName),
            multiple: 3,
          },
        },
        {
          title: 'Email',
          dataIndex: 'Email',
          sorter: {
            compare: (a, b) => a.Email.localeCompare(b.Email),
            multiple: 3,
          },
        },
        {
          title: 'Mobile',
          dataIndex: 'Mobile',
        },
        {
          title: 'Role',
          dataIndex: 'Role',
        },
        {
          title: 'Blocked',
          dataIndex: 'Blocked',
          render: (tags) => {
            return (<Tag color={`${tags ? "green" : "red"}`}> 
                      {tags ? "yes" : "false"}
                  </Tag>)
          },
        },
        {
          title: 'Address',
          dataIndex: 'Address',
        },
        {
          title: 'Active',
          dataIndex: 'Active',
          render: (tags) => {
            return (<Tag color={`${tags ? "green" : "red"}`}> 
                      {tags ? "yes" : "false"}
                  </Tag>)
           
          },
        },
        {
          title: 'Actions',
          dataIndex: 'Actions',
          render: (id) => {
            return  (
              <Dropdown
              align={{ offset: [0, 40] }}
              menu={{
                items : [{
                    key: 'edit',
                    label: (
                      <Link to={`/dashboard/customer/${id}`}>
                        <CiEdit> </CiEdit> Edit customer
                      </Link>
                    ),
                  },
                  {
                    key: 'notification3',
                    label: (
                      <button><MdOutlineNotificationsActive></MdOutlineNotificationsActive> Active customer</button>
                    ),
                  },
                  {
                    key: 'notification2',
                    label: (
                      <button><MdDeleteOutline></MdDeleteOutline> Delete customer</button>
                    ),
                  }]
              }}
              placement="right"
            >
              <CiMenuKebab></CiMenuKebab>
            </Dropdown>
            )
           
          },
        },
    ];
    const data = [
    {
        key: '1',
        FirstName: 'ahmed',
        LastName: 'Brown',
        Email: "ahmed.dev@gmail.com",
        Mobile: "01024756410",
        Role: "User",
        Blocked: false,
        Address: "Domett",
        Active: true,
        Actions: '1',

    },
    {
        key: '2',
        FirstName: 'John',
        LastName: 'Brown',
        Email: "ahmed.dev@gmail.com",
        Mobile: "01024756410",
        Role: "User",
        Blocked: true,
        Address: "Domett",
        Active: false,
        Actions: '1',
    },
    {
        key: '3',
        FirstName: 'John',
        LastName: 'Brown',
        Email: "ahmed.dev@gmail.com",
        Mobile: "01024756410",
        Role: "User",
        Blocked: false,
        Address: "Domett",
        Active: true,
        Actions: '1',
    },
    {
        key: '4',
        FirstName: 'John',
        LastName: 'Brown',
        Email: "ahmed.dev@gmail.com",
        Mobile: "01024756410",
        Role: "User",
        Blocked: true,
        Address: "Domett",
        Active: false,
        Actions: '1',
    },
    {
        key: '5',
        FirstName: 'John',
        LastName: 'Brown',
        Email: "ahmed.dev@gmail.com",
        Mobile: "01024756410",
        Role: "User",
        Blocked: false,
        Address: "Domett",
        Active: true,
        Actions: '1',
    },
  
    ];
    const onChangeTable = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };
    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about table /\/\/\/\/\/\//\/\/\/\/\
    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about chart /\/\/\/\/\/\//\/\/\/\/\
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
      asyncFetch();
    }, []);
  
    const asyncFetch = () => {
      fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
        .then((response) => response.json())
        .then((json) => setChartData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };
    const configChart = {
      data : chartData,
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        range: [0, 1],
        tickCount: 5,
      },

    }
    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about chart /\/\/\/\/\/\//\/\/\/\/\
    
    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about image upload /\/\/\/\/\/\//\/\/\/\/\
    const [fileList, setFileList] = useState([]);
    const onChange = ({ fileList: newFileList }) => {
      setFileList(newFileList);
    };
    const onPreview = async (file) => {
      let src = file.url;
      if (!src) {
        src = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => resolve(reader.result);
        });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow?.document.write(image.outerHTML);
    };
    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about image upload /\/\/\/\/\/\//\/\/\/\/\
    const [open, setOpen] = useState(false);

    return (
        <div className='all-customer'>
            <DashboardBreadcrumb className="mb-3" title={"All customers"}></DashboardBreadcrumb>
           
            <div className="process mb-5">
              <div className="modal-wrapper mb-2">
                <button className='text-capitalize btn btn-primary btn-sm w-100' onClick={() => setOpen(true)}>
                  create customer
                </button>
                <Modal
                  title=""
                  centered
                  open={open}
                  onOk={() => setOpen(false)}
                  onCancel={() => setOpen(false)}
                  width={1000}
                >
                <div className="header-modal">
                    <h5 className='text-capitalize text-center'>Create Customer</h5>
                </div>
                  <form action="" className='d-flex flex-column gap-2'>
                    <div className="input">
                      <label htmlFor="fName" className='text-capitalize'>first name</label>
                      <input id='fName' type="text" className='form-control' />
                    </div>
                    <div className="input">
                      <label htmlFor="lName" className='text-capitalize'>last name</label>
                      <input type="text" id='lName' className='form-control' />
                    </div>
                    <div className="input">
                      <label htmlFor="email" className='text-capitalize'>email</label>
                      <input type="email" id='email' className='form-control' />
                    </div>
                    <div className="input">
                      <label htmlFor="password" className='text-capitalize'>password</label>
                      <input type="password" id='password' className='form-control' />
                    </div>
                    <div className="input">
                      <label htmlFor="resetPassword" className='text-capitalize'>reset password</label>
                      <input type="password" id='resetPassword' className='form-control' />
                    </div>
                    <div className="input">
                      <label htmlFor="mobile" className='text-capitalize'>mobile</label>
                      <input type="text" id='mobile' className='form-control' />
                    </div>
               
                    <div className="input">
                      <label htmlFor="role" className='text-capitalize'>role</label>
                      <select name="role" id="role" className='form-control'>
                        <option value="user"></option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="super admin">super Admin</option>
                      </select>
                    </div>
               
                    <div className="input ">
                      <label htmlFor="address" className='text-capitalize'>address</label>
                      <input type="text" id='address' className='form-control' />
                    </div>
                    <div className='d-flex gap-5 mb-4'>
                      <div className="input">
                        <label htmlFor="fName" className='text-capitalize d-block'>is Blocked</label>
                        <Switch defaultChecked onChange={(checked) => {
                          console.log(checked)
                        }} />
                      </div>
                      <div className="input">
                        <label htmlFor="fName" className='text-capitalize d-block'>is Active</label>
                        <Switch defaultChecked onChange={(checked) => {
                          console.log(checked)
                        }} />
                      </div>
                    </div>
                    <div className="input">
                      <ImgCrop rotationSlider>
                        <Upload
                          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                          listType="picture-card"
                          fileList={fileList}
                          onChange={onChange}
                          onPreview={onPreview}
                        >
                          {fileList.length < 5 && '+ Upload'}
                        </Upload>
                      </ImgCrop>
                    </div>
                  </form>
                </Modal>
              </div>
              <button className='text-capitalize btn btn-success btn-sm mb-2 w-100'>
                download Excel
              </button>
            </div>
            <div className="chart">
              <Area colorField='l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' {...configChart} />
            </div>
            <div className="search">
                <form class="form_search_box">
                  <button onClick="" title="Search" class="button">
                    <IoSearchSharp></IoSearchSharp>
                  </button>

                  <input
                    type="text"
                    class="textbox"
                    placeholder="Search"
                  />
                </form>
            </div>
            <div className="table-wrapper">
              <Table pagination={false} columns={columns} dataSource={data} onChange={onChangeTable} />
            </div>
        </div>
    )
};

export default DashboardAllCustomerComponent;




