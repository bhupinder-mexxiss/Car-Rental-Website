import CarCard from "../../Components/Card/CarCard"
import Filters from "./Filters"

const CarList = () => {
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
                                        {Array(9).fill(0).map((_, index) => (
                                            <CarCard key={index} />
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