import { useGetWishlistQuery } from "../../redux/api/user";
import FavoriteCarCard from "../../Components/Card/FavoriteCarCard";
import { ICar } from "../../Types/car";
import Loader from "../../Components/Loader/Loader";

const Favorities = () => {
    const { data: wishlist = [], isLoading } = useGetWishlistQuery({});

    if (isLoading) return <Loader />;

    return (
        <div>
            <div className="py-4 px-4 bg-black rounded-t-xl flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-white">Favorites</h1>
                    <p className="text-white/80">
                        Manage your favorite cars and view details of your saved listings.
                    </p>
                </div>
            </div>
            <div className="bg-gray-100 rounded-b-xl px-4 py-5">
                {wishlist?.length ?
                    <div className="grid grid-cols-3 gap-5">
                        {wishlist.map((car: ICar) => (
                            <FavoriteCarCard key={car._id} car={car} />
                        ))}
                    </div>
                    :
                    <div className="p-8 text-center text-gray-600">
                        <h2 className="text-2xl font-semibold mb-2">No Favorites Yet</h2>
                        <p>Start browsing and add cars to your favorites!</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Favorities;
