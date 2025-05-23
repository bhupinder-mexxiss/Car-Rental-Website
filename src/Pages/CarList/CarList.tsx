import { useLocation } from "react-router"
import { Car10, Car12, Car5, Car6, Car7, Car8, Car9 } from "../../assets/images"
import CarCard from "../../components/Card/CarCard"
import Filters from "./Filters"

const CarList = () => {
    const location = useLocation()
    const cars = [
        Car5, Car6, Car7, Car8, Car9, Car10, Car12
    ]
    console.log(location.pathname);
    
    return (
        <div>
            <div className="container mx-auto">
                <div className="text-color1 text-center py-14">
                    <h2 className="text-4xl font-semibold">Select a Vehicle Group</h2>
                    <p className="mt-2">Find your perfect vehicle. Narrow it down by price, mpg or whatever you like.</p>
                </div>
                <div>
                    <div className="flex gap-4">
                        <div className="w-1/5">
                            <aside>
                                <h4 className="text-xl font-semibold">Filters</h4>
                                <div className="mt-5 flex flex-col gap-4">
                                    <Filters />
                                </div>
                            </aside>
                        </div>
                        <div className="w-4/5">
                            <div className="pl-6">
                                <h4 className="text-xl font-semibold">45 Matches</h4>
                                <div>
                                    <div className="grid grid-cols-3 gap-5 mt-5">
                                        {cars.map((car, index) => (
                                            <CarCard key={index} car={car} forSale={location.pathname === "/buy-car" ? true : false} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarList