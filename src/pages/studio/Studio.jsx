import './Studio.css';
import StudioMasonryImageList from '../../components/studiomasonry/StudioMasonry';

function Studio() {
    return(
        <div className='container'>
            <h2 className='page_title'>Studio</h2>
            <StudioMasonryImageList/>
        </div>
    );
}

export default Studio;