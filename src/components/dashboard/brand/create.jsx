
import React from 'react';
import DashboardBreadcrumb from '../bradcrump';
import { Switch } from 'antd';
import "../../../scss/dashboard/brand/create.scss";

function DashboardCreateBrandComponent() {

  return(
    <div className="create-brand">
      <DashboardBreadcrumb className="mb-3" title={"Create Product Brand"}></DashboardBreadcrumb>
      <div className="form">
        <form action="" className='d-flex flex-column gap-2'>
          <div className="input">
            <label htmlFor="title" className='text-capitalize'>title</label>
            <input id='title' type="text" className='form-control' />
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
      </div>
    </div>
  )
};

export default DashboardCreateBrandComponent;