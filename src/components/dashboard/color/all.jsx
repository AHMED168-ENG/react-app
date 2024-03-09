import "../../../scss/dashboard/color/all.scss"
import React, { useEffect, useState } from 'react';
import { Dropdown, Modal, Switch, Table, Tag } from 'antd';
import DashboardBreadcrumb from '../bradcrump';
import { IoSearchSharp } from "react-icons/io5";
import { Area } from '@ant-design/charts';
import { CiMenuKebab } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { ColorActivationServer, ColorAllServer, ColorCreateServer, ColorDeleteServer } from "../../../store/reducers/color/color_server";
import { reset } from "../../../store/reducers/color/color_slice";
import DashboardLoading from "../loading";


function DashboardColorComponent() {
  let page = 1
  const dispatch = useDispatch()
  const [name , setName] = useState("")
  const [active , setActive] = useState(true)
  const colors = useSelector(state => state.colorReducer.colors)
  const errorsValidation = useSelector(state => state.colorReducer.errors)
  const isError = useSelector(state => state.colorReducer.isError)
  const deleted = useSelector(state => state.colorReducer.deleted)
  const isLoading = useSelector(state => state.colorReducer.isLoading)
  const activation = useSelector(state => state.colorReducer.activation)
  const message = useSelector(state => state.colorReducer.message)
  const created = useSelector(state => state.colorReducer.created)


    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about create color /\/\/\/\/\/\//\/\/\/\/\
    function createColor(e) {
      e.preventDefault();
      dispatch(ColorCreateServer({
        name,
        active,
      }))
    }

    function downloadExcel() {
      window.location.href = `${process.env.REACT_APP_SERVER_URL}/color/export/excel`
    }

    function activationColor(id) {
      dispatch(ColorActivationServer(id))
    }

    function searchColor(search) {
      dispatch(ColorAllServer({page , limit:process.env.REACT_APP_LIMIT , search : `name[regex]=${search}`}))
      dispatch(reset())
    }

    function deleteColor( id) {
      dispatch(ColorDeleteServer(id))
    }

    function resetForm() {
      setName("")
      setActive(true)
    }
    
    useEffect(() => {
        if(isError) {
            window.Toast.fire({
                icon: "error",
                title: message,
            });
        }

        if(created) {
          dispatch(ColorAllServer({page , limit:process.env.REACT_APP_LIMIT}))
          dispatch(reset())
          resetForm()
          setOpen(false)
          window.Toast.fire({
            icon: "success",
            title: message,
          });
        }

        if(activation) {
          dispatch(ColorAllServer({page , limit:process.env.REACT_APP_LIMIT}))
          dispatch(reset())
          window.Toast.fire({
            icon: "success",
            title: message,
          });
        }
        if(deleted) {
          dispatch(ColorAllServer({page , limit:process.env.REACT_APP_LIMIT }))
          dispatch(reset())
          window.Toast.fire({
            icon: "success",
            title: message,
          });
        }
      } , [isError , created , message , activation , deleted]);
    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about create color /\/\/\/\/\/\//\/\/\/\/\

    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about table /\/\/\/\/\/\//\/\/\/\/\
    const columns = [
        {
          title: 'name',
          dataIndex: 'name',
          sorter: {
            compare: (a, b) => a.name.localeCompare(b.name),
            multiple: 3,
          },
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
          dataIndex: ["_id" , "active"],
          render: (id , row) => {
            return  (
              <Dropdown
              align={{ offset: [0, 40] }}
              menu={{
                items : [{
                    key: 'edit',
                    label: (
                      <Link to={`/dashboard/color/edit/${row._id}`}>
                        <CiEdit> </CiEdit> Edit Color
                      </Link>
                    ),
                  },
                  {
                    key: 'activation',
                    label: (
                      <button onClick={() => {activationColor(row._id)}}><MdOutlineNotificationsActive></MdOutlineNotificationsActive> { !row.active ? "Active" : "dis active"} customer</button>
                    ),
                  },
  
                  {
                    key: 'notification2',
                    label: (
                      <button onClick={() => deleteColor(row._id)}><MdDeleteOutline></MdDeleteOutline> Delete customer</button>
                    ),
                  }
                  ]
              }}
              placement="right"
            >
              <CiMenuKebab></CiMenuKebab>
            </Dropdown>
            )
           
          },
        },
    ];
    const data = colors.docs || [];
    const onChangeTable = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };
    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about table /\/\/\/\/\/\//\/\/\/\/\

    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about chart /\/\/\/\/\/\//\/\/\/\/\
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
      dispatch(ColorAllServer({page , limit:process.env.REACT_APP_LIMIT}))  
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
    
    const [open, setOpen] = useState(false);

    return (
        <div className='all-color'>
            <DashboardBreadcrumb className="mb-3" title={"All Color"}></DashboardBreadcrumb>
           
            <div className="process mb-5">
              <div className="modal-wrapper mb-2">
                <button className='text-capitalize btn btn-primary btn-sm w-100' onClick={() => setOpen(true)}>
                  create Color
                </button>
                <Modal
                  title=""
                  centered
                  open={open}
                  onOk={() => setOpen(false)}
                  onCancel={() => setOpen(false)}
                  width={1000}
                  footer={null}
                >
                {isLoading ? <DashboardLoading ></DashboardLoading> : ""}
                <div className="header-modal">
                    <h5 className='text-capitalize text-center'>Create Color</h5>
                </div>
                  <form action="" className='d-flex flex-column gap-2'>
                    <div className="input">
                      <label htmlFor="name" className='text-capitalize'>name</label>
                      <input id='name' value={name} onChange={(e) => {setName(e.target.value)}} type="text" className='form-control' />
                      {errorsValidation.name ? <small className="text-danger">{errorsValidation.name[0].msg}</small> : ""}
                    </div>
                    <div className="input">
                        <label className='text-capitalize d-block'>is Active</label>
                        <Switch value={active} onChange={(checked) => {
                          setActive(checked)
                        }} />
                        {errorsValidation.active ? <small className="text-danger">{errorsValidation.active[0].msg}</small> : ""}
                    </div>
                    <div className="ant-modal-footer">
                      <button className='ant-btn css-dev-only-do-not-override-i1mju1 ant-btn-default' onClick={(e) => {e.preventDefault() ; setOpen(false)}}>
                        cancel
                      </button>
                      <button className='ant-btn css-dev-only-do-not-override-i1mju1 ant-btn-primary' onClick={(e) => createColor(e)}>
                        ok
                      </button>
                    </div>
                  </form>
                </Modal>
              </div>
              <button onClick={() => downloadExcel()} className='text-capitalize btn btn-success btn-sm mb-2 w-100'>
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
                    onInput={(e) => searchColor(e.target.value)}
                  />
                </form>
            </div>
            <div className="table-wrapper">
              <Table pagination={false} rowKey="_id" columns={columns} dataSource={data} onChange={onChangeTable} />
            </div>
        </div>
    )
};

export default DashboardColorComponent;




