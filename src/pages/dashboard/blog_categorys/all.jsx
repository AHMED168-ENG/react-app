import React from 'react';
import HelmetComponent from '../../../components/helmet';
import DashboardBlogComponent from '../../../components/dashboard/blog/all';
import DashboardAllBlogCategoryComponent from '../../../components/dashboard/blog_categorys/all';
function DashboardBlogCategoryAll() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="all blog category"></HelmetComponent>
            <DashboardAllBlogCategoryComponent></DashboardAllBlogCategoryComponent>
        </>
    )
};

export default DashboardBlogCategoryAll;