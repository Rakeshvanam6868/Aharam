import { useEffect, useState } from "react";
import Cards,{withPromotedLabel} from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Hero = () => {
    const [resData, setResData] = useState([]);
    const [filterResData, setFilterResData] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.9442309&lng=79.6023125&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            const data = await response.json();
            const restaurants = data?.data?.cards?.flatMap(card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(restaurant => restaurant.info) ?? []);
            // console.log(restaurants);
            setResData(restaurants);
            setFilterResData(restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSearch = () => {
        const filterSearch = resData.filter((res) => 
            res.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilterResData(filterSearch);
    };

    const handleTopRatedFilter = () => {
        const filterData = resData.filter((res) => res.avgRating >= 4);
        setFilterResData(filterData);
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Hey Check your Internet Connection</h1>

    const RestuarantPromotedLabel = withPromotedLabel(Cards);

    return resData.length === 0 ? <Shimmer /> : (
        <div className="flex flex-col items-center">
            <div className="m-5 flex">
                <input
                    type="text"
                    value={searchInput}
                    placeholder="Search restaurants..."
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="w-96 h-10 rounded-full rounded-r-none p-4 border-none text-lg text-black bg-slate-300"
                />
                <button className="w-20 bg-slate-500 rounded-full rounded-l text-white" onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div className="">
                <button
                    className="bg-orange-400 p-2 pl-5 pr-5 rounded-md text-white"
                    onClick={handleTopRatedFilter}
                >
                    Top Rated
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-5 w-full sm:w-8/12">
              {filterResData.map((restaurant) => (
             <Link
               key={restaurant.id}
                 to={`/restaurants/${restaurant.id}`}
              >
              {restaurant.isOpen ? (
               <RestuarantPromotedLabel resData={restaurant} />
               ) : (
               <Cards resData={restaurant} />
              )}
               </Link>
               ))}
             </div>

        </div>
    );
};

export default Hero;
