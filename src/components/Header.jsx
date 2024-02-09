import { Link } from "react-router-dom";
import logo from "../assets/full_logo.webp";
import PropTypes from "prop-types";

const Header = ({ identifier, setForm }) => {
    const handlerForm = () => {
        window.scrollTo(0, 0);
        setForm(true);
    };

    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src={logo} alt="logo"></img>
                <h2>{identifier}</h2>
            </Link>

            {identifier === "Posgrados" ? (
                <button className="btn btn_header" onClick={() => handlerForm()}>
                    Inscríbete aquí
                </button>
            ) : (
                false
            )}
        </header>
    );
};

Header.propTypes = {
    identifier: PropTypes.string.isRequired,
    setForm: PropTypes.func,
};

export default Header;
