import React from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,

} from '@ant-design/icons';
import { Layout, Button, theme, Dropdown } from 'antd';
import "../../scss/dashboard/menu.scss"
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaBell } from "react-icons/fa";

const { Header } = Layout;
const DashboardMenu = (props) => {
    const {collapsed, setCollapsed} = props;
    const {
      token: { colorBgContainer },
    } = theme.useToken();
  
  return (
    <Header
    className='d-flex align-items-center justify-content-between dashboard-menu'
    style={{
      padding: 0,
      background: colorBgContainer,
    }}
  >
    <div className="search d-flex align-items-center gap-4 ">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '18px',
          width: 64,
          height: 64,
        }}
      />
      <div className="input position-relative">
        <input type="text" placeholder='search for the truth' className=' position-relative' />
        <IoIosSearch className='position-absolute'></IoIosSearch>
      </div>
    </div>
    <div className='d-flex align-items-center '>
      <div className='user-notification'>
        <Dropdown
          menu={{
            items : [{
                key: 'notification1',
                label: (
                  <Link to="">
                    notification1
                  </Link>
                ),
              },
              {
                key: 'notification2',
                label: (
                  <Link to="">
                    notification2
                  </Link>
                ),
              },
              {
                key: 'notification3',
                label: (
                  <Link to="">
                    notification3
                  </Link>
                ),
              }]
          }}
          placement="bottom"
        >
         <div className='notification-wrapper position-relative'>
            <FaBell></FaBell>
            <span className='position-absolute'>2</span>
         </div>
        </Dropdown>
      </div> 
      <div className='user-info px-5'>
        <Dropdown
          menu={{
            items : [{
            key: 'profile',
            label: (
              <Link to="">
                Profile
              </Link>
            ),
          },
          {
            key: 'messages',
            label: (
              <Link to="">
                Messages
              </Link>
            ),
          },
          {
            key: 'logout',
            label: (
              <Link to="">
                Logout
              </Link>
            ),
          }]
          }}
          placement="bottom"
        >
          <div className='profile d-flex gap-3 align-items-center'>
            <div className="img">
              <img src="/images/user-img.jpg" alt="" />
            </div>
            <div className='info'>
              <h5 className='text-capitalize mb-2'>Navdeep</h5>
              <p className='mb-0'>Navdeepdahyia753@gmail.com</p>
            </div>
          </div>
        </Dropdown>
      </div>  
    </div>
  </Header>
  )
}



export default DashboardMenu