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
import { useDispatch, useSelector } from "react-redux";
import { UserServer } from "../../../store/reducers/user/user_server";


function DashboardAllCustomerComponent() {
    let page = 1
    const dispatch = useDispatch()
    const users = useSelector(state => state.userReducer.users)

    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about table /\/\/\/\/\/\//\/\/\/\/\
    const columns = [
        {
          title: 'First Name',
          dataIndex: 'firstName',
          sorter: {
            compare: (a, b) => a.firstName.localeCompare(b.firstName),
            multiple: 3,
          },
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          sorter: {
            compare: (a, b) => a.lastName.localeCompare(b.lastName),
            multiple: 3,
          },
        },
        {
          title: 'Email',
          dataIndex: 'email',
          sorter: {
            compare: (a, b) => a.email.localeCompare(b.email),
            multiple: 3,
          },
        },
        {
          title: 'Mobile',
          dataIndex: 'mobile',
        },
        {
          title: 'Role',
          dataIndex: 'role',
        },
        {
          title: 'Blocked',
          dataIndex: 'isBlocked',
          render: (tags) => {
            return (<Tag color={`${tags ? "green" : "red"}`}> 
                      {tags ? "yes" : "false"}
                  </Tag>)
          },
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
        {
          title: 'Active',
          dataIndex: 'active',
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
    const data = users.docs || [];
    const onChangeTable = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };
    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about table /\/\/\/\/\/\//\/\/\/\/\
    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about chart /\/\/\/\/\/\//\/\/\/\/\
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
      dispatch(UserServer({page , limit:process.env.REACT_APP_LIMIT}))
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
                   animation={false}
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
                <form className="form_search_box">
                  <button title="Search" className="button">
                    <IoSearchSharp></IoSearchSharp>
                  </button>

                  <input
                    type="text"
                    className="textbox"
                    placeholder="Search"
                  />
                </form>
            </div>
            <div className="table-wrapper">
              <Table pagination={false} rowKey="_id" columns={columns} dataSource={data} onChange={onChangeTable} />
            </div>
        </div>
    )
};

export default DashboardAllCustomerComponent;




