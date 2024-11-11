import './Home.css';
import MainPageSlider from '../../components/mainpageslider/MainPageSlider';
import AboutUs from '../../components/aboutus/AboutUs';
import PhotoRow1 from '../../components/photorow1/PhotoRow1';
import Categories from '../../components/categories/Categories';
import PhotoRow2 from '../../components/photorow2/PhotoRow2';

function Home() {
    return (
        <div>
            <MainPageSlider autoPlayInterval={4000} />
            <AboutUs/>
            <PhotoRow1/>
            <Categories/>
            <PhotoRow2/>
        </div>
    );
}

export default Home;