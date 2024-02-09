import logo from "../assets/icons/logo_footer3.svg";
import { dataFooter3 } from "../_data/dataFooter.js";

const Footer3 = () => {
    const aboutElements = dataFooter3.about.map((item, index) => {
        return (
            <li key={index}>
                <a href="#">{item}</a>
            </li>
        );
    });

    const infoElements = dataFooter3.info.map((list, i) => {
        const lisElement = list.map((item, j) => {
            return <li key={j}>{item}</li>;
        });

        return <ul key={i}>{lisElement}</ul>;
    });

    const socialElements = dataFooter3.social.map((item, index) => {
        return (
            <li key={index}>
                <a href="#">
                    <img src={item} alt="imagen contacto footer"></img>
                </a>
            </li>
        );
    });

    return (
        <footer className="footer footer3">
            <figure className="logo">
                <img src={logo} alt="footer imgen"></img>
            </figure>

            <article className="about">
                <ul>{aboutElements}</ul>
            </article>

            <article className="info">{infoElements}</article>

            <article className="social">
                <h4>Síguenos en redes sociales</h4>

                <ul>{socialElements}</ul>
            </article>
        </footer>
    );
};

export default Footer3;
