import React from 'react';
import HelmetComponent from '../../components/helmet';
import DashboardLoginComponent from '../../components/dashboard/login/login';
function DashboardLogin() {
    return (
        <>
            <HelmetComponent title="dashboard login"></HelmetComponent>
            <DashboardLoginComponent></DashboardLoginComponent>
        </>
    )
};

export default DashboardLogin;