import React from 'react';
import DashboardAllCustomerComponent from '../../../components/dashboard/customer/all';
import HelmetComponent from '../../../components/helmet';
import DashboardAllProductCategoryComponent from '../../../components/dashboard/product_category/all';
function DashboardProductCategoryAll() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="all product category"></HelmetComponent>
            <DashboardAllProductCategoryComponent></DashboardAllProductCategoryComponent>
        </>
    )
};

export default DashboardProductCategoryAll;