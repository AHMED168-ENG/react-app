import React from 'react';
import DashboardCreateProductComponent from '../../../components/dashboard/product/create';
import HelmetComponent from '../../../components/helmet';
function DashboardProductCreate() {
    return (
        <>
            <HelmetComponent title="create product"></HelmetComponent>
            <DashboardCreateProductComponent></DashboardCreateProductComponent>
        </>
    )
};

export default DashboardProductCreate;