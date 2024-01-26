
import React from 'react';
import DashboardBreadcrumb from '../bradcrump';
import { DatePicker, InputNumber, Select, Switch } from 'antd';
import "../../../scss/dashboard/coupon/create.scss";

function DashboardCreateCouponComponent() {

  return(
    <div className="create-coupon">
      <DashboardBreadcrumb className="mb-3" title={"Create Product Coupon"}></DashboardBreadcrumb>
      <div className="form">
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
            <div className="">
              <button className='btn btn-primary btn-block w-100'>Create</button>
            </div>
        </form>
      </div>
    </div>
  )
};

export default DashboardCreateCouponComponent;