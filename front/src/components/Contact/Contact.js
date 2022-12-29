import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
function Contact() {

    return (
        <div className='Contact' id="contact">
            <h2 id="title3">Contact</h2>
            <span className='line'></span>
            <div className='icons' style={{color: 'black'}}>
            <FontAwesomeIcon icon={faInstagram}/>{" "}
            <FontAwesomeIcon icon={faEnvelope}/>{" "}
            <FontAwesomeIcon icon={faTwitter}/>{" "}
            <FontAwesomeIcon icon={faFacebook}/>{" "}
            </div>
        </div>
    )

    // <h2 id= "title3"> Rent Material for diving </h2>
    //     Select a location:
    //     <select>
    //         <option default null>Location</option>
    //         <option>Bilbao</option>
    //         <option>Getxo</option>
    //         <option>Sopela</option>
    //         <option>Santurtzi</option>

    //     </select>
}

export default Contact;