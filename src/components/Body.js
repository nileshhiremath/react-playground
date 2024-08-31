import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        // Optional chaining concept
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    console.log('---- Header component rendered ----');

    // Conditional rendering - based on condition we will render component
    return (filteredRestaurantList.length == 0) ? <Shimmer /> : (
        <div className='body'>
            <div className='filter'>
                <input type='text' className='search-box' value={searchText} 
                    onChange={(event) => {
                        setSearchText(event.target.value);
                    }}

                    onBlur={() => {
                        // if (searchText.length == 0)
                        //     setFilteredRestaurantList(restaurantList);
                    }}
                />
                <div className='searchBtn' onClick={() => {
                    const filteredRestaurant = restaurantList.filter((f) => f.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurantList(filteredRestaurant);
                    console.log('--SEARCH VALUE--', searchText);
                }}>Search</div>
            
                <div className='filter-btn' onClick={() => {
                    console.log('Filter button clicked!');
                    const filteredList = restaurantList.filter((res) => res.info.avgRating > 4.5);
                    setFilteredRestaurantList(filteredList)
                }}
                >Top rated ones</div>
            </div>
            <div className='restaurant-container'>
                {filteredRestaurantList.map((restaurnat) => <RestaurantCard resData={restaurnat.info} key={restaurnat.info.id}/>)}
            </div>
        </div>
    )
}

export default Body;