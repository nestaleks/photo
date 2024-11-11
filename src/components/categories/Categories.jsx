import React from 'react';
import { NavLink } from 'react-router-dom';
import './Categories.css';
import streetImage from './img/categories_street.jpeg';
import natureImage from './img/categories_nature.jpeg';
import studioImage from './img/categories_studio.jpeg';
import milkbathImage from './img/categories_milkbath.jpeg';
import restaurantsImage from './img/categories_restaurants.jpeg';

function Categories() {
    return(
        <div className='container'>
            <section className="categories">
                <div className="categories__container">
                    <div className="categories__image">
                        <img src={streetImage} alt="About Us" />
                    </div>
                    <div className="categories__content-left">
                        <h2>Street Style</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dignissimos beatae, deserunt doloremque sed nobis cupiditate nostrum sequi architecto, aut error animi aspernatur hic, consectetur molestiae officiis? Error, sapiente repellendus?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti enim sequi maiores veniam vel obcaecati, quasi perspiciatis quas, deserunt necessitatibus iste suscipit blanditiis repellat odio molestias. Saepe maiores maxime modi.</p>
                        <NavLink className="categories__link" to="/streetstyle">See More</NavLink>
                    </div>
                </div>
                <div className="categories__container">
                    <div className="categories__content-right">
                        <h2>Nature</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dignissimos beatae, deserunt doloremque sed nobis cupiditate nostrum sequi architecto, aut error animi aspernatur hic, consectetur molestiae officiis? Error, sapiente repellendus?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti enim sequi maiores veniam vel obcaecati, quasi perspiciatis quas, deserunt necessitatibus iste suscipit blanditiis repellat odio molestias. Saepe maiores maxime modi.</p>
                        <NavLink className="categories__link" to="/nature">See More</NavLink>
                    </div>
                    <div className="categories__image">
                        <img src={natureImage} alt="About Us" />
                    </div>
                </div>
                <div className="categories__container">
                    <div className="categories__image">
                        <img src={milkbathImage} alt="About Us" />
                    </div>
                    <div className="categories__content-left">
                        <h2>Milkbath</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dignissimos beatae, deserunt doloremque sed nobis cupiditate nostrum sequi architecto, aut error animi aspernatur hic, consectetur molestiae officiis? Error, sapiente repellendus?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti enim sequi maiores veniam vel obcaecati, quasi perspiciatis quas, deserunt necessitatibus iste suscipit blanditiis repellat odio molestias. Saepe maiores maxime modi.</p>
                        <NavLink className="categories__link" to="/milkbath">See More</NavLink>
                    </div>
                </div>
                <div className="categories__container">
                    <div className="categories__content-right">
                        <h2>Studio photos</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dignissimos beatae, deserunt doloremque sed nobis cupiditate nostrum sequi architecto, aut error animi aspernatur hic, consectetur molestiae officiis? Error, sapiente repellendus?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti enim sequi maiores veniam vel obcaecati, quasi perspiciatis quas, deserunt necessitatibus iste suscipit blanditiis repellat odio molestias. Saepe maiores maxime modi.</p>
                        <NavLink className="categories__link" to="/studio">See More</NavLink>
                    </div>
                    <div className="categories__image">
                        <img src={studioImage} alt="About Us" />
                    </div>
                </div>
                <div className="categories__container">
                    <div className="categories__image">
                        <img src={restaurantsImage} alt="About Us" />
                    </div>
                    <div className="categories__content-left">
                        <h2>Restaurants</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dignissimos beatae, deserunt doloremque sed nobis cupiditate nostrum sequi architecto, aut error animi aspernatur hic, consectetur molestiae officiis? Error, sapiente repellendus?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti enim sequi maiores veniam vel obcaecati, quasi perspiciatis quas, deserunt necessitatibus iste suscipit blanditiis repellat odio molestias. Saepe maiores maxime modi.</p>
                        <NavLink className="categories__link" to="/restaurants">See More</NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Categories;