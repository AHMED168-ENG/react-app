import React from 'react';
import HelmetComponent from '../../../components/helmet';
import DashboardBrandComponent from '../../../components/dashboard/brand/all';
function DashboardBrandAll() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="all brand"></HelmetComponent>
            <DashboardBrandComponent></DashboardBrandComponent>
        </>
    )
};

export default DashboardBrandAll;