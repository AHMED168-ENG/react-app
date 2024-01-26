import React from 'react';
import HelmetComponent from '../../../components/helmet';
import DashboardCreateCouponComponent from '../../../components/dashboard/coupon/create';
function DashboardCouponCreate() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="create Coupon"></HelmetComponent>
            <DashboardCreateCouponComponent></DashboardCreateCouponComponent>
        </>
    )
};

export default DashboardCouponCreate;