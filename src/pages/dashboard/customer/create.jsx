import React from 'react';
import DashboardCreateCustomerComponent from '../../../components/dashboard/customer/create';
import HelmetComponent from '../../../components/helmet';
function DashboardCustomerCreate() {
    return (
        <>
            <HelmetComponent title="create customer"></HelmetComponent>
            <DashboardCreateCustomerComponent></DashboardCreateCustomerComponent>
        </>
    )
};

export default DashboardCustomerCreate;