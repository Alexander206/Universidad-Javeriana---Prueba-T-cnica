import Header from "../../components/Header";

import background from "../../assets/images/home/bg.jpg";
import people from "../../assets/images/home/people.png";

import Form from "./components/Form.jsx";

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
                            En la inscripción al proceso de admisión para los posgrados con inscripciones abierta. Válido durante el
                            evento.*
                            <a href="">*Aplican términos y condiciones.</a>
                        </p>
                    </article>

                    <article className="card_container">
                        <article className="card">
                            <h4>
                                14
                                <span>OCT</span>
                            </h4>
                        </article>

                        <p>
                            Paga tu matrícula antes del 15 de octubre con precio del 2021.
                            <a href="">*Aplican términos y condiciones.</a>
                        </p>
                    </article>
                </section>
            </main>
        </>
    );
};

export default Home;
