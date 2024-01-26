import React from 'react';
import HelmetComponent from '../../../components/helmet';
import DashboardCouponComponent from '../../../components/dashboard/coupon/all';
function DashboardCouponAll() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="all coupon"></HelmetComponent>
            <DashboardCouponComponent></DashboardCouponComponent>
        </>
    )
};

export default DashboardCouponAll;