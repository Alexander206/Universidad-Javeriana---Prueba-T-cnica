import PropTypes from "prop-types";

const SectionCharacteristics = ({ dataCharacteristics }) => {
    const cardsElement = dataCharacteristics.map((item, index) => {
        return (
            <article key={index} className="target">
                <img src={item.imgSrc} alt="logo de caracteristicas"></img>
                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
            </article>
        );
    });

    return <section className="section_characteristics">{cardsElement}</section>;
};

SectionCharacteristics.propTypes = { dataCharacteristics: PropTypes.array.isRequired };

export default SectionCharacteristics;
