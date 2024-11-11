import './Nature.css';
import NatureMasonryImageList from '../../components/naturemasonry/NatureMasonry';

function Nature() {
    return(
        <div className='container'>
            <h2 className='page_title'>Nature</h2>
            <NatureMasonryImageList/>
        </div>
    );
}

export default Nature;