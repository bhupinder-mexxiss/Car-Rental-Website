import { Link } from "react-router";
import { FavoriteOutlined, FavoriteBorderOutlined, LocalGasStationOutlined, StarRounded } from "@mui/icons-material";
import { door, gear, pass } from "../../assets/Icons";
import useWishlist from "../../hooks/useWishlist";
import { ICar } from "../../Types/car";

const FavoriteCarCard = ({ car }: { car: ICar }) => {
    const { isWishlisted, toggleWishlist } = useWishlist(true, car._id);
    const forSale = car?.listingType === "sell";

    return (
        <div className="bg-white shadow-xs hover:shadow-md duration-300 border border-black/5 rounded-2xl p-3 relative">
            <div className="h-[200px] relative">
                <button
                    className="w-8 h-8 flex items-center justify-center border border-border1 absolute top-2 right-2 bg-white rounded-full text-primary cursor-pointer"
                    onClick={toggleWishlist}
                >
                    {isWishlisted ? <FavoriteOutlined className="!text-lg" /> : <FavoriteBorderOutlined className="!text-lg" />}
                </button>
                <img
                    src={car?.thumbnail}
                    alt={car?.title}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
            <div className="mt-3">
                <div className="flex items-center justify-between">
                    <h4 className="text-color1 font-semibold text-lg">{car?.title}</h4>
                    <span className="font-semibold text-sm flex items-center">
                        <StarRounded className="!text-xl text-primary" /> 4.5
                    </span>
                </div>
                <div className="flex items-center justify-between text-color2 text-sm capitalize">
                    {car?.carType}
                </div>
                <div className="flex items-center justify-between mt-2 pb-2 text-color2 text-sm gap-2">
                    <span className="flex items-center gap-1"><img src={pass} className="w-4" />{car?.seats}</span>
                    <span className="flex items-center gap-1"><img src={gear} className="w-4" />{car?.transmission}</span>
                    <span className="flex items-center gap-1"><img src={door} className="w-4" />{car?.doors}</span>
                    <span className="flex items-center gap-1"><LocalGasStationOutlined className="!text-xl" />{car?.fuelType}</span>
                </div>
            </div>
            <div className="pt-3 mt-2 border-t border-border flex justify-between items-center">
                <span className="text-xl font-bold text-gray-800">
                    ₹{!forSale ? car?.rentPrice?.price : car?.price}
                    {!forSale && <span className="text-sm font-normal text-gray-600">/day</span>}
                </span>
                <Link to={`/car/${car?._id}`} className="btn3 text-sm py-2 px-4">
                    {forSale ? "Buy Now" : "Rent Now"}
                </Link>
            </div>
        </div>
    );
};

export default FavoriteCarCard;
