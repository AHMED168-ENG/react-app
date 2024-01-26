import React from 'react';
import HelmetComponent from '../../../components/helmet';
import DashboardCreateBrandComponent from '../../../components/dashboard/brand/create';
function DashboardBrandCreate() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="create brand"></HelmetComponent>
            <DashboardCreateBrandComponent></DashboardCreateBrandComponent>
        </>
    )
};

export default DashboardBrandCreate;