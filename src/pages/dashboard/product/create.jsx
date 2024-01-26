import React from 'react';
import DashboardCreateProductComponent from '../../../components/dashboard/product/create';
import HelmetComponent from '../../../components/helmet';
function DashboardProductCreate() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="create product"></HelmetComponent>
            <DashboardCreateProductComponent></DashboardCreateProductComponent>
        </>
    )
};

export default DashboardProductCreate;