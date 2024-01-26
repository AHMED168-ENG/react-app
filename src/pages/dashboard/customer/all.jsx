import React from 'react';
import DashboardAllCustomerComponent from '../../../components/dashboard/customer/all';
import HelmetComponent from '../../../components/helmet';
function DashboardCustomerAll() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="all customer"></HelmetComponent>
            <DashboardAllCustomerComponent></DashboardAllCustomerComponent>
        </>
    )
};

export default DashboardCustomerAll;