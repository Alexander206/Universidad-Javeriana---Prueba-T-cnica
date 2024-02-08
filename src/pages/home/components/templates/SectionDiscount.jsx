import PropTypes from "prop-types";

const SectionDiscount = ({ title, cards }) => {
    const cardsElements = cards.map((item, index) => {
        return (
            <article key={index} className="card_container">
                <article className="card">
                    <h4>
                        {item.discount}
                        <span>{item.discountUnit}</span>
                    </h4>
                </article>

                <p>
                    <span dangerouslySetInnerHTML={{ __html: item.description }}></span>
                    <br />
                    <a href="#">*Aplican términos y condiciones.</a>
                </p>
            </article>
        );
    });

    return (
        <section className="section_discount">
            <h2 className="title">
                {title[0]} <span>{title[1]}</span>
                {title[2]}
            </h2>

            {cardsElements}
        </section>
    );
};

SectionDiscount.propTypes = {
    title: PropTypes.array.isRequired,
    cards: PropTypes.array.isRequired,
};

export default SectionDiscount;
