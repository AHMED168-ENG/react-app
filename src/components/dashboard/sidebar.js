import React from 'react';
import "../../scss/dashboard/sidebar.scss"
import {Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { GrDashboard } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { TbCategory2 } from "react-icons/tb";
import { IoColorPaletteSharp } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { SiGooglebigquery } from "react-icons/si";


const DashboardSidebar = (props) => {
    const {collapsed} = props;
    const navigate = useNavigate()
  return (
    <Sider width={"13%"} className='dashboard-sidebar' trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical px-1 py-2" >
        <div className='image'>
          <img src="/images/logos/logo.png" alt="" />
        </div>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['/dashboard']}
        onClick={({key}) => {
          if(key === "signout") {

          } else {
            navigate(key)
          }
        }}
        items={[
          {
            key: '/dashboard',
            icon: <GrDashboard className='fs-6' />,
            label: 'Dashboard',
          },
          {
            key: '/dashboard/customer',
            icon: <FaUsers className='fs-6' />,
            label: 'Customer',
          },
          {
            key: '/dashboard/product',
            icon: <BsCart3 className='fs-6' />,
            label: 'product',
            children : [
              {
                key: '/dashboard/product',
                icon: <BsCart3 className='fs-6' />,
                label: 'Product List',
              },
              {
                key: '/dashboard/product/add',
                icon: <BsCart3 className='fs-6' />,
                label: 'Add Product',
              },
            ],
          },
          {
            key: '/dashboard/category',
            icon: <TbCategory2 className='fs-6' />,
            label: 'category',
            children : [
              {
                key: '/dashboard/category',
                icon: <TbCategory2 className='fs-6' />,
                label: 'Category List',
              },
              {
                key: '/dashboard/category/add',
                icon: <TbCategory2 className='fs-6' />,
                label: 'Add Category',
              },
            ],
          },
          {
            key: '/dashboard/brand',
            icon: <SiBrandfolder className='fs-6' />,
            label: 'Brand',
            children : [
              {
                key: '/dashboard/brand',
                icon: <SiBrandfolder className='fs-6' />,
                label: 'Brand List',
              },
              {
                key: '/dashboard/brand/add',
                icon: <SiBrandfolder className='fs-6' />,
                label: 'Add Brand',
              },

            ],
          },
          {
            key: '/dashboard/color',
            icon: <IoColorPaletteSharp className='fs-6' />,
            label: 'Color',
            children : [
              {
                key: '/dashboard/color',
                icon: <IoColorPaletteSharp className='fs-6' />,
                label: 'Color List',
              },
              {
                key: '/dashboard/color/add',
                icon: <IoColorPaletteSharp className='fs-6' />,
                label: 'Add Color',
              },

            ],
          },
          {
            key: '/dashboard/order',
            icon: <FaClipboardList className='fs-6' />,
            label: 'Order',
            children : [
              {
                key: '/dashboard/order',
                icon: <FaClipboardList className='fs-6' />,
                label: 'Order List',
              },
              {
                key: '/dashboard/order/add',
                icon: <FaClipboardList className='fs-6' />,
                label: 'Add Order',
              },

            ],
          },
          {
            key: '/dashboard/blog',
            icon: <FaBloggerB className='fs-6' />,
            label: 'Blog',
            children : [
              {
                key: '/dashboard/Blog',
                icon: <ImBlog className='fs-6' />,
                label: 'Blog List',
              },
              {
                key: '/dashboard/Blog/add',
                icon: <ImBlog className='fs-6' />,
                label: 'Add Blog',
              },
              {
                key: '/dashboard/Blog/add',
                icon: <FaBloggerB className='fs-6' />,
                label: 'Add Blog Category',
              },
              {
                key: '/dashboard/Blog/add',
                icon: <FaBloggerB className='fs-6' />,
                label: 'Blog Category List',
              },

            ],
          },
          {
            key: '/dashboard/enquiries',
            icon: <SiGooglebigquery className='fs-6' />,
            label: 'Enquiries',
            children : [
              {
                key: '/dashboard/enquiries',
                icon: <SiGooglebigquery className='fs-6' />,
                label: 'Enquiries List',
              },
              {
                key: '/dashboard/enquiries/add',
                icon: <SiGooglebigquery className='fs-6' />,
                label: 'Add Enquiries',
              },

            ],
          },
          {
            key: '/dashboard/order',
            icon: <FaClipboardList className='fs-6' />,
            label: 'Order',
            children : [
              {
                key: '/dashboard/order',
                icon: <FaClipboardList className='fs-6' />,
                label: 'Order List',
              },
              {
                key: '/dashboard/order/add',
                icon: <FaClipboardList className='fs-6' />,
                label: 'Add Order',
              },

            ],
          },
          {
            key: '/dashboard/blog',
            icon: <FaBloggerB className='fs-6' />,
            label: 'Blog',
            children : [
              {
                key: '/dashboard/Blog',
                icon: <ImBlog className='fs-6' />,
                label: 'Blog List',
              },
              {
                key: '/dashboard/Blog/add',
                icon: <ImBlog className='fs-6' />,
                label: 'Add Blog',
              },
              {
                key: '/dashboard/Blog/add',
                icon: <FaBloggerB className='fs-6' />,
                label: 'Add Blog Category',
              },
              {
                key: '/dashboard/Blog/add',
                icon: <FaBloggerB className='fs-6' />,
                label: 'Blog Category List',
              },

            ],
          },
          {
            key: '/dashboard/enquiries',
            icon: <SiGooglebigquery className='fs-6' />,
            label: 'Enquiries',
            children : [
              {
                key: '/dashboard/enquiries',
                icon: <SiGooglebigquery className='fs-6' />,
                label: 'Enquiries List',
              },
              {
                key: '/dashboard/enquiries/add',
                icon: <SiGooglebigquery className='fs-6' />,
                label: 'Add Enquiries',
              },

            ],
          },
          {
            key: '/dashboard/order',
            icon: <FaClipboardList className='fs-6' />,
            label: 'Order',
            children : [
              {
                key: '/dashboard/order',
                icon: <FaClipboardList className='fs-6' />,
                label: 'Order List',
              },
              {
                key: '/dashboard/order/add',
                icon: <FaClipboardList className='fs-6' />,
                label: 'Add Order',
              },

            ],
          },
          {
            key: '/dashboard/blog',
            icon: <FaBloggerB className='fs-6' />,
            label: 'Blog',
            children : [
              {
                key: '/dashboard/Blog',
                icon: <ImBlog className='fs-6' />,
                label: 'Blog List',
              },
              {
                key: '/dashboard/Blog/add',
                icon: <ImBlog className='fs-6' />,
                label: 'Add Blog',
              },
              {
                key: '/dashboard/Blog/add',
                icon: <FaBloggerB className='fs-6' />,
                label: 'Add Blog Category',
              },
              {
                key: '/dashboard/Blog/add',
                icon: <FaBloggerB className='fs-6' />,
                label: 'Blog Category List',
              },

            ],
          },
          {
            key: '/dashboard/enquiries',
            icon: <SiGooglebigquery className='fs-6' />,
            label: 'Enquiries',
            children : [
              {
                key: '/dashboard/enquiries',
                icon: <SiGooglebigquery className='fs-6' />,
                label: 'Enquiries List',
              },
              {
                key: '/dashboard/enquiries/add',
                icon: <SiGooglebigquery className='fs-6' />,
                label: 'Add Enquiries',
              },

            ],
          },
          {
            key: '/dashboard/order',
            icon: <FaClipboardList className='fs-6' />,
            label: 'Order',
            children : [
              {
                key: '/dashboard/order',
                icon: <FaClipboardList className='fs-6' />,
                label: 'Order List',
              },
              {
                key: '/dashboard/order/add',
                icon: <FaClipboardList className='fs-6' />,
                label: 'Add Order',
              },

            ],
          },
          {
            key: '/dashboard/blog',
            icon: <FaBloggerB className='fs-6' />,
            label: 'Blog',
            children : [
              {
                key: '/dashboard/Blog',
                icon: <ImBlog className='fs-6' />,
                label: 'Blog List',
              },
              {
                key: '/dashboard/Blog/add',
                icon: <ImBlog className='fs-6' />,
                label: 'Add Blog',
              },
              {
                key: '/dashboard/Blog/add',
                icon: <FaBloggerB className='fs-6' />,
                label: 'Add Blog Category',
              },
              {
                key: '/dashboard/Blog/add',
                icon: <FaBloggerB className='fs-6' />,
                label: 'Blog Category List',
              },

            ],
          },
          {
            key: '/dashboard/enquiries',
            icon: <SiGooglebigquery className='fs-6' />,
            label: 'Enquiries',
            children : [
              {
                key: '/dashboard/enquiries',
                icon: <SiGooglebigquery className='fs-6' />,
                label: 'Enquiries List',
              },
              {
                key: '/dashboard/enquiries/add',
                icon: <SiGooglebigquery className='fs-6' />,
                label: 'Add Enquiries',
              },

            ],
          },
        ]}
      />
  </Sider>
  )
}

export default DashboardSidebar