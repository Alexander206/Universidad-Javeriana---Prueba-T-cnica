import PropTypes from "prop-types";

const SectionGraduates = ({ background, title, caption, imgSrc, text, mailtoText, mail }) => {
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
                    {mailtoText} <a href={`mailto:${mail}`}>{mail}</a>
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
    mailtoText: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
};

export default SectionGraduates;
