
import React from 'react';
import DashboardBreadcrumb from '../bradcrump';
import { Select, Switch } from 'antd';
import "../../../scss/dashboard/product_category/create.scss";

function DashboardCreateProductCategoryComponent() {
  return(
    <div className="create-category">
      <DashboardBreadcrumb className="mb-3" title={"Create Product Category"}></DashboardBreadcrumb>
      <div className="form">
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
          <div className="">
            <button className='btn btn-primary btn-block w-100'>Create</button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default DashboardCreateProductCategoryComponent;