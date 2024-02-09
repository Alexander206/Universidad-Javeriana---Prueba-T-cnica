import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Form from "../utils/Form";

const SectionForm = ({ background, title, caption, date, imgPeople, titleForm, dataForm, form, setForm, setFormRef }) => {
    const componentRef = useRef(null);

    setFormRef(componentRef);

    useEffect(() => {
        setTimeout(() => {
            setForm(false);
        }, 1000);
    }, [form, setForm]);

    const dateBig = date.dateBig.split("");

    return (
        <section className="section_form">
            <article className="section_form-data background" style={{ backgroundImage: `url(${background})` }}>
                <div className="container">
                    <article className="content"></article>
                    <article className="container_form"></article>
                </div>
            </article>

            <article className="section_form-data">
                <div className="container">
                    <article className="content">
                        <div className="title_container">
                            <h1 className="title">
                                <span className="title_header">{title[0]}</span>
                                <span className="title_middle">{title[1]}</span>
                                <span className="title_footer">{title[2]}</span>
                            </h1>

                            <h3 className="caption">{caption}</h3>
                        </div>

                        <article className="date_container">
                            <h4 className="date_small">{date.dateSmall}</h4>
                            <h3 className="date_big">
                                {dateBig[0]}
                                <span className="date_big-font">{dateBig[1]}</span>
                                {dateBig[2]}
                            </h3>
                            <h3 className="date_middle">{date.dateMiddle}</h3>
                            <h4 className="date_small">
                                {date.dateRange[0]}
                                <br />
                                {date.dateRange[1]}
                            </h4>
                        </article>

                        <figure className="image_container">
                            <img src={imgPeople} alt="Persona sonriendo"></img>
                        </figure>
                    </article>

                    <article ref={componentRef} className="container_form">
                        <div className={`contain ${form}`}>
                            <h3 className="title">{titleForm}</h3>

                            <Form dataForm={dataForm} />
                        </div>
                    </article>
                </div>
            </article>
        </section>
    );
};

SectionForm.propTypes = {
    background: PropTypes.string.isRequired,
    title: PropTypes.array.isRequired,
    caption: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    imgPeople: PropTypes.string.isRequired,
    titleForm: PropTypes.string.isRequired,
    dataForm: PropTypes.array.isRequired,
    form: PropTypes.bool,
    setForm: PropTypes.func,
    setFormRef: PropTypes.func,
};

export default SectionForm;
