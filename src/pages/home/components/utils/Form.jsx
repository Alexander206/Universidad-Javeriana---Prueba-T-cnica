import PropTypes from "prop-types";
import ImputForm from "./ImputForm";

const Form = ({ dataForm }) => {
    const htmlDoc = dataForm.map((item, index) => {
        return (
            <ImputForm
                key={index}
                id={item.id}
                type={item.type}
                attributes={item.attributes}
                options={item.options !== undefined ? item.options : [false]}
            >
                {item.label}
            </ImputForm>
        );
    });

    return (
        <form className="form">
            {htmlDoc}

            <button type="submit">Enviar</button>
        </form>
    );
};

Form.propTypes = {
    dataForm: PropTypes.array.isRequired,
};

export default Form;
