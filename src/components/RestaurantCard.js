const RestaurantCard = (props) => {
    const resData = props?.resData;
    let srcImage = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + resData.cloudinaryImageId;
    return (
        <div className='restaurant-card'>
            <div>
                <img className='res-logo' src={srcImage} />
            </div>
            <h3>{resData.name}</h3>
            <h3>{resData.cuisines.join(", ")}</h3>
            <h3>{resData.costForTwo}</h3>
            <h3>{resData.sla.deliveryTime}</h3>
            <h3>{resData.avgRating}</h3>
        </div>
    );
}

export default RestaurantCard;