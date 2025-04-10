import Slider from "react-slick"
import ProductCard from "../Card/ProductCard"
import { useRef } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Car5, Car6, Car7 } from "../../assets/images";

const data = [
    {
        name: "Genesis G70",
        dailyRate: 1999,
        capacity: 5,
        mode: "auto",
        bodyType: "Sedan",
        doors: 4,
        rating: 4.5,
        img_url: Car5
    },
    {
        name: "Volvo S90",
        dailyRate: 4999,
        capacity: 5,
        mode: "auto",
        bodyType: "Sedan",
        doors: 4,
        rating: 4.5,
        img_url: Car6
    },
    {
        name: "2025 Land Cruiser",
        dailyRate: 7999,
        capacity: 5,
        mode: "auto",
        bodyType: "Sedan",
        doors: 4,
        rating: 4.5,
        img_url: Car7
    }
]

const MostSearch = () => {
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
                <div className="max-w-[560px] mx-auto text-white">
                    <h2 data-aos="fade-up" className="text-5xl font-semibold text-center">Most Searched Vehicles</h2>
                    <p data-aos="fade-up" data-aos-delay="100" className="text-center mt-2 lg:text-[17px]">Driving your dreams to reality with an exquisite fleet of vesatile vehicles for unforgettable journeys.</p>
                </div>
                <div className="mt-10">
                    <div className="relative" data-aos="zoom-in-up">
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
                        <button className="btn2 border-primary text-primary hover:bg-primary hover:text-white mx-auto">View All Cars</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MostSearch