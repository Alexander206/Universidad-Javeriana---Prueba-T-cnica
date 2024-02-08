import PropTypes from "prop-types";

const SectionGuests = ({ title, dataGuests }) => {
    const guestsElement = dataGuests.map((item, index) => {
        return (
            <article key={index} className="guest">
                <figure>
                    <img src={item.imgSrc} alt={item.alt}></img>
                </figure>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
            </article>
        );
    });

    return (
        <section className="section_guests">
            <h2 className="title">{title}</h2>

            <article className="container_guest">{guestsElement}</article>
        </section>
    );
};

SectionGuests.propTypes = {
    title: PropTypes.string.isRequired,
    dataGuests: PropTypes.array.isRequired,
};

export default SectionGuests;
