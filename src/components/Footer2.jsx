import instagram from "../assets/icons/instagram_footer2.svg";
import facebook from "../assets/icons/facebook_footer2.svg";
import whatsapp from "../assets/icons/whatsapp_footer2.svg";
import location from "../assets/icons/location.svg";
import logo from "../assets/icons/logo_footer2.svg";

const Footer2 = () => {
    const dataFooter = [
        {
            tipo: "Instagram",
            url: "@unijaveriana",
            icon: instagram,
        },
        {
            tipo: "Facebook",
            url: "Facebook.com/unijaveriana",
            icon: facebook,
        },
        {
            tipo: "Whatsapp",
            url: "+57 320 456 8820",
            icon: whatsapp,
        },
    ];

    const itemFooter = dataFooter.map((item, index) => {
        return (
            <li key={index}>
                <img src={item.icon} />
                <span>
                    {item.tipo}
                    <a href="#">{item.url}</a>
                </span>
            </li>
        );
    });

    return (
        <footer className="footer_2">
            <section>
                <div />
                <img src={logo} alt="" />
                <div />
            </section>

            <section>
                <article>
                    <img src={location} alt="" />
                    <p>
                        Dirección de correspondencia
                        <span>Cra 7 No. 40-60</span>
                    </p>
                </article>

                <ul>{itemFooter}</ul>
            </section>
        </footer>
    );
};

export default Footer2;
