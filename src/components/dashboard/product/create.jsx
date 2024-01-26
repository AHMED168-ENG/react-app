
import React, { useState } from 'react';
import DashboardBreadcrumb from '../bradcrump';
import ImgCrop from 'antd-img-crop';
import { Select, Switch, Upload } from 'antd';
import "../../../scss/dashboard/product/create.scss";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function DashboardCreateProductComponent() {
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
    <div className="create-product">
      <DashboardBreadcrumb className="mb-3" title={"Create Products"}></DashboardBreadcrumb>
      <div className="form">
        <form action="" className='d-flex flex-column gap-2'>
          <div className="input">
            <label htmlFor="title" className='text-capitalize'>title</label>
            <input id='title' type="text" className='form-control' />
          </div>
          <div className="input">
            <label htmlFor="description" className='text-capitalize'>Description</label>
            <CKEditor
                    config={ {
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
                    } }
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
        </form>
      </div>
    </div>
  )
};

export default DashboardCreateProductComponent;