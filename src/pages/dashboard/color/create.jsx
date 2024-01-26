import React from 'react';
import HelmetComponent from '../../../components/helmet';
import DashboardCreateColorComponent from '../../../components/dashboard/color/create';
function DashboardColorCreate() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="create Color"></HelmetComponent>
            <DashboardCreateColorComponent></DashboardCreateColorComponent>
        </>
    )
};

export default DashboardColorCreate;