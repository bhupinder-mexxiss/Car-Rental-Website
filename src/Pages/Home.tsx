import Banner from "../Components/Banner/Banner"
import BrandsCate from "../Components/Home/BrandsCate"
import DiscoverExcellence from "../Components/Home/DiscoverExcellence"
import HowItsWork from "../Components/Home/HowItsWork"
import MostSearch from "../Components/Home/MostSearch"
import PersonalizedExperience from "../Components/Home/PersonalizedExperience"
import StayConnected from "../Components/Home/StayConnected"
import Testimonials from "../Components/Home/Testimonials"
import YourChoice from "../Components/Home/YourChoice"


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