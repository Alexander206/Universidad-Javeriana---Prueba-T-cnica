import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CardBlogs from "../../../components/CardBlogs";

const SectionBlogs = ({ caption, title, text, dataBlogs }) => {
    const BlogsElement = dataBlogs.map((item, index) => {
        return <CardBlogs key={index} background={item.backgroundImage} id={item.id} title={item.title} description={item.description} />;
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
