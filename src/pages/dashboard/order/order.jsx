import React from 'react';
import HelmetComponent from '../../../components/helmet';
import DashboardOrdersComponent from '../../../components/dashboard/orders/all';
function DashboardOrderAll() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="order"></HelmetComponent>
            <DashboardOrdersComponent></DashboardOrdersComponent>
        </>
    )
};

export default DashboardOrderAll;