import logo from "../assets/full_logo.png";

const Header = () => {
    return (
        <header className="header">
            <figure className="logo">
                <img src={logo} alt="logo"></img>
                <h2>Posgrados</h2>
            </figure>

            <button className="btn btn_header">Inscríbete aquí</button>
        </header>
    );
};

Header.propTypes = {};

export default Header;
