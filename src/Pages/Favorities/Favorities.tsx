import CarCard from "../../Components/Card/CarCard"

const Favorities = () => {
    return (
        <div className=''>
            <div className="container tsx">
                <div className="">
                    <div className="py-4 px-6 bg-black rounded-t-xl flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-semibold text-white">Favorites</h1>
                            <p className="text-white/80">
                                Manage your favorite cars and view details of your saved listings.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-100 rounded-b-xl">
                        <div className="px-6 py-5">
                            <div className="grid grid-cols-3">
                                <CarCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favorities