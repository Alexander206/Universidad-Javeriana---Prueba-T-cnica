import { Link } from "react-router-dom";
import logo from "../assets/full_logo.png";
import PropTypes from "prop-types";

const Header = ({ identifier }) => {
    return (
        <header className="header">
            <a href="/" className="logo">
                <img src={logo} alt="logo"></img>
                <h2>{identifier}</h2>
            </a>

            <Link to="/" className="btn btn_header">
                Inscríbete aquí
            </Link>
        </header>
    );
};

Header.propTypes = {
    identifier: PropTypes.string.isRequired,
};

export default Header;
