import React from 'react';
import HelmetComponent from '../../../components/helmet';
import DashboardCreateBlogCategoryComponent from '../../../components/dashboard/blog_categorys/create';
function DashboardBlogCategoryCreate() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="Create Blog Category"></HelmetComponent>
            <DashboardCreateBlogCategoryComponent></DashboardCreateBlogCategoryComponent>
        </>
    )
};

export default DashboardBlogCategoryCreate;