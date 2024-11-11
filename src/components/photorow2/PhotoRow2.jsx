import './PhotoRow2.css';
import rowImg1 from './img/photorow2_01.jpg';
import rowImg2 from './img/photorow2_02.jpg';
import rowImg3 from './img/photorow2_03.jpg';
import rowImg4 from './img/photorow2_04.jpg';
import rowImg5 from './img/photorow2_05.jpg';
import rowImg6 from './img/photorow2_06.jpg';

function PhotoRow1() {
    return(
        <div>
            <div className="photo_row-2">
                <img className='photo_row-2_img' src={rowImg1} alt="" />
                <img className='photo_row-2_img' src={rowImg2} alt="" />
                <img className='photo_row-2_img' src={rowImg3} alt="" />
                <img className='photo_row-2_img' src={rowImg4} alt="" />
                <img className='photo_row-2_img' src={rowImg5} alt="" />
                <img className='photo_row-2_img' src={rowImg6} alt="" />
            </div>
        </div>
    );
}

export default PhotoRow1;