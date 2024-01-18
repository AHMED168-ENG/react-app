import React from 'react';
import HelmetComponent from '../../components/helmet';
import DashboardforgetPasswordComponent from '../../components/dashboard/forget_password/forget_password';
function DashboardForgetPasswordPage() {
    return (
        <>
            <HelmetComponent title="forget password"></HelmetComponent>
            <DashboardforgetPasswordComponent></DashboardforgetPasswordComponent>
        </>
    )
};

export default DashboardForgetPasswordPage;