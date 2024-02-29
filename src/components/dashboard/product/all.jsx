import "../../../scss/dashboard/product/all.scss"
import React, { useEffect, useState } from 'react';
import { Dropdown, InputNumber, Modal, Select, Switch, Table, Tag, Upload } from 'antd';
import DashboardBreadcrumb from '../bradcrump';
import { IoSearchSharp } from "react-icons/io5";
import { Area } from '@ant-design/charts';
import ImgCrop from 'antd-img-crop';
import { CiMenuKebab } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch, useSelector } from "react-redux";
import { ProductServer } from "../../../store/reducers/product/product_server";


function DashboardAllProductComponent() {
  let page = 1
  const dispatch = useDispatch()
  const products = useSelector(state => state.productReducer.products)
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
          title: 'Description',
          dataIndex: 'description',
          sorter: {
            compare: (a, b) => a.description.localeCompare(b.description),
            multiple: 3,
          },
        },
        {
          title: 'Price',
          dataIndex: 'price',
        },
        {
          title: 'Category',
          dataIndex: 'category',
          render : (category) => {
            return category?.title
          }
        },
        {
          title: 'Brands',
          dataIndex: 'brands',
          render : (brands) => {
            return brands.map(ele => ele.title).join(" , ")
          }
        },
        {
          title: 'Quantity',
          dataIndex: 'quantity',
        },
        {
          title: 'Discount',
          dataIndex: 'discount',
        },
        {
          title: 'Discount Type',
          dataIndex: 'discount_type',
        },
        {
          title: 'Sold',
          dataIndex: 'sold',
        },
        {
          title: 'Colors',
          dataIndex: 'colors',
          render : (colors) => {
            return colors.map(ele => ele.name).join(" , ")
          }
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
                      <Link to={`/dashboard/product/${id}`}>
                        <CiEdit> </CiEdit> Edit Product
                      </Link>
                    ),
                  },
                  {
                    key: 'notification3',
                    label: (
                      <button><MdOutlineNotificationsActive></MdOutlineNotificationsActive> Active Product</button>
                    ),
                  },
                  {
                    key: 'notification2',
                    label: (
                      <button><MdDeleteOutline></MdDeleteOutline> Delete Product</button>
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
    const data = products.docs;
    const onChangeTable = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };
    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about table /\/\/\/\/\/\//\/\/\/\/\
    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about chart /\/\/\/\/\/\//\/\/\/\/\
    const [chartData, setChartData] = useState([]);
    const configChart = {
      data : chartData,
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        range: [0, 1],
        tickCount: 5,
      },

    }
    const asyncFetch = () => {
      fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
        .then((response) => response.json())
        .then((json) => setChartData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };
    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about chart /\/\/\/\/\/\//\/\/\/\/\
    useEffect(() => {
      asyncFetch();
      dispatch(ProductServer({page , limit:process.env.REACT_APP_LIMIT}))
    }, []);
  
    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about image upload /\/\/\/\/\/\//\/\/\/\/\
    const [fileList, setFileList] = useState([

    ]);
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
        <div className='all-product'>
            <DashboardBreadcrumb className="mb-3" title={"All Products"}></DashboardBreadcrumb>
           
            <div className="process mb-5">
              <div className="modal-wrapper mb-2">
                <button className='text-capitalize btn btn-primary btn-sm w-100' onClick={() => setOpen(true)}>
                  create Product
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
                    <h5 className='text-capitalize text-center'>Create Product</h5>
                </div>
                <form action="" className='d-flex flex-column gap-2'>
                    <div className="input">
                      <label htmlFor="title" className='text-capitalize'>title</label>
                      <input id='title' type="text" className='form-control' />
                    </div>
                    <div className="input">
                      <label htmlFor="description" className='text-capitalize'>Description</label>
                      <CKEditor
                        config={{
                          items: [
                            'undo', 'redo',
                            '|', 'heading',
                            '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
                            '|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
                            '|', 'link', 'uploadImage', 'blockQuote', 'codeBlock',
                            '|', 'alignment',
                            '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent'
                        ],
                        shouldNotGroupWhenFull: true                    
                        }}
                        editor={ ClassicEditor }
                        data="<p>product description</p>"
                        onChange={ ( event , editor ) => {
                            console.log( editor.getData() );
                        }}
                      />
                    </div>
                    <div className="input">
                      <label htmlFor="price" className='text-capitalize'>price with dollar</label>
                      <input type="number" id='price' className='form-control' />
                    </div>
                    <div className="input">
                      <label htmlFor="category" className='text-capitalize'>category</label>
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
                    <div className="input">
                      <label htmlFor="brand" className='text-capitalize'>brand</label>
                      <Select
                        mode="multiple"
                        allowClear
                        className='d-block'
                        style={{ width: "100%" , "background":"#eee !important"}}
                        onChange={(value) => console.log(value)}
                        options={[
                          { value: 'brand1', label: 'brand1' },
                          { value: 'brand2', label: 'brand2' },
                          { value: 'brand3', label: 'brand3' },
                          { value: 'brand4', label: 'brand4' },
                        ]}
                      />
                    </div>
                    <div className="input">
                      <label htmlFor="quantity" className='text-capitalize'>quantity</label>
                      <InputNumber
                        style={{ width: "100%" , "background":"#eee !important"}}
                        min={1} max={10} defaultValue={3} onChange={(value) => console.log(value)} />
                    </div>
                    <div className="input">
                      <label htmlFor="discount" className='text-capitalize'>discount</label>
                      <InputNumber 
                        style={{ width: "100%" , "background":"#eee !important"}}
                        min={1} max={10} defaultValue={3} onChange={(value) => console.log(value)} />
                    </div>
                    <div className="input">
                      <label className='text-capitalize'>discount type</label>
                      <Select
                        defaultValue={"amount"}
                        className='d-block'
                        style={{ width: "100%" , "background":"#eee !important"}}
                        onChange={(value) => console.log(value)}
                        options={[
                          { value: 'amount', label: 'amount' },
                          { value: 'dollar', label: 'dollar' }
                        ]}
                      />
                    </div>
                    <div className="input">
                      <label htmlFor="sold" className='text-capitalize'>sold</label>
                      <InputNumber 
                        style={{ width: "100%" , "background":"#eee !important"}}
                        min={1} max={10} defaultValue={3} onChange={(value) => console.log(value)} />
                    </div>
                    <div className="input">
                      <label htmlFor="colors" className='text-capitalize'>colors</label>
                      <Select
                        className='d-block select-color'
                        style={{ width: "100%" , "background":"#eee !important"}}
                        onChange={(value) => console.log(value)}
                      >
                        <option value="">
                          <span style={{background:"red"}}></span> red
                        </option>
                        <option value="">
                          <span style={{background:"green"}}></span> green
                        </option>
                        <option value="">
                          <span style={{background:"yellow"}}></span> yellow
                        </option>
                      </Select>
                    </div>
                    <div className="input">
                      <label htmlFor="tags" className='text-capitalize'>tags</label>
                      <Select
                        mode="multiple"
                        allowClear
                        className='d-block'
                        style={{ width: "100%" , "background":"#eee !important"}}
                        onChange={(value) => console.log(value)}
                        options={[
                          { value: 'tags1', label: 'tags1' },
                          { value: 'tags2', label: 'tags2' },
                          { value: 'tags3', label: 'tags3' },
                          { value: 'tags4', label: 'tags4' },
                        ]}
                      />
                    </div>
                    <div className="input">
                      <label htmlFor="product images" className='text-capitalize'>product Images</label>
                      <Upload
                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                        listType="picture-card"
                        fileList={fileList}
                        onChange={onChange}
                        onPreview={onPreview}
                        className="avatar-uploader"
                      >
                        {fileList.length < 5 && '+ Upload'}
                      </Upload>
                    </div>
                    <div className='d-flex gap-5 mb-4'>
                      <div className="input">
                        <label className='text-capitalize d-block'>is Active</label>
                        <Switch defaultChecked onChange={(checked) => {
                          console.log(checked)
                        }} />
                      </div>
                    </div>
                    <div className="">
                      <button className='btn btn-primary btn-block w-100'>Create</button>
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
              <Table pagination={false} columns={columns} rowKey="_id" dataSource={data} onChange={onChangeTable} />
            </div>
        </div>
    )
};

export default DashboardAllProductComponent;




