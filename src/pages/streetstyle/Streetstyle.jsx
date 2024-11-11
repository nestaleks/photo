import './Streetstyle.css';
import StreetstyleMasonryImageList from '../../components/streetmasonry/StreetMasonry';

function Streetstyle() {
    return(
        <div className='container'>
            <h2 className='page_title'>Street Style</h2>
            <StreetstyleMasonryImageList/>
        </div>
    );
}

export default Streetstyle;