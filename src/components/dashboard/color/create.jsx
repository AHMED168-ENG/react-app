
import React from 'react';
import DashboardBreadcrumb from '../bradcrump';
import { Switch } from 'antd';
import "../../../scss/dashboard/color/create.scss";

function DashboardCreateColorComponent() {

  return(
    <div className="create-color">
      <DashboardBreadcrumb className="mb-3" title={"Create Product Color"}></DashboardBreadcrumb>
      <div className="form">
        <form action="" className='d-flex flex-column gap-2'>
          <div className="input">
            <label htmlFor="name" className='text-capitalize'>name</label>
            <input id='name' type="text" className='form-control' />
          </div>
          <div className='d-flex gap-5 mb-2'>
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
      </div>
    </div>
  )
};

export default DashboardCreateColorComponent;