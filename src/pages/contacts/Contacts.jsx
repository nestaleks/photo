import './Contacts.css';
import topImg from './img/top_img.jpeg';
import bottomImg from './img/bottom_img.jpeg';
import instagramIcon from './img/instagram.svg';
import mailIcon from './img/mail.svg';


function Contacts() {
    return(
        <div className='contacts_page'>
            <div className="contacts_top">
                <img className="contacts_top-img" src={topImg} alt="" />
                <a className="contacts_message" href="https://www.instagram.com/anyuta.mishalova" target="_blank" rel="noopener noreferrer">
                    <p className="message_btn">Leave message</p>
                </a>
            </div>
            <div className="contacts_content">
                <p className="contacts_content-text">My name is Anyuta and I am a photographer from Ukraine. Currently I am working in Berlin and I will be glad to offer you a portrait shoot or make content for your brand (interior and product photography).</p>
                <p className="contacts_content-text">For questions and bookings:</p>
                <div className="contacts_links">
                    <div className="contacts_link">
                        <img className='contacts_social' src={mailIcon} alt="" />
                        <a href="toffeedress@gmail.com">toffeedress@gmail.com</a>
                    </div>
                    <div className="contacts_link">
                        <img className='contacts_social' src={instagramIcon} alt="" />
                        <a href="https://www.instagram.com/anyuta.mishalova" target="_blank" rel="noopener noreferrer">anyuta.mishalova</a>   
                    </div>
                </div>
                <div className="contacts_price-guide">
                    <p>Price Guide</p>
                </div>
                <div className="contacts_price-items">
                    <div className="contacts_price-item">
                        <p className="contacts_price-title">Standard</p>
                        <p className="contacts_price-text">70+ photos</p>
                        <p className="contacts_price-time">1 hour shoot</p>
                        <p className="contacts_price-price">150€</p>
                        <a className='contacts_price-link1' href="https://www.instagram.com/anyuta.mishalova" target="_blank" rel="noopener noreferrer">Contact Me</a>
                        <p className="contacts_price-subtitle">Photos in my editing style are ready in 3 days (you receive a link for downloading)</p>
                    </div>
                    <div className="contacts_price-item">
                        <p className="contacts_price-title">Plus</p>
                        <p className="contacts_price-text">100+ photos</p>
                        <p className="contacts_price-time">1.5 hour shoot</p>
                        <p className="contacts_price-price">200€</p>
                        <a className='contacts_price-link2' href="https://www.instagram.com/anyuta.mishalova" target="_blank" rel="noopener noreferrer">Contact Me</a>
                        <p className="contacts_price-subtitle">Photos in my editing style are ready in 3 days (you receive a link for downloading)</p>
                    </div>
                </div>
            </div>
            <div className="contacts_bottom">
                <img className="contacts_bottom-img" src={bottomImg} alt="" />
            </div>
        </div>
    );
}

export default Contacts;