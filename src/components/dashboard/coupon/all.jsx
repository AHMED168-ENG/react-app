import "../../../scss/dashboard/coupon/all.scss"
import React, { useEffect, useState } from 'react';
import { Dropdown, Modal, Select, Switch, Table, Tag, InputNumber, DatePicker } from 'antd';
import DashboardBreadcrumb from '../bradcrump';
import { IoSearchSharp } from "react-icons/io5";
import { Area } from '@ant-design/charts';
import { CiMenuKebab } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";


function DashboardCouponComponent() {
    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about table /\/\/\/\/\/\//\/\/\/\/\
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          sorter: {
            compare: (a, b) => a.name.localeCompare(b.name),
            multiple: 3,
          },
        },       
        {
          title: 'Discount',
          dataIndex: 'discount',
        },
        {
          title: 'Discount Type',
          dataIndex: 'discountType',
        },
        {
          title: 'Count',
          dataIndex: 'count',
        },
        {
          title: 'Expiration',
          dataIndex: 'expiration',
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
                      <Link to={`/dashboard/ProductCoupon/${id}`}>
                        <CiEdit> </CiEdit> Edit Coupon
                      </Link>
                    ),
                  },
                  {
                    key: 'notification3',
                    label: (
                      <button><MdOutlineNotificationsActive></MdOutlineNotificationsActive> Active Coupon</button>
                    ),
                  },
                  {
                    key: 'notification2',
                    label: (
                      <button><MdDeleteOutline></MdDeleteOutline> Delete Coupon</button>
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
          name: 'Coupon One',
          discount: 22,
          discountType: "amount",
          count: 220,
          expiration: '2024-01-29T22:00:00.000Z',
          Active: true,
          Actions: '1',
      },
      {
          key: '1',
          name: 'Coupon Tow',
          discount: 22,
          discountType: "amount",
          count: 220,
          expiration: '2024-01-29T22:00:00.000Z',
          Active: false,
          Actions: '1',
      },
      {
          key: '1',
          name: 'Coupon Three',
          discount: 22,
          discountType: "amount",
          count: 220,
          expiration: '2024-01-29T22:00:00.000Z',
          Active: true,
          Actions: '1',
      },
      {
          key: '1',
          name: 'Coupon Four',
          discount: 22,
          discountType: "amount",
          count: 220,
          expiration: '2024-01-29T22:00:00.000Z',
          Active: false,
          Actions: '1',
      },
      {
          key: '1',
          name: 'Coupon Fif',
          discount: 22,
          discountType: "amount",
          count: 220,
          expiration: '2024-01-29T22:00:00.000Z',
          Active: false,
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
    
    const [open, setOpen] = useState(false);

    return (
        <div className='all-coupon'>
            <DashboardBreadcrumb className="mb-3" title={"All Coupon"}></DashboardBreadcrumb>
           
            <div className="process mb-5">
              <div className="modal-wrapper mb-2">
                <button className='text-capitalize btn btn-primary btn-sm w-100' onClick={() => setOpen(true)}>
                  create coupon
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
                    <h5 className='text-capitalize text-center'>Create coupon</h5>
                </div>
                  <form action="" className='d-flex flex-column gap-2'>
                    <div className="input">
                      <label htmlFor="name" className='text-capitalize'>name</label>
                      <input id='name' type="text" className='form-control' />
                    </div>
                    <div className="input">
                      <label htmlFor="name" className='text-capitalize'>Discount</label>
                      <InputNumber 
                      style={{ width: "100%" , "background":"#eee !important"}}
                      min={1} max={10} defaultValue={3} onChange={(value) => console.log(value)} />
                    </div>
                    <div className="input">
                      <label htmlFor="name" className='text-capitalize'>Discount Type</label>
                      <Select
                          defaultValue=""
                          className='d-block'
                          style={{ width: "100%" , "background":"#eee !important"}}
                          onChange={(value) => console.log(value)}
                          options={[
                            { value: 'percentage', label: 'percentage' },
                            { value: 'fixed', label: 'fixed' },
                          ]}
                        />
                    </div>
                    <div className="input">
                      <label htmlFor="name" className='text-capitalize'>Expiration</label>
                      <DatePicker
                       style={{ width: "100%" , "background":"#eee !important"}}
                       onChange={(value) => console.log(value)} />
                    </div>
                    <div className='d-flex gap-5 mb-4'>
                      <div className="input">
                        <label className='text-capitalize d-block'>is Active</label>
                        <Switch defaultChecked onChange={(checked) => {
                          console.log(checked)
                        }} />
                      </div>
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

export default DashboardCouponComponent;




