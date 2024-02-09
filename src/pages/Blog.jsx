import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* Components */
import Header from "../components/Header";
import Footer3 from "../components/Footer3";
import Blogs from "../components/templates/Blogs";
import BlogContent from "../components/templates/BlogContent";

/* Data */
import { dataBlogs } from "../_data/dataBlogs";
import background from "../assets/pages/blogs/bg.jpg";
import btnReturn from "../assets/pages/blogs/btn_return.svg";

const Blog = () => {
    const { id } = useParams();
    const [elementDocument, setElementDocument] = useState(<Blogs dataBlogs={dataBlogs} />);

    useEffect(() => {
        if (id !== undefined) {
            setElementDocument(<BlogContent id={id} dataBlogs={dataBlogs} />);
        } else {
            setElementDocument(
                <>
                    <Blogs dataBlogs={dataBlogs} />

                    <a className="btn btn_return" href="#initialblog">
                        <img src={btnReturn}></img>
                    </a>
                </>
            );
        }
    }, [id]);

    return (
        <>
            <Header identifier="Blog" />

            <main className="blog">
                <section id="initialblog" className="blog_background" style={{ backgroundImage: `url(${background})` }}>
                    <h1>BLOG</h1>
                </section>

                <section className="blog_container">{elementDocument}</section>
            </main>

            <Footer3 />
        </>
    );
};

export default Blog;
