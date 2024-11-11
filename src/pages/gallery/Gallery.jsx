import './Gallery.css';
import GalleryMasonryImageList from '../../components/gallerymasonry/GalleryMasonry';

function Gallery() {
    return(
        <div className='container'>
            <h2 className='page_title'>Gallery</h2>
            <GalleryMasonryImageList/>
        </div>
    );
}

export default Gallery;