import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Accordion from "react-bootstrap/Accordion";

import CardBlogs from "../../../components/CardBlogs";
import figureTitle from "../../../assets/images/blogs/figure_title.svg";
import icon from "../../../assets/images/blogs/icon.svg";
import btnIcon from "../../../assets/images/blogs/btn_icon.svg";

const BlogContent = ({ id, dataBlogs }) => {
    const dataBlog = dataBlogs.find((obj) => obj.id === parseInt(id));

    const relatedBlogsElement = dataBlog.relatedBlogs.map((item, index) => {
        const dataRelatedBlog = dataBlogs.find((obj) => obj.id === parseInt(item));

        return (
            <CardBlogs
                key={index}
                background={dataRelatedBlog.backgroundImage}
                id={item}
                title={dataRelatedBlog.title}
                description={dataRelatedBlog.description}
            />
        );
    });

    const recentArticlesElement = dataBlog.recentArticles.map((item, index) => {
        return (
            <Accordion.Item key={index} eventKey={index}>
                <Accordion.Header>
                    <img src={icon} />
                    {item.title}
                </Accordion.Header>
                <Accordion.Body dangerouslySetInnerHTML={{ __html: item.content }}></Accordion.Body>
            </Accordion.Item>
        );
    });

    console.log(dataBlog.backgroundImage);

    return (
        <article className="blog_content">
            <article className="blog_contain">
                <article className="text">
                    <h2>
                        <img src={figureTitle} alt="" />
                        {dataBlog.fullTitle}
                    </h2>

                    <p dangerouslySetInnerHTML={{ __html: dataBlog.content[0] }} />

                    <p dangerouslySetInnerHTML={{ __html: dataBlog.content[1] }} />

                    <p dangerouslySetInnerHTML={{ __html: dataBlog.content[2] }} />
                </article>

                <article className="image">
                    <figure>
                        <div style={{ backgroundImage: `url(${dataBlog.backgroundImage})` }} />
                        <figcaption dangerouslySetInnerHTML={{ __html: dataBlog.figcaption }} />
                    </figure>

                    <p dangerouslySetInnerHTML={{ __html: dataBlog.content[3] }} />
                    <p dangerouslySetInnerHTML={{ __html: dataBlog.content[4] }} />
                </article>
            </article>

            <article className="blog_complement">
                <article className="related_blogs">{relatedBlogsElement}</article>

                <Accordion className="blog_acordion" defaultActiveKey="0">
                    <h3 className="title_acordion">Articulos recientes</h3>
                    {recentArticlesElement}
                </Accordion>
            </article>

            <Link className="btn btn_back" to="/blog">
                <img src={btnIcon} />
                VER MÁS ARTÍCULOS
            </Link>
        </article>
    );
};

BlogContent.propTypes = {
    id: PropTypes.string.isRequired,
    dataBlogs: PropTypes.array.isRequired,
};

export default BlogContent;
