import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import DashboardMenu from '../../components/dashboard/menu';
import DashboardSidebar from '../../components/dashboard/sidebar';
import { Outlet } from 'react-router-dom';
const { Content } = Layout;
const LayoutComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <DashboardSidebar collapsed={collapsed}></DashboardSidebar>
      <Layout>
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
      </Layout>
    </Layout>
  );
};
export default LayoutComponent;