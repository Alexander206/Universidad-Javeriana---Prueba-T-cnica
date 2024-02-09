import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardBlogs from "../CardBlogs.jsx";

const SectionBlogs = ({ caption, title, text, dataBlogs }) => {
    const BlogsElement = dataBlogs.slice(0, 9).map((item, index) => {
        return <CardBlogs key={index} background={item.backgroundImage} id={item.id} title={item.title} description={item.description} />;
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="section_blogs">
            <h3 className="caption">{caption}</h3>
            <h2 className="title">{title}</h2>

            <p className="paragraph">{text}</p>

            <Slider {...settings} className="container_blogs">
                {BlogsElement}
            </Slider>

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
