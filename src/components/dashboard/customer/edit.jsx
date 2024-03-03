
import React, { useEffect, useState } from 'react';
import DashboardBreadcrumb from '../bradcrump';
import { Switch, Upload } from 'antd';
import "../../../scss/dashboard/customer/create.scss";
import { reset } from '../../../store/reducers/user/user_slice';
import { UserGetOneServer, UserUpdateOneServer, UserUploadImageServer } from '../../../store/reducers/user/user_server';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function DashboardEditCustomerComponent() {
  const dispatch = useDispatch()
  const errorsValidation = useSelector(state => state.userReducer.errors)
  const user = useSelector(state => state.userReducer.user)
  const isError = useSelector(state => state.userReducer.isError)
  const imageUpload = useSelector(state => state.userReducer.imageUpload)
  const updated = useSelector(state => state.userReducer.updated)
  const message = useSelector(state => state.userReducer.message)
  const [email , setEmail] = useState(user.email)
  const [firstName , setFirstName] = useState("")
  const [lastName , setLastName] = useState("")
  const [mobile , setMobile] = useState("")
  const [password , setPassword] = useState("")
  const [resetPassword , setResetPassword] = useState("")
  const [role , setRole] = useState("")
  const [isBlocked , setIsBlocked] = useState("")
  const [active , setActive] = useState("")
  const [address , setAddress] = useState("")
  const [image , setImage] = useState([])


  // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ update user /\/\/\/\/\/\//\/\/\/\/\
  function updateUser(e) {
    e.preventDefault()
    dispatch(UserUpdateOneServer({
      body : {
        email,
        firstName,
        lastName,
        mobile,
        password,
        resetPassword,
        role,
        isBlocked,
        active,
        address,
      },
      id: user._id
    }))
  }
  let { id } = useParams();
  useEffect(() => {
    if(isError) {
        window.Toast.fire({
            icon: "error",
            title: message,
        });
        dispatch(reset())
    }
        
    if(imageUpload) {
      window.Toast.fire({
        icon: "success",
        title: message,
      });
      dispatch(reset())
    }

    if(updated) {
      window.Toast.fire({
        icon: "success",
        title: message,
      });
      dispatch(reset())
    }
} , [isError , message , imageUpload , updated]);

  useEffect(() => {
      dispatch(UserGetOneServer(id))
  } , []);

  useEffect(() => {
    setEmail(user.email)
    setFirstName(user.firstName)
    setLastName(user.lastName)
    setMobile(user.mobile)
    setRole(user.role)
    setIsBlocked(user.isBlocked)
    setActive(user.active)
    setAddress(user.address)
    if(user.image) {
      setImage([{thumbUrl : user.image.url}])
    }
} , [user]);
  // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ update user /\/\/\/\/\/\//\/\/\/\/\

  const onChange = ({ fileList: newFileList }) => {
    console.log(newFileList)
    setImage(newFileList);
    if(newFileList.length) dispatch(UserUploadImageServer({id : user._id , image : newFileList}))
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
    <div className="create-customer position-relative">
      <DashboardBreadcrumb className="mb-3" title={"update customer"}></DashboardBreadcrumb>
      <div className="form">
        <form action="" className='d-flex flex-column gap-2'>
          <div className="input">
            <label htmlFor="fName" className='text-capitalize'>first name</label>
            <input id='fName' value={firstName} type="text" className='form-control' onInput={(e) => setFirstName(e.target.value)} />
            {errorsValidation.firstName ? <small className="text-danger">{errorsValidation.firstName[0].msg}</small> : ""}
          </div>
          <div className="input">
            <label htmlFor="lName" className='text-capitalize'>last name</label>
            <input type="text" value={lastName} id='lName' className='form-control' onInput={(e) => setLastName(e.target.value)} />
            {errorsValidation.lastName ? <small className="text-danger">{errorsValidation.lastName[0].msg}</small> : ""}
          </div>
          <div className="input">
            <label htmlFor="email" className='text-capitalize'>email</label>
            <input type="email" value={email} id='email' className='form-control' onInput={(e) => setEmail(e.target.value)} />
            {errorsValidation.email ? <small className="text-danger">{errorsValidation.email[0].msg}</small> : ""}
          </div>
          <div className="input">
            <label htmlFor="password" className='text-capitalize'>password</label>
            <input type="password" value={password} id='password' className='form-control' onInput={(e) => setPassword(e.target.value)} />
            {errorsValidation.password ? <small className="text-danger">{errorsValidation.password[0].msg}</small> : ""}
          </div>
          <div className="input">
            <label htmlFor="resetPassword" className='text-capitalize'>reset password</label>
            <input type="password" value={resetPassword} id='resetPassword' className='form-control' onInput={(e) => setResetPassword(e.target.value)} />
            {errorsValidation.resetPassword ? <small className="text-danger">{errorsValidation.resetPassword[0].msg}</small> : ""}
          </div>
          <div className="input">
            <label htmlFor="mobile" className='text-capitalize'>mobile</label>
            <input type="text" value={mobile} id='mobile' className='form-control' onInput={(e) => setMobile(e.target.value)} />
            {errorsValidation.mobile ? <small className="text-danger">{errorsValidation.mobile[0].msg}</small> : ""}
          </div>
   
          <div className="input">
            <label htmlFor="role" className='text-capitalize'>role</label>
            <select value={role} name="role" id="role" onInput={(e) => setRole(e.target.value)} className='form-control'>
              <option></option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              <option value="Super Admin">super Admin</option>
            </select>
            {errorsValidation.role ? <small className="text-danger">{errorsValidation.role[0].msg}</small> : ""}
          </div>
      
          <div className="input ">
            <label htmlFor="address" className='text-capitalize'>address</label>
            <input type="text" value={address} onInput={(e) => setAddress(e.target.value)} id='address' className='form-control' />
            {errorsValidation.address ? <small className="text-danger">{errorsValidation.address[0].msg}</small> : ""}
          </div>

          <div className="input">
              <Upload
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture-card"
                fileList={image}
                beforeUpload={() => false}
                multiple={false}
                maxCount={1}
                onChange={onChange}
                onPreview={onPreview}
                className='position-relative'
              >
              {image.length < 1 && '+ Upload'}
              </Upload>
              {errorsValidation.image ? <small className="text-danger">{errorsValidation.image[0].msg}</small> : ""}
          </div>
          <div className='d-flex gap-5 mb-4'>
            <div className="input">
              <label htmlFor="isBlocked" className='text-capitalize d-block'>is Blocked</label>
              <Switch value={isBlocked} onChange={(checked) => {
                setIsBlocked(checked)
              }} />
              {errorsValidation.isBlocked ? <small className="text-danger">{errorsValidation.isBlocked[0].msg}</small> : ""}
            </div>
            <div className="input">
              <label htmlFor="active" className='text-capitalize d-block'>is Active</label>
              <Switch  value={active} onChange={(checked) => {
                setActive(checked)
              }} />
              {errorsValidation.active ? <small className="text-danger">{errorsValidation.active[0].msg}</small> : ""}
            </div>
          </div>
          <div className="">
            <button className='btn btn-primary btn-block w-100' onClick={(e) => updateUser(e)}>update</button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default DashboardEditCustomerComponent;