import Banner from "../components/Banner/Banner"
import BrandsCate from "../components/Home/BrandsCate"
import DiscoverExcellence from "../components/Home/DiscoverExcellence"
import HowItsWork from "../components/Home/HowItsWork"
import MostSearch from "../components/Home/MostSearch"
import PersonalizedExperience from "../components/Home/PersonalizedExperience"
import StayConnected from "../components/Home/StayConnected"
import Testimonials from "../components/Home/Testimonials"
import YourChoice from "../components/Home/YourChoice"


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