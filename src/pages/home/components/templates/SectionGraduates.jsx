import PropTypes from "prop-types";

const SectionGraduates = ({ background, title, caption, imgSrc, text }) => {
    return (
        <>
            <section className="section_graduates" style={{ backgroundImage: `url(${background})` }}>
                <article className="header_graduates">
                    <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: caption }}></p>
                </article>

                <img src={imgSrc}></img>

                <p>{text}</p>
            </section>

            <section className="mailto">
                <p>
                    Si quieres información adicional de este evento podrás solicitarla a través del correo electrónico{" "}
                    <a href="mailto:expojaverianapos@javeriana.edu.co">expojaverianapos@javeriana.edu.co</a>
                </p>
            </section>
        </>
    );
};

SectionGraduates.propTypes = {
    background: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default SectionGraduates;
