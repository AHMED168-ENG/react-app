import React from 'react';
import HelmetComponent from '../../../components/helmet';
import DashboardUpdateColorComponent from '../../../components/dashboard/color/edit';
function DashboardColorEdit() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="edit color"></HelmetComponent>
            <DashboardUpdateColorComponent></DashboardUpdateColorComponent>
        </>
    )
};

export default DashboardColorEdit;