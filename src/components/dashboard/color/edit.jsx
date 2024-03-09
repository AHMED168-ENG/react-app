
import React, { useEffect, useState } from 'react';
import DashboardBreadcrumb from '../bradcrump';
import { Switch } from 'antd';
import "../../../scss/dashboard/color/create.scss";
import { useDispatch, useSelector } from 'react-redux';
import { ColorGetOneServer, ColorUpdateOneServer } from '../../../store/reducers/color/color_server';
import { useParams } from 'react-router-dom';
import { reset } from '../../../store/reducers/color/color_slice';

function DashboardUpdateColorComponent() {

  const dispatch = useDispatch()
  const errorsValidation = useSelector(state => state.colorReducer.errors)
  const color = useSelector(state => state.colorReducer.color)
  const isError = useSelector(state => state.colorReducer.isError)
  const updated = useSelector(state => state.colorReducer.updated)
  const message = useSelector(state => state.colorReducer.message)
  const [name , setName] = useState("")
  const [active , setActive] = useState(false)


  // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ update color /\/\/\/\/\/\//\/\/\/\/\
  let { id } = useParams();
  function updateColor(e) {
    e.preventDefault()
    dispatch(ColorUpdateOneServer({
      body : {
        name,
        active,
      },
      id: color._id
    }))
  }
  useEffect(() => {
    if(isError) {
        window.Toast.fire({
            icon: "error",
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
} , [isError , message , updated]);

  useEffect(() => {
      dispatch(ColorGetOneServer(id))
  } , []);

  useEffect(() => {
    setName(color.name)
    setActive(color.active)
} , [color]);
  // /\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/ update color /\/\/\/\/\/\//\/\/\/\/\
  return(
    <div className="create-color">
      <DashboardBreadcrumb className="mb-3" title={"Create Product Color"}></DashboardBreadcrumb>
      <div className="form">
        <form action="" className='d-flex flex-column gap-2'>
          <div className="input">
            <label htmlFor="name" className='text-capitalize'>name</label>
            <input value={name} onInput={(e) => setName(e.target.value)} id='name' type="text" className='form-control' />
            {errorsValidation.name ? <small className="text-danger">{errorsValidation.name[0].msg}</small> : ""}
          </div>
          <div className='d-flex gap-5 mb-2'>
            <div className="input">
              <label className='text-capitalize d-block'>is Active</label>
              <Switch value={active} onChange={(checked) => {
                setActive(checked)
              }} />
              {errorsValidation.active ? <small className="text-danger">{errorsValidation.active[0].msg}</small> : ""}
            </div>
          </div>
          <div className="">
          <button className='btn btn-primary btn-block w-100' onClick={(e) => updateColor(e)}>update</button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default DashboardUpdateColorComponent;