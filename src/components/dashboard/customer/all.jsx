import "../../../scss/dashboard/customer/all.scss"
import React, { useEffect, useState } from 'react';
import { Dropdown, Modal, Switch, Table, Tag, Upload } from 'antd';
import DashboardBreadcrumb from '../bradcrump';
import { IoSearchSharp } from "react-icons/io5";
import { Area } from '@ant-design/charts';
import { CiMenuKebab } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { UserActivationServer, UserAllServer, UserBlockingServer, UserCreateServer, UserDeleteServer, UserUploadImageServer } from "../../../store/reducers/user/user_server";
import { reset } from "../../../store/reducers/user/user_slice";
import DashboardLoading from "../loading";
import { MdBlock } from "react-icons/md";


function DashboardAllCustomerComponent() {
    let page = 1
    const dispatch = useDispatch()
    const users = useSelector(state => state.userReducer.users)
    const errorsValidation = useSelector(state => state.userReducer.errors)
    const isError = useSelector(state => state.userReducer.isError)
    const deleted = useSelector(state => state.userReducer.deleted)
    const isLoading = useSelector(state => state.userReducer.isLoading)
    const activation = useSelector(state => state.userReducer.activation)
    const message = useSelector(state => state.userReducer.message)
    const created = useSelector(state => state.userReducer.created)
    const [email , setEmail] = useState("")
    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    const [mobile , setMobile] = useState("")
    const [password , setPassword] = useState("")
    const [resetPassword , setResetPassword] = useState("")
    const [role , setRole] = useState("User")
    const [isBlocked , setIsBlocked] = useState(false)
    const [active , setActive] = useState(true)
    const [address , setAddress] = useState("")
    const [image , setImage] = useState([])


    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ create user /\/\/\/\/\/\//\/\/\/\/\
    function createUser(e) {
      e.preventDefault();
      dispatch(UserCreateServer({
        email,
        firstName,
        lastName,
        mobile,
        password,
        resetPassword,
        role,
        isBlocked,
        active,
        address,
        image : image
      }))
    }

    function activationUser( id) {
      dispatch(UserActivationServer(id))
    }

    function searchUser(search) {
      dispatch(UserAllServer({page , limit:process.env.REACT_APP_LIMIT , search : `firstName=${search}`}))
    }

    function deleteUser( id) {
      dispatch(UserDeleteServer(id))
    }

    function blockingUser( id) {
      dispatch(UserBlockingServer(id))
    }

    function resetForm() {
      setEmail("")
      setFirstName("")
      setLastName("")
      setMobile("")
      setPassword("")
      setResetPassword("")
      setRole("")
      setIsBlocked(false)
      setActive(true)
      setAddress("")
      setImage([])
    }
    
    useEffect(() => {
      if(isError) {
          window.Toast.fire({
              icon: "error",
              title: message,
          });
      }

      if(created) {
        dispatch(UserAllServer({page , limit:process.env.REACT_APP_LIMIT}))
        dispatch(reset())
        resetForm()
        setOpen(false)
        window.Toast.fire({
          icon: "success",
          title: message,
        });
      }
      if(activation) {
        dispatch(UserAllServer({page , limit:process.env.REACT_APP_LIMIT}))
        dispatch(reset())
        window.Toast.fire({
          icon: "success",
          title: message,
        });
      }
      if(deleted) {
        dispatch(UserAllServer({page , limit:process.env.REACT_APP_LIMIT }))
        dispatch(reset())
        window.Toast.fire({
          icon: "success",
          title: message,
        });
      }
  } , [isError , created , message , activation , deleted]);
    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ create user /\/\/\/\/\/\//\/\/\/\/\


    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about table /\/\/\/\/\/\//\/\/\/\/\
    const columns = [
        {
          title: 'First Name',
          dataIndex: ["firstName" , "image"],
          sorter: {
            compare: (a, b) => a.firstName.localeCompare(b.firstName),
            multiple: 3,
          },
          render(text , {image , firstName}) {
            return (
              <div className="user-container d-flex gap-2 align-items-center">
                <div className="image">
                  <img src={image.url} alt="" />
                </div>
                <div>
                    {firstName}
                </div>
              </div>
            )
          }
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
          render: (isBlocked) => {
            return (<Tag color={`${isBlocked ? "green" : "red"}`}> 
                      {isBlocked ? "yes" : "false"}
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
          render: (active) => {
            return (<Tag color={`${active ? "green" : "red"}`}> 
                      {active ? "yes" : "false"}
                  </Tag>)
           
          },
        },
        {
          title: 'Actions',
          dataIndex: ["_id" , "active" , "isBlocked"],
          render: (text , row) => {
            return  (
              <Dropdown
              align={{ offset: [0, 40] }}
              menu={{
                items : [{
                    key: 'edit',
                    label: (
                      <Link to={`/dashboard/customer/edit/${row._id}`}>
                        <CiEdit> </CiEdit> Edit customer
                      </Link>
                    ),
                  },
                  {
                    key: 'activation',
                    label: (
                      <button onClick={() => {activationUser(row._id)}}><MdOutlineNotificationsActive></MdOutlineNotificationsActive> { !row.active ? "Active" : "dis active"} customer</button>
                    ),
                  },
  
                  {
                    key: 'block',
                    label: (
                      <button onClick={() => {blockingUser(row._id)}}><MdBlock></MdBlock> { !row.isBlocked ? "Block" : "de block"} customer</button>
                    ),
                  },
  
                  {
                    key: 'notification2',
                    label: (
                      <button onClick={() => deleteUser(row._id)}><MdDeleteOutline></MdDeleteOutline> Delete customer</button>
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
      dispatch(UserAllServer({page , limit:process.env.REACT_APP_LIMIT}))
      dispatch(reset())
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
    const onChange = ({ fileList: newFileList }) => {
      setImage(newFileList);
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
                  width={1000}
                  footer={null}
                  className="position-relative"
                >
                {isLoading ? <DashboardLoading ></DashboardLoading> : ""}
                
                <div className="header-modal">
                    <h5 className='text-capitalize text-center'>Create Customer</h5>
                </div>
                  <form action="" className='d-flex flex-column gap-2'>
                    <div className="input">
                      <label htmlFor="fName" className='text-capitalize'>first name</label>
                      <input id='fName' value={firstName} type="text" className='form-control' onInput={(e) => setFirstName(e.target.value)} />
                      {errorsValidation.firstName ? <small className="text-danger">{errorsValidation.firstName[0].msg}</small> : ""}
                    </div>
                    <div className="input">
                      <label htmlFor="lName"  className='text-capitalize'>last name</label>
                      <input type="text" value={lastName} id='lName' className='form-control' onInput={(e) => setLastName(e.target.value)} />
                      {errorsValidation.lastName ? <small className="text-danger">{errorsValidation.lastName[0].msg}</small> : ""}
                    </div>
                    <div className="input">
                      <label htmlFor="email" className='text-capitalize'>email</label>
                      <input type="email" value={email} id='email' className='form-control' onInput={(e) => setEmail(e.target.value)}  />
                      {errorsValidation.email ? <small className="text-danger">{errorsValidation.email[0].msg}</small> : ""}
                    </div>
                    <div className="input">
                      <label htmlFor="password" className='text-capitalize'>password</label>
                      <input type="password" value={password} id='password' className='form-control' onInput={(e) => setPassword(e.target.value)}  />
                      {errorsValidation.password ? <small className="text-danger">{errorsValidation.password[0].msg}</small> : ""}
                    </div>
                    <div className="input">
                      <label htmlFor="resetPassword"className='text-capitalize'>reset password</label>
                      <input type="password" value={resetPassword}  id='resetPassword' className='form-control' onInput={(e) => setResetPassword(e.target.value)} />
                      {errorsValidation.resetPassword ? <small className="text-danger">{errorsValidation.resetPassword[0].msg}</small> : ""}
                    </div>
                    <div className="input">
                      <label htmlFor="mobile" className='text-capitalize'>mobile</label>
                      <input type="text" id='mobile' value={mobile} className='form-control' onInput={(e) => setMobile(e.target.value)} />
                      {errorsValidation.mobile ? <small className="text-danger">{errorsValidation.mobile[0].msg}</small> : ""}
                    </div>
               
                    <div className="input">
                      <label htmlFor="role" className='text-capitalize'>role</label>
                      <select name="role" value={role} onInput={(e) => setRole(e.target.value)} id="role" className='form-control'>
                        <option></option>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                        <option value="Super Admin">super Admin</option>
                      </select>
                      {errorsValidation.role ? <small className="text-danger">{errorsValidation.role[0].msg}</small> : ""}
                    </div>
               
                    <div className="input ">
                      <label htmlFor="address" className='text-capitalize'>address</label>
                      <input type="text" value={address} id='' className='form-control' onInput={(e) => setAddress(e.target.value)} />
                      {errorsValidation.address ? <small className="text-danger">{errorsValidation.address[0].msg}</small> : ""}
                    </div>
                    <div className='d-flex gap-5 mb-4'>
                      <div className="input">
                        <label htmlFor="isBlocked" className='text-capitalize d-block'>is Blocked</label>
                        <Switch value={isBlocked} onChange={(checked) => {
                          setIsBlocked(checked)
                        }} />
                        {errorsValidation.isBlocked ? <small className="text-danger">{errorsValidation.isBlocked[0].msg}</small> : ""}
                      </div>
                      <div className="input">
                        <label htmlFor="active" className='text-capitalize d-block'>is Active</label>
                        <Switch value={active} onChange={(checked) => {
                          setActive(checked)
                        }} />
                          {errorsValidation.active ? <small className="text-danger">{errorsValidation.active[0].msg}</small> : ""}
                      </div>
                    </div>
                    <div className="input">
                      <Upload
                          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                          listType="picture-card"
                          fileList={image}
                          beforeUpload={() => false}
                          onChange={onChange}
                          onPreview={onPreview}
                        >
                          {image.length < 1 && '+ Upload'}
                        </Upload>
                      {errorsValidation.image ? <small className="text-danger">{errorsValidation.image[0].msg}</small> : ""}
                    </div>
                    <div className="ant-modal-footer">
                        <button className='ant-btn css-dev-only-do-not-override-i1mju1 ant-btn-default' onClick={(e) => {e.preventDefault() ; setOpen(false)}}>
                          cancel
                        </button>
                        <button className='ant-btn css-dev-only-do-not-override-i1mju1 ant-btn-primary' onClick={(e) => createUser(e)}>
                          ok
                        </button>
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
                    onInput={(e) => {searchUser(e.target.value)}}
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




