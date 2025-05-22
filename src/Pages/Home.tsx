import Banner from "../components/Banner/Banner";
import BrandsCate from "../components/Home/BrandsCate.tsx";
import MostSearch from "../components/Home/MostSearch.tsx";
import DiscoverExcellence from "../components/Home/DiscoverExcellence.tsx";
import StayConnected from "../components/Home/StayConnected.tsx";
import Testimonials from "../components/Home/Testimonials.tsx";
import PersonalizedExperience from "../components/Home/PersonalizedExperience.tsx";
import YourChoice from "../components/Home/YourChoice.tsx";
import HowItsWork from "../components/Home/HowItsWork.tsx";

const Home = () => {
    return (
        <div>
            <Banner />
            <BrandsCate />
            <MostSearch />
            <PersonalizedExperience />
            <YourChoice />
            <DiscoverExcellence />
            <HowItsWork />
            <Testimonials />
            <StayConnected />
        </div>
    )
}

export default Home