import Header from "../../components/Header";

import Form from "./components/Form.jsx";

import background from "../../assets/images/home/bg.jpg";
import people from "../../assets/images/home/people.png";
import characteristics1 from "../../assets/images/home/characteristics1.svg";
import characteristics2 from "../../assets/images/home/characteristics2.svg";
import characteristics3 from "../../assets/images/home/characteristics3.svg";
import characteristics4 from "../../assets/images/home/characteristics4.svg";
import characteristics5 from "../../assets/images/home/characteristics5.svg";
import characteristics6 from "../../assets/images/home/characteristics6.svg";
import guest1 from "../../assets/images/home/guest1.jpg";
import guest2 from "../../assets/images/home/guest2.jpg";
import guest3 from "../../assets/images/home/guest3.jpg";
import arrow from "../../assets/images/home/arrow.svg";

const Home = () => {
    return (
        <>
            <Header />

            <main className="inscription">
                <section className="section_form">
                    <article className="section_form-data background" style={{ backgroundImage: `url(${background})` }}>
                        <div className="container">
                            <article className="content"></article>
                            <article className="container_form"></article>
                        </div>
                    </article>

                    <article className="section_form-data">
                        <div className="container">
                            <article className="content">
                                <div className="title_container">
                                    <h1 className="title">
                                        <span className="title_header">EXPO</span>
                                        <span className="title_middle">JAVERIANA</span>
                                        <span className="title_footer">POSGRADOS</span>
                                    </h1>

                                    <h3 className="caption">VIRTUAL</h3>
                                </div>

                                <article className="date_container">
                                    <h4 className="date_small">Fecha:</h4>
                                    <h3 className="date_big">
                                        1<span className="date_big-font">y</span>2
                                    </h3>
                                    <h3 className="date_middle">de octubre</h3>
                                    <h4 className="date_small">
                                        Hora: 2:00p.m. <br /> a 6:00 p.m.
                                    </h4>
                                </article>

                                <figure className="image_container">
                                    <img src={people} alt="Persona sonriendo"></img>
                                </figure>
                            </article>

                            <article className="container_form">
                                <div className="contain">
                                    <h3 className="title">Confirma tu asistencia aquí</h3>

                                    <Form />
                                </div>
                            </article>
                        </div>
                    </article>
                </section>

                <section className="section_discount">
                    <h2 className="title">
                        Esperamos disfruten de esta <span>experiencia virtual</span> que contará con:
                    </h2>

                    <article className="card_container">
                        <article className="card">
                            <h4>
                                50
                                <span>% dto</span>
                            </h4>
                        </article>

                        <p>
                            En la <span>inscripción al proceso de admisión</span> para los posgrados con inscripciones abierta. Válido
                            durante el evento.*
                            <br />
                            <a href="">*Aplican términos y condiciones.</a>
                        </p>
                    </article>

                    <article className="card_container">
                        <article className="card">
                            <h4>
                                15
                                <span>OCT</span>
                            </h4>
                        </article>

                        <p>
                            Paga tu matrícula antes del 15 de octubre con precio del 2021.
                            <a href="">*Aplican términos y condiciones.</a>
                        </p>
                    </article>
                </section>

                <section className="section_characteristics">
                    <article className="target">
                        <img src={characteristics1} alt="logo de caracteristicas"></img>
                        <p>
                            <span>7 Centros de Experiencia</span> por áreas de conocimiento.
                        </p>
                    </article>

                    <article className="target">
                        <img src={characteristics2} alt="logo de caracteristicas"></img>
                        <p>
                            Charlas de <span>financiación y becas.</span>
                        </p>
                    </article>

                    <article className="target">
                        <img src={characteristics3} alt="logo de caracteristicas"></img>
                        <p>
                            Stand de <span>inscripciones.</span>
                        </p>
                    </article>

                    <article className="target">
                        <img src={characteristics4} alt="logo de caracteristicas"></img>
                        <p>
                            Actividades de buen vivir y <span>bienestar.</span>
                        </p>
                    </article>

                    <article className="target">
                        <img src={characteristics5} alt="logo de caracteristicas"></img>
                        <p>
                            Charlas de <span>áreas de conocimiento.</span>
                        </p>
                    </article>

                    <article className="target">
                        <img src={characteristics6} alt="logo de caracteristicas"></img>
                        <p>
                            <span>Recorridos 360°</span> por el campus y más.
                        </p>
                    </article>
                </section>

                <section className="section_guests">
                    <h2 className="title">INVITADOS ESPECIALES</h2>

                    <article className="container_guest">
                        <article className="guest">
                            <figure>
                                <img src={guest1} alt="foto del invitado"></img>
                            </figure>
                            <h4>Invitado 1</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer</p>
                        </article>

                        <article className="guest">
                            <figure>
                                <img src={guest2} alt="foto del invitado"></img>
                            </figure>
                            <h4>Invitado 1</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer</p>
                        </article>

                        <article className="guest">
                            <figure>
                                <img src={guest3} alt="foto del invitado"></img>
                            </figure>
                            <h4>Invitado 1</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer</p>
                        </article>
                    </article>
                </section>

                <section className="section_campus">
                    <article className="text">
                        <img src={arrow} alt="flechas"></img>

                        <h4>
                            Conoce el <span>Campus de nuestra Universidad</span>
                        </h4>
                    </article>

                    <article className="video">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/v0v7E77mUTA?si=-8dWAcHytuzxy8nz"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </article>
                </section>
            </main>
        </>
    );
};

export default Home;
