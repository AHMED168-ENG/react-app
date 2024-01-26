import React from 'react';
import HelmetComponent from '../../../components/helmet';
import DashboardCreateProductCategoryComponent from '../../../components/dashboard/product_category/create';
function DashboardProductCategoryCreate() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="create product category"></HelmetComponent>
            <DashboardCreateProductCategoryComponent></DashboardCreateProductCategoryComponent>
        </>
    )
};

export default DashboardProductCategoryCreate;