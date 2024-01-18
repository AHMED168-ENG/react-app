

import React from 'react';
import HelmetComponent from '../../components/helmet';
import DashboardLoginComponent from '../../components/dashboard/login/login';
import Dashboard from '../../components/dashboard/dashboard';
function DashboardPage() {
    return (
        <>
            <HelmetComponent title="dashboard"></HelmetComponent>
            <Dashboard></Dashboard>
        </>
    )
};

export default DashboardPage;