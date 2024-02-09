import { Link } from "react-router-dom";
import logo from "../assets/full_logo.webp";
import PropTypes from "prop-types";

const Header = ({ identifier, setForm, formRef }) => {
    const handlerForm = () => {
        console.log(formRef);

        window.scrollTo({
            top: formRef.current.offsetTop,
            behavior: "smooth",
        });

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
    formRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) })]),
};

export default Header;
