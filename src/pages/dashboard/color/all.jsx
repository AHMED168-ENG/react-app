import React from 'react';
import HelmetComponent from '../../../components/helmet';
import DashboardColorComponent from '../../../components/dashboard/color/all';
function DashboardColorAll() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="all color"></HelmetComponent>
            <DashboardColorComponent></DashboardColorComponent>
        </>
    )
};

export default DashboardColorAll;