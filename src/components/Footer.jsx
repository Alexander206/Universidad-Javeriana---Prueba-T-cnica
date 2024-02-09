import { dataFooter } from "../_data/dataFooter";
import logo from "../assets/icons/logoFull.svg";

const Footer = () => {
    const aboutElements = dataFooter.about.map((item, index) => {
        return (
            <li key={index}>
                <img src={item.icon} alt="imagen contacto footer"></img> <span>{item.text}</span>
            </li>
        );
    });

    const socialElements = dataFooter.social.map((item, index) => {
        return (
            <li key={index}>
                <a href="#">
                    <img src={item} alt="imagen contacto footer"></img>
                </a>
            </li>
        );
    });

    return (
        <footer className="footer">
            <figure className="logo">
                <img src={logo} alt="footer imgen"></img>
            </figure>

            <article className="about">
                <h4>Programa Contacto Centro de Atención a Aspirantes</h4>

                <ul>{aboutElements}</ul>
            </article>

            <article className="social">
                <a href="www.javeriana.edu.co">www.javeriana.edu.co</a>

                <ul>{socialElements}</ul>
            </article>
        </footer>
    );
};

Footer.propTypes = {};

export default Footer;
