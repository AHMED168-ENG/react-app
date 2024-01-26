
import React from 'react';
import DashboardBreadcrumb from '../bradcrump';
import { InputNumber, Select, Switch } from 'antd';
import "../../../scss/dashboard/blog/create.scss";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

function DashboardCreateBlogComponent() {

  return(
    <div className="create-blog">
      <DashboardBreadcrumb className="mb-3" title={"Create Product blog"}></DashboardBreadcrumb>
      <div className="form">
        <form action="" className='d-flex flex-column gap-2'>
            <div className="input">
              <label htmlFor="title" className='text-capitalize'>Description</label>
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
                data="<p>blog description</p>"
                onChange={ ( event , editor ) => {
                    console.log( editor.getData() );
                  }}
                />
            </div>
            <div className="input">
              <label className='text-capitalize'>Blog Category </label>
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
              <label className='text-capitalize'>Num Views</label>
              <InputNumber 
              style={{ width: "100%" , "background":"#eee !important"}}
              min={1} max={10} defaultValue={3} onChange={(value) => console.log(value)} />
            </div>
            <div className="input">
              <label className='text-capitalize'>Likes</label>
              <InputNumber 
              style={{ width: "100%" , "background":"#eee !important"}}
              min={1} max={10} defaultValue={3} onChange={(value) => console.log(value)} />
            </div>
            <div className="input">
              <label className='text-capitalize'>Dis Likes</label>
              <InputNumber 
              style={{ width: "100%" , "background":"#eee !important"}}
              min={1} max={10} defaultValue={3} onChange={(value) => console.log(value)} />
            </div>
            <div className="input">
              <label htmlFor="author" className='text-capitalize'>Author</label>
              <input id='author' type="text" className='form-control' />
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

export default DashboardCreateBlogComponent;