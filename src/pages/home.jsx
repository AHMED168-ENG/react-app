import HelmetComponent from "../components/helmet";
import BrandPage from "../components/home/brand";
import CategorySection from "../components/home/category";
import FamousProductSection from "../components/home/famous_product";
import FeatureProductSection from "../components/home/featured_product";
import LandingPage from "../components/home/landing_page";
import LatestNewsSection from "../components/home/latest_news";
import ServicePage from "../components/home/services";
import SpecialProductSection from "../components/home/special_product";

export default function Home () {
    window.scrollTo(0,0 )
    return ( 
        <>
            <HelmetComponent title="home"></HelmetComponent>
            <LandingPage></LandingPage>
            <ServicePage></ServicePage>
            <CategorySection></CategorySection>
            <FeatureProductSection></FeatureProductSection>
            <FamousProductSection></FamousProductSection>
            <SpecialProductSection></SpecialProductSection>
            <LatestNewsSection></LatestNewsSection>
            <BrandPage></BrandPage>
        </>
     );
}

