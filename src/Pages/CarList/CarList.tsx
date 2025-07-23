import CarCard from "../../Components/Card/CarCard";
import Filters from "./Filters";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { useFilterContext } from "../../Context/FilterContext";
import { useLocation } from "react-router";
import Filter from '../../Components/Banner/Filter';

const CarList = () => {
  const { cars, meta } = useFilterContext();
  const location = useLocation();

  return (
    <div className="container mx-auto">
      {/* Add Filter component at the top */}

      <div className="text-color1 text-center pt-10">
        <h2 className="text-4xl font-semibold">Select a Vehicle Group</h2>
        <p className="mt-2">
          Find your perfect vehicle. Narrow it down by price, mpg or whatever you like.
        </p>
        <div className="mt-5 w-1/2 mx-auto">
          <SearchBar />
        </div>
      </div>
      <div className="pb-10 pt-4">
        <Filter />
      </div>

      <div className="flex gap-4">
        <div className="w-1/5">
          <Filters />
        </div>
        <div className="w-4/5 pl-4">
          <h4 className="text-xl font-semibold">{meta.total} Matches</h4>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
            {cars.map((car, index) => (
              <CarCard
                key={index}
                car={car}
                forSale={location.pathname === "/buy-car"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
