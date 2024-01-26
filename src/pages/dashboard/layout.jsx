import React, { useState } from 'react';
import { Layout } from 'antd';
import DashboardMenu from '../../components/dashboard/menu';
import DashboardSidebar from '../../components/dashboard/sidebar';
import { Outlet } from 'react-router-dom';
import "../../scss/dashboard/layout.scss"
import DashboardFooter from '../../components/dashboard/footer';

const { Content } = Layout;
const LayoutComponent = () => {
  window.scrollTo(0,0)
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <DashboardSidebar collapsed={collapsed}></DashboardSidebar>
      <Layout className={`${collapsed ? "collapsedDiv" : "" } layout `}>
        <DashboardMenu collapsed={collapsed} setCollapsed={setCollapsed}></DashboardMenu>
        <Content 
          
          style={{
            margin: '24px 16px',
            padding: 24,        
            minHeight: "100vh", 
          }}
        >
          <Outlet></Outlet>
        </Content>
        <DashboardFooter></DashboardFooter>
      </Layout>
    </Layout>
  );
};
export default LayoutComponent;