import PropTypes from "prop-types";

const SectionCampus = ({ arrow, text, urlVideo }) => {
    return (
        <section className="section_campus">
            <article className="text">
                <img src={arrow} alt="flechas"></img>

                <h4 dangerouslySetInnerHTML={{ __html: text }}></h4>
            </article>

            <article className="video">
                <img src={urlVideo} alt="" />
            </article>
        </section>
    );
};

SectionCampus.propTypes = {
    arrow: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    urlVideo: PropTypes.string.isRequired,
};

export default SectionCampus;
