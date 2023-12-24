import BrandPage from "../components/home/brand";
import CategorySection from "../components/home/category";
import FeatureProductSection from "../components/home/featured_product";
import LandingPage from "../components/home/landing_page";
import LatestNewsSection from "../components/home/latest_news";
import ServicePage from "../components/home/services";
import SpecialProductSection from "../components/home/special_product";

export default function Home () {
    return ( 
        <>
            <LandingPage></LandingPage>
            <ServicePage></ServicePage>
            <CategorySection></CategorySection>
            <FeatureProductSection></FeatureProductSection>
            <SpecialProductSection></SpecialProductSection>
            <LatestNewsSection></LatestNewsSection>
            <BrandPage></BrandPage>
        </>
     );
}

