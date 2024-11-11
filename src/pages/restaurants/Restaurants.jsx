import './Restaurants.css';
import RestaurantsMasonryImageList from '../../components/restaurantmasonry/RestaurantsMasonry';

function Restaurants() {
    return(
        <div className='container'>
            <h2 className='page_title'>Restaurants</h2>
            <RestaurantsMasonryImageList/>
        </div>
    );
}

export default Restaurants;