

import React from 'react';
import HelmetComponent from '../../components/helmet';
import Dashboard from '../../components/dashboard/dashboard';
function DashboardPage() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="dashboard"></HelmetComponent>
            <Dashboard></Dashboard>
        </>
    )
};

export default DashboardPage;