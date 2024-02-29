import React from 'react';
import HelmetComponent from '../../../components/helmet';
import DashboardEnquiriesComponent from '../../../components/dashboard/enquiries/all';
function DashboardEnquiryCategoryAll() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="enquiries"></HelmetComponent>
            <DashboardEnquiriesComponent></DashboardEnquiriesComponent>
        </>
    )
};

export default DashboardEnquiryCategoryAll;