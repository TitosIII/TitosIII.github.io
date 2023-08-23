import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

const ScrollNav = () => {
    return (
        <nav className="ScrollNav">
            <ul className="ScrollNav-nav">
                <li className="ScrollNav-item">
                    <a href="/" className="ScrollLink ScrollFace">
                        <FontAwesomeIcon icon={faFacebook}  size='2xl' />
                    </a>
                </li>
                <li className="ScrollNav-item">
                    <a href="/" className="ScrollLink ScrollInsta">
                        <FontAwesomeIcon icon={faInstagram} size='2xl'/>
                    </a>
                </li>
                <li className="ScrollNav-item">
                    <a href="/" className="ScrollLink ScrollLinke">
                        <FontAwesomeIcon icon={faLinkedin}  size='2xl'/>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default ScrollNav;
