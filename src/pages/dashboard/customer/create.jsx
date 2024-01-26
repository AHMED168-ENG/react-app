import React from 'react';
import DashboardCreateCustomerComponent from '../../../components/dashboard/customer/create';
import HelmetComponent from '../../../components/helmet';
function DashboardCustomerCreate() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="create customer"></HelmetComponent>
            <DashboardCreateCustomerComponent></DashboardCreateCustomerComponent>
        </>
    )
};

export default DashboardCustomerCreate;