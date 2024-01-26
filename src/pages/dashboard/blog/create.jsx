import React from 'react';
import HelmetComponent from '../../../components/helmet';
import DashboardCreateBlogComponent from '../../../components/dashboard/blog/create';
function DashboardBlogCreate() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="create Blog"></HelmetComponent>
            <DashboardCreateBlogComponent></DashboardCreateBlogComponent>
        </>
    )
};

export default DashboardBlogCreate;