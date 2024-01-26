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


function DashboardAllProductComponent() {
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
        },
        {
          title: 'Brands',
          dataIndex: 'brands',
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
          dataIndex: 'discountType',
        },
        {
          title: 'Sold',
          dataIndex: 'sold',
        },
        {
          title: 'Colors',
          dataIndex: 'colors',
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
    const data = [
      {
          key: '2',
          title: 'title',
          description:"description",
          price: "200.2 $",
          category: "category 1",
          brands: "Adidas",
          quantity: 20,
          discount: 5,
          discountType: "amount",
          sold: 13,
          colors: "red",
          Active: false,
          Actions: '1',
      },
      {
          key: '2',
          title: 'title',
          description:"description",
          price: "200.2 $",
          category: "category 1",
          brands: "Adidas",
          quantity: 20,
          discount: 5,
          discountType: "amount",
          sold: 13,
          colors: "red",
          Active: true,
          Actions: '1',
      },
      {
          key: '2',
          title: 'title',
          description:"description",
          price: "200.2 $",
          category: "category 1",
          brands: "Adidas",
          quantity: 20,
          discount: 5,
          discountType: "amount",
          sold: 13,
          colors: "red",
          Active: false,
          Actions: '1',
      },
      {
          key: '2',
          title: 'title',
          description:"description",
          price: "200.2 $",
          category: "category 1",
          brands: "Adidas",
          quantity: 20,
          discount: 5,
          discountType: "amount",
          sold: 13,
          colors: "red",
          Active: true,
          Actions: '1',
      },
      {
          key: '2',
          title: 'title',
          description:"description",
          price: "200.2 $",
          category: "category 1",
          brands: "Adidas",
          quantity: 20,
          discount: 5,
          discountType: "amount",
          sold: 13,
          colors: "red",
          Active: false,
          Actions: '1',
      },
      {
          key: '2',
          title: 'title',
          description:"description",
          price: "200.2 $",
          category: "category 1",
          brands: "Adidas",
          quantity: 20,
          discount: 5,
          discountType: "amount",
          sold: 13,
          colors: "red",
          Active: true,
          Actions: '1',
      },
      {
          key: '2',
          title: 'title',
          description:"description",
          price: "200.2 $",
          category: "category 1",
          brands: "Adidas",
          quantity: 20,
          discount: 5,
          discountType: "amount",
          sold: 13,
          colors: "red",
          Active: false,
          Actions: '1',
      },
    ];
    const onChangeTable = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };
    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about table /\/\/\/\/\/\//\/\/\/\/\
    // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ about chart /\/\/\/\/\/\//\/\/\/\/\
    const [chartData, setChartData] = useState([
      {
        "Date": "2010-01",
        "scales": 1500
      },
      {
        "Date": "2010-02",
        "scales": 1000
      },
      {
        "Date": "2010-03",
        "scales": 1720
      },
      {
        "Date": "2010-04",
        "scales": 1300
      },
      {
        "Date": "2010-05",
        "scales": 1200
      },
      {
        "Date": "2010-06",
        "scales": 1802
      },
      {
        "Date": "2010-07",
        "scales": 1945
      },
      {
        "Date": "2010-08",
        "scales": 1856
      },
      {
        "Date": "2010-09",
        "scales": 1000
      },
      {
        "Date": "2010-10",
        "scales": 2000
      },
      {
        "Date": "2010-11",
        "scales": 2311
      },
      {
        "Date": "2010-12",
        "scales": 1972
      },
      {
        "Date": "2011-01",
        "scales": 1760
      },
      {
        "Date": "2011-02",
        "scales": 1300
      },
      {
        "Date": "2011-03",
        "scales": 1400
      },
      {
        "Date": "2011-04",
        "scales": 1500
      },
      {
        "Date": "2011-05",
        "scales": 1640
      },
      {
        "Date": "2011-06",
        "scales": 1502
      },
      {
        "Date": "2011-07",
        "scales": 1621
      },
      {
        "Date": "2011-08",
        "scales": 1500
      },
      {
        "Date": "2011-09",
        "scales": 1200
      },
      {
        "Date": "2011-10",
        "scales": 1390
      },
      {
        "Date": "2011-11",
        "scales": 1190
      },
      {
        "Date": "2011-12",
        "scales": 1250
      },
      {
        "Date": "2012-01",
        "scales": 1394
      },
      {
        "Date": "2012-02",
        "scales": 1406
      },
      {
        "Date": "2012-03",
        "scales": 1578
      },
      {
        "Date": "2012-04",
        "scales": 1465
      },
      {
        "Date": "2012-05",
        "scales": 1689
      },
      {
        "Date": "2012-06",
        "scales": 1755
      },
      {
        "Date": "2012-07",
        "scales": 1495
      },
      {
        "Date": "2012-08",
        "scales": 1508
      },
      {
        "Date": "2012-09",
        "scales": 1433
      },
      {
        "Date": "2012-10",
        "scales": 1344
      },
      {
        "Date": "2012-11",
        "scales": 1201
      },
      {
        "Date": "2012-12",
        "scales": 1065
      },
      {
        "Date": "2013-01",
        "scales": 1255
      },
      {
        "Date": "2013-02",
        "scales": 1429
      },
      {
        "Date": "2013-03",
        "scales": 1398
      },
      {
        "Date": "2013-04",
        "scales": 1678
      },
      {
        "Date": "2013-05",
        "scales": 1524
      },
      {
        "Date": "2013-06",
        "scales": 1688
      },
      {
        "Date": "2013-07",
        "scales": 1500
      },
      {
        "Date": "2013-08",
        "scales": 1670
      },
      {
        "Date": "2013-09",
        "scales": 1734
      },
      {
        "Date": "2013-10",
        "scales": 1699
      },
      {
        "Date": "2013-11",
        "scales": 1508
      },
      {
        "Date": "2013-12",
        "scales": 1680
      },
      {
        "Date": "2014-01",
        "scales": 1750
      },
      {
        "Date": "2014-02",
        "scales": 1602
      },
      {
        "Date": "2014-03",
        "scales": 1834
      },
      {
        "Date": "2014-04",
        "scales": 1722
      },
      {
        "Date": "2014-05",
        "scales": 1430
      },
      {
        "Date": "2014-06",
        "scales": 1280
      },
      {
        "Date": "2014-07",
        "scales": 1367
      },
      {
        "Date": "2014-08",
        "scales": 1155
      },
      {
        "Date": "2014-09",
        "scales": 1289
      },
      {
        "Date": "2014-10",
        "scales": 1104
      },
      {
        "Date": "2014-11",
        "scales": 1246
      },
      {
        "Date": "2014-12",
        "scales": 1098
      },
      {
        "Date": "2015-01",
        "scales": 1189
      },
      {
        "Date": "2015-02",
        "scales": 1276
      },
      {
        "Date": "2015-03",
        "scales": 1033
      },
      {
        "Date": "2015-04",
        "scales": 956
      },
      {
        "Date": "2015-05",
        "scales": 845
      },
      {
        "Date": "2015-06",
        "scales": 1089
      },
      {
        "Date": "2015-07",
        "scales": 944
      },
      {
        "Date": "2015-08",
        "scales": 1043
      },
      {
        "Date": "2015-09",
        "scales": 893
      },
      {
        "Date": "2015-10",
        "scales": 840
      },
      {
        "Date": "2015-11",
        "scales": 934
      },
      {
        "Date": "2015-12",
        "scales": 810
      },
      {
        "Date": "2016-01",
        "scales": 782
      },
      {
        "Date": "2016-02",
        "scales": 1089
      },
      {
        "Date": "2016-03",
        "scales": 745
      },
      {
        "Date": "2016-04",
        "scales": 680
      },
      {
        "Date": "2016-05",
        "scales": 802
      },
      {
        "Date": "2016-06",
        "scales": 697
      },
      {
        "Date": "2016-07",
        "scales": 583
      },
      {
        "Date": "2016-08",
        "scales": 456
      },
      {
        "Date": "2016-09",
        "scales": 524
      },
      {
        "Date": "2016-10",
        "scales": 398
      },
      {
        "Date": "2016-11",
        "scales": 278
      },
      {
        "Date": "2016-12",
        "scales": 195
      },
      {
        "Date": "2017-01",
        "scales": 145
      },
      {
        "Date": "2017-02",
        "scales": 207
      }
    ]);
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
                  <button onClick="" title="Search" className="button">
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
              <Table pagination={false} columns={columns} dataSource={data} onChange={onChangeTable} />
            </div>
        </div>
    )
};

export default DashboardAllProductComponent;




