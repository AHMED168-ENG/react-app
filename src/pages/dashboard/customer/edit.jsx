import React from 'react';
import HelmetComponent from '../../../components/helmet';
import DashboardEditCustomerComponent from '../../../components/dashboard/customer/edit';
function DashboardCustomerEdit() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="edit customer"></HelmetComponent>
            <DashboardEditCustomerComponent></DashboardEditCustomerComponent>
        </>
    )
};

export default DashboardCustomerEdit;