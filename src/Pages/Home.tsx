import Banner from "../Components/Banner/Banner";
import BrandsCate from "../Components/Home/BrandsCate.tsx";
import MostSearch from "../Components/Home/MostSearch.tsx";
import DiscoverExcellence from "../Components/Home/DiscoverExcellence.tsx";
import StayConnected from "../Components/Home/StayConnected.tsx";
import Testimonials from "../Components/Home/Testimonials.tsx";
import PersonalizedExperience from "../Components/Home/PersonalizedExperience.tsx";
import YourChoice from "../Components/Home/YourChoice.tsx";
import HowItsWork from "../Components/Home/HowItsWork.tsx";

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