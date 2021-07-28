import { Link } from "react-router-dom"
import GoogleAuth from './GoogleAuth'

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <GoogleAuth/>
        </div>
    );
}

export default Header;