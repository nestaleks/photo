import './PhotoRow1.css';
import rowImg1 from './img/photorow1_01.jpg';
import rowImg2 from './img/photorow1_02.jpg';
import rowImg3 from './img/photorow1_03.jpg';
import rowImg4 from './img/photorow1_04.jpg';

function PhotoRow1() {
    return(
        <div>
            <div className="photo_row-1">
                <img className='photo_row-1_img' src={rowImg1} alt="" />
                <img className='photo_row-1_img' src={rowImg2} alt="" />
                <img className='photo_row-1_img' src={rowImg3} alt="" />
                <img className='photo_row-1_img' src={rowImg4} alt="" />
            </div>
        </div>
    );
}

export default PhotoRow1;