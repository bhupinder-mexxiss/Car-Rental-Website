import { ArrowForward } from "@mui/icons-material"
import { bodyType1, bodyType2, bodyType3, bodyType4, bodyType5, bodyType6, brand1, brand2, brand3, brand4, brand5, brand6 } from "../../assets/Icons"
import { useState } from "react"

const brands = [
    { name: 'Ford', image: brand1 },
    { name: 'Tesla', image: brand2 },
    { name: 'Toyota', image: brand3 },
    { name: 'Volkswagen', image: brand4 },
    { name: 'Honda', image: brand5 },
    { name: 'Nissan', image: brand6 },
    { name: 'Ford', image: brand1 },
    { name: 'Tesla', image: brand2 },
    { name: 'Toyota', image: brand3 },
    { name: 'Volkswagen', image: brand4 },
    { name: 'Honda', image: brand5 },
    { name: 'Nissan', image: brand6 },
]
const bodyTypes = [
    { name: 'SUV', image: bodyType1 },
    { name: 'Crossover', image: bodyType2 },
    { name: 'Family MBP', image: bodyType3 },
    { name: 'Sport Coupe', image: bodyType4 },
    { name: 'Compact', image: bodyType5 },
    { name: 'Coup', image: bodyType6 },
    { name: 'SUV', image: bodyType1 },
    { name: 'Crossover', image: bodyType2 },
    { name: 'Family MBP', image: bodyType3 },
    { name: 'Sport Coupe', image: bodyType4 },
    { name: 'Compact', image: bodyType5 },
    { name: 'Coup', image: bodyType6 },
]
const BrandsCate = () => {
    const [isActive, setIsActive] = useState("brands")
    const activeList = isActive === "brands" ? brands : bodyTypes
    return (
        <div className="my-20">
            <div className="container">
                <div className="text-color1">
                    <ul className="flex items-center justify-center gap-8">
                        <li data-aos="fade-up" data-aos-delay="300" className={`text-2xl font-semibold cursor-pointer pb-1 border-b-2 ${isActive === "brands" ? "text-primary border-primary" : "text-color1 border-transparent"}`} onClick={() => setIsActive("brands")}>Rent by Brands</li>
                        <li data-aos="fade-up" data-aos-delay="500" className={`text-2xl font-semibold cursor-pointer pb-1 border-b-2 ${isActive === "bodyType" ? "text-primary border-primary" : "text-color1 border-transparent"}`} onClick={() => setIsActive("bodyType")}>Rent by Body Type</li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 mt-10">
                    {activeList.map((item, index) => (
                        <div className="card1" key={index} data-aos="zoom-in" data-aos-delay={index * 100 + 0}>
                            <img src={item.image} alt="" className="h-9" />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-6">
                    <button className="btn1 mx-auto">View All</button>
                </div>
            </div>
        </div >
    )
}

export default BrandsCate