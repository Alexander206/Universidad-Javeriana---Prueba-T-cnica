import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CardBlogs = ({ background, id, title, description }) => {
    return (
        <article className="card_blog">
            <figure style={{ backgroundImage: `url(${background})` }}>
                <Link to={`/blog/${id}`}>Ver más</Link>
            </figure>

            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </article>
    );
};

CardBlogs.propTypes = {
    background: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default CardBlogs;
