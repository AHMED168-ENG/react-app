import React from 'react';
import HelmetComponent from '../../../components/helmet';
import DashboardEditBrandComponent from '../../../components/dashboard/brand/edit';
function DashboardBrandUpdate() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="Update brand"></HelmetComponent>
            <DashboardEditBrandComponent></DashboardEditBrandComponent>
        </>
    )
};

export default DashboardBrandUpdate;