import { Link } from "react-router-dom"
import GoogleAuth from './GoogleAuth'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
    return (
        <div className = "header">
            <div className = "header__logo-box">
                <Link to="/" className = "header__logo"><FontAwesomeIcon icon={faTwitch} /></Link>
            </div>
            <div className = "header__login">
                <GoogleAuth/>
            </div>
        </div>
    );
}

export default Header;