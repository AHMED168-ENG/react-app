import React from 'react';
import HelmetComponent from '../../components/helmet';
import DashboardResetPasswordComponent from '../../components/dashboard/reset_password/reset_password';
function DashboardResetPasswordPage() {
    return (
        <>
            <HelmetComponent title="reset password"></HelmetComponent>
            <DashboardResetPasswordComponent></DashboardResetPasswordComponent>
        </>
    )
};

export default DashboardResetPasswordPage;