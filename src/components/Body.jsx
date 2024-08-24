import { useEffect, useState } from "react";
import Cards from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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

    return resData.length === 0 ? <Shimmer /> : (
        <div className="hero">
            <div className="search">
                <input
                    type="text"
                    value={searchInput}
                    placeholder="Search restaurants..."
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button className="search-btn" onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div className="buttons">
                <button
                    className="filter-btn"
                    onClick={handleTopRatedFilter}
                >
                    Top Rated
                </button>
            </div>
            <div className="card-grid">
                {filterResData.map((restaurant) => (
                    <Link
                      key={restaurant.id}  // Ensure correct key
                      to={`/restaurants/${restaurant.id}`}
                    >
                      <Cards resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Hero;
