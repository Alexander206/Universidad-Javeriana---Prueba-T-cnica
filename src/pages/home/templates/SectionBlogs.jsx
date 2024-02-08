import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SectionBlogs = ({ caption, title, text, dataBlogs }) => {
    const BlogsElement = dataBlogs.map((item, index) => {
        return (
            <article key={index} className="card_blog">
                <figure style={{ backgroundImage: `url(${item.backgroundImage})` }}>
                    <Link to="/blog">Ver más</Link>
                </figure>

                <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            </article>
        );
    });

    return (
        <section className="section_blogs">
            <h3 className="caption">{caption}</h3>
            <h2 className="title">{title}</h2>

            <p className="paragraph">{text}</p>

            <article className="container_blogs">{BlogsElement}</article>

            <Link className="btn btn_blogs" to="/blog">
                Ver más
            </Link>
        </section>
    );
};

SectionBlogs.propTypes = {
    caption: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    dataBlogs: PropTypes.array.isRequired,
};

export default SectionBlogs;
