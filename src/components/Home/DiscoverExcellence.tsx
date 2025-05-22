import Slider from "react-slick"
import ProductCard from "../Card/ProductCard"
import { useRef, useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Car10, Car8, Car9 } from "../../assets/images";
import { Link } from "react-router";

const tabs = [
    { id: 1, name: "All" },
    { id: 2, name: "Luxury" },
    { id: 3, name: "Vintage Car" },
    { id: 4, name: "Family Car" },
    { id: 5, name: "Off-Road Car" },
]

const data = [
    {
        name: "Genesis G70",
        dailyRate: 1999,
        capacity: 5,
        mode: "auto",
        bodyType: "Sedan",
        doors: 4,
        rating: 4.5,
        img_url: Car8
    },
    {
        name: "Volvo S90",
        dailyRate: 4999,
        capacity: 5,
        mode: "auto",
        bodyType: "Sedan",
        doors: 4,
        rating: 4.5,
        img_url: Car9
    },
    {
        name: "2025 Land Cruiser",
        dailyRate: 7999,
        capacity: 5,
        mode: "auto",
        bodyType: "Sedan",
        doors: 4,
        rating: 4.5,
        img_url: Car10
    }
]

const DiscoverExcellence = () => {
    const [isActive, setIsActive] = useState(1);
    const sliderRef = useRef<Slider>(null);
    const handleNext = () => {
        sliderRef.current?.slickNext();
    };
    const handlePrev = () => {
        sliderRef.current?.slickPrev();
    };

    const settings = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <div className="bg-color1 py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 items-center text-white gap-20 px-12">
                    <h2 data-aos="fade-right" className="text-5xl font-semibold leading-14">Discover Excellence in Our Diverse Fleet</h2>
                    <p data-aos="fade-left" className=" mt-2 lg:text-[17px]">From fuel-efficient cars to luxurious rides, CarRide offers options for every travel need. Explore our fleet and find a car that suits your style and budget</p>
                </div>
                <div>
                    <ul className="flex items-center justify-center gap-4 mt-10" data-aos="fade-up" data-aos-delay="100">
                        {tabs.map((tab, i) => (
                            <li key={i} className={`px-6 py-2 rounded-full border text-white cursor-pointer ${isActive === tab.id ? "bg-primary border-primary " : "border-[#FAFAFA1A] "}`} onClick={() => setIsActive(tab.id)}>{tab.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-10">
                    <div className="relative" data-aos="zoom-in" data-aos-delay="200">
                        <div>
                            <button className="absolute top-1/2 -translate-y-1/2 cursor-pointer w-9 h-9 rounded-full border border-white text-white hover:bg-primary hover:border-primary flex items-center justify-center" onClick={handlePrev}>
                                <ArrowBack className="!text-xl" />
                            </button>
                            <button className="absolute top-1/2 -translate-y-1/2 cursor-pointer right-0 w-9 h-9 rounded-full border border-white text-white hover:bg-primary hover:border-primary flex items-center justify-center" onClick={handleNext}>
                                <ArrowForward className="!text-xl" />
                            </button>
                        </div>
                        <div className="px-12">
                            <Slider {...settings} ref={sliderRef}>
                                {data?.map((vehicle, index) => (
                                    <div key={index} className="px-2">
                                        <ProductCard vehicle={vehicle} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="mt-10">
                        <Link to="/car-list" className="btn2 border-primary text-primary hover:bg-primary hover:text-white mx-auto w-fit">View All Cars</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscoverExcellence