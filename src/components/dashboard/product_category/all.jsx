import "../../../scss/dashboard/product_category/all.scss"
import React, { useEffect, useState } from 'react';
import { Dropdown, Modal, Select, Switch, Table, Tag, Upload } from 'antd';
import DashboardBreadcrumb from '../bradcrump';
import { IoSearchSharp } from "react-icons/io5";
import { Area } from '@ant-design/charts';
import { CiMenuKebab } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";


function DashboardAllProductCategoryComponent() {
    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about table /\/\/\/\/\/\//\/\/\/\/\
    const columns = [
        {
          title: 'title',
          dataIndex: 'title',
          sorter: {
            compare: (a, b) => a.title.localeCompare(b.title),
            multiple: 3,
          },
        },
        {
          title: 'main category',
          dataIndex: 'mainCategory',
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
                      <Link to={`/dashboard/ProductCategory/${id}`}>
                        <CiEdit> </CiEdit> Edit Product Category
                      </Link>
                    ),
                  },
                  {
                    key: 'notification3',
                    label: (
                      <button><MdOutlineNotificationsActive></MdOutlineNotificationsActive> Active Product Category</button>
                    ),
                  },
                  {
                    key: 'notification2',
                    label: (
                      <button><MdDeleteOutline></MdDeleteOutline> Delete Product Category</button>
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
          title: 'Category One',
          mainCategory : "Games",
          Active: true,
          Actions: '1',

      },
      {
          key: '1',
          title: 'Category Tow',
          mainCategory : "Medicean",
          Active: false,
          Actions: '1',

      },
      {
          key: '1',
          title: 'Category Three',
          mainCategory : "Medicean",
          Active: true,
          Actions: '1',

      },
      {
          key: '1',
          title: 'Category Four',
          mainCategory : "Medicean",
          Active: false,
          Actions: '1',

      },
      {
          key: '1',
          title: 'Category Fif',
          mainCategory : "Games",
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
        <div className='all-category'>
            <DashboardBreadcrumb className="mb-3" title={"All Product category"}></DashboardBreadcrumb>
           
            <div className="process mb-5">
              <div className="modal-wrapper mb-2">
                <button className='text-capitalize btn btn-primary btn-sm w-100' onClick={() => setOpen(true)}>
                  create Product Category
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
                    <h5 className='text-capitalize text-center'>Create Product Category</h5>
                </div>
                  <form action="" className='d-flex flex-column gap-2'>
                    <div className="input">
                      <label htmlFor="title" className='text-capitalize'>title</label>
                      <input id='title' type="text" className='form-control' />
                    </div>
                    <div className="input">
                    <Select
                        defaultValue=""
                        className='d-block'
                        style={{ width: "100%" , "background":"#eee !important"}}
                        onChange={(value) => console.log(value)}
                        options={[
                          { value: 'category1', label: 'category1' },
                          { value: 'category2', label: 'category2' },
                          { value: 'category3', label: 'category3' },
                          { value: 'category4', label: 'category4' },
                        ]}
                      />
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

export default DashboardAllProductCategoryComponent;




