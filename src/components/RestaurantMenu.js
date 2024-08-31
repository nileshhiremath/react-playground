import { useEffect, useState } from "react";
import Shimmer from './Shimmer'

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data  = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=29063&catalog_qa=undefined&query=Chinese&submitAction=ENTER');
        const json = await data.json();
        console.log('Menu Data', json);
        setResInfo(json?.data);
    }

    if(resInfo == null) return (<Shimmer />)

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info; 
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(', ')} - {costForTwoMessage}</h2>
            {itemCards.map((res) => <li key={res.card.info.id}>{res.card.info.name} - {res.card.info.price}</li>)}
        </div>
    )
}

export default RestaurantMenu;