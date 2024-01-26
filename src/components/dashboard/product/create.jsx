
import React, { useState } from 'react';
import DashboardBreadcrumb from '../bradcrump';
import ImgCrop from 'antd-img-crop';
import { Select, Switch, Upload , InputNumber } from 'antd';
import "../../../scss/dashboard/product/create.scss";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function DashboardCreateProductComponent() {
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
      </div>
    </div>
  )
};

export default DashboardCreateProductComponent;