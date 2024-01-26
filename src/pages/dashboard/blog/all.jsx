import React from 'react';
import HelmetComponent from '../../../components/helmet';
import DashboardBlogComponent from '../../../components/dashboard/blog/all';
function DashboardBlogAll() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="all Blog"></HelmetComponent>
            <DashboardBlogComponent></DashboardBlogComponent>
        </>
    )
};

export default DashboardBlogAll;