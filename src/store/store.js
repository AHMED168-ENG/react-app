import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./reducers/product/product_slice";
import { AuthReducer } from "./reducers/auth/auth_slice";
import { UserReducer } from "./reducers/user/user_slice";
import { BrandReducer } from "./reducers/brand/brand_slice";
import { productCategoryReducer } from "./reducers/product_category/product_category_slice";
import { ColorReducer } from "./reducers/color/color_slice";
import { BlogReducer } from "./reducers/blog/blog_slice";
import { BlogCategoryReducer } from "./reducers/blog_category/blog_category_slice";
import { EnquiryReducer } from "./reducers/enquiries/enquiry_slice";
import { OrderReducer } from "./reducers/order/enquiry_slice";
import { CouponReducer } from "./reducers/coupon/coupon_slice";

export const Store = configureStore({
    reducer : {
        auth : AuthReducer,
        userReducer : UserReducer,
        productReducer : ProductReducer,
        brandReducer : BrandReducer,
        productCategoryReducer : productCategoryReducer,
        colorReducer : ColorReducer,
        blogReducer : BlogReducer,
        blogCategoryReducer : BlogCategoryReducer,
        enquiryReducer : EnquiryReducer,
        orderReducer : OrderReducer,
        couponReducer : CouponReducer,
    }
})


