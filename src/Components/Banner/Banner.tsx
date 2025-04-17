import Slider from 'react-slick'
import { Car1, Car2, Car3, Car4 } from '../../assets/images'
import Filter from './Filter';

const Banner = () => {
    const settings = {
        dots: false,
        fade: true,
        arrows: false,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };
    return (
        <div className='pt-28 pb-20 relative overflow-hidden'>
            <div className='absolute h-full right-0 top-0 w-1/2'>
                <div className='clipPath absolute top-0 right-0 w-full h-full bg-primary'></div>
                <div className='relative top-1/2 -translate-y-1/2'>
                    <Slider {...settings}>
                        <div>
                            <img src={Car1} alt="" className=''/>
                        </div>
                        <div>
                            <img src={Car2} alt="" className=''/>
                        </div>
                        <div>
                            <img src={Car3} alt="" className=''/>
                        </div>
                        <div>
                            <img src={Car4} alt="" className=''/>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="container">
                <div className='relative'>
                    <div className='w-1/2'>
                        <h1 className='text-7xl font-semibold' data-aos="fade-right">Unlock Your<br /> <span className='text-primary'>Adventure,</span> Drive<br /> Your Dreams</h1>
                    </div>
                    <div className='mt-20' data-aos="fade-up">
                        <Filter/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner