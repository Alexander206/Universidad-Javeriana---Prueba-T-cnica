import PropTypes from "prop-types";
import CardBlogs from "../CardBlogs";

const Blogs = ({ dataBlogs }) => {
    const BlogsElement = dataBlogs.map((item, index) => {
        return <CardBlogs key={index} background={item.backgroundImage} id={item.id} title={item.title} description={item.description} />;
    });

    return (
        <article className="blogs">
            <div className="separator" />

            <h2 className="title">Entérate de los últimos artículos de nuestra universidad</h2>

            <article className="container_blogs">{BlogsElement}</article>
        </article>
    );
};

Blogs.propTypes = {
    dataBlogs: PropTypes.array.isRequired,
};

export default Blogs;
