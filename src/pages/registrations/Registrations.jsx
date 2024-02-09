import Footer2 from "../../components/Footer2";

import background from "../../assets/images/registrations/bg.jpg";
import logoEvent from "../../assets/images/registrations/event-logo.svg";
import logoUniversity from "../../assets/images/registrations/university-logo.svg";
import figure from "../../assets/images/registrations/figure.svg";
import calendar from "../../assets/images/registrations/calendar.svg";

const Registrations = () => {
    return (
        <>
            <main className="registrations">
                <section className="successful">
                    <article className="successful_background" style={{ backgroundImage: `url(${background})` }}></article>

                    <article className="container_successful">
                        <article className="images">
                            <figure className="logo-event">
                                <img src={logoEvent} alt=""></img>
                            </figure>

                            <figure className="logo-university">
                                <img src={logoUniversity} alt=""></img>
                            </figure>
                        </article>

                        <article className="content">
                            <article className="text">
                                <h2>
                                    ¡Tu inscripción fué <span>enviada con éxito!</span>
                                </h2>

                                <p>
                                    Gracias por ponerte en contacto con nosotros, pronto nos comunicaremos. Para conocer más de la Javeriana
                                    y todos nuestros programas ingresa a <a href="www.javeriana.edu.co.">www.javeriana.edu.co.</a>
                                </p>
                            </article>

                            <figure className="figure">
                                <img src={figure} alt=""></img>
                            </figure>
                        </article>
                    </article>
                </section>

                <section className="advisory">
                    <article>
                        <h3>¿Quieres asesoría personalizada?</h3>

                        <p>
                            Si aún tienes dudas y no sabes qué estudiar, tenemos un programa de asesoría personalizada y así impactes el
                            ahora con La Javeriana. Haz click en el botón y agenda tu cita.
                        </p>
                    </article>

                    <button>
                        <span>Agenda tu cita</span> <img src={calendar} alt=""></img>
                    </button>
                </section>
            </main>
            <Footer2 />
        </>
    );
};

Registrations.propTypes = {};

export default Registrations;
