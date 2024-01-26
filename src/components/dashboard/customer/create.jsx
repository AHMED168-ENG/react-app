
import React, { useState } from 'react';
import DashboardBreadcrumb from '../bradcrump';
import ImgCrop from 'antd-img-crop';
import { Switch, Upload } from 'antd';
import "../../../scss/dashboard/customer/create.scss";

function DashboardCreateCustomerComponent() {
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
  return(
    <div className="create-customer">
      <DashboardBreadcrumb className="mb-3" title={"Create customers"}></DashboardBreadcrumb>
      <div className="form">
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
          <div className="">
            <button className='btn btn-primary btn-block w-100'>Create</button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default DashboardCreateCustomerComponent;