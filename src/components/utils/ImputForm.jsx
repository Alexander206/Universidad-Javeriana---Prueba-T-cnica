import PropTypes from "prop-types";

const Normal = ({ id, type, attributes }) => {
    return <input type={type} id={id} name={id} autoComplete={attributes.autoComplete} required={attributes.required} />;
};

const Select = ({ id, attributes, options }) => {
    const listOptions = options.map((item, index) => {
        return (
            <option key={index} value={item.value}>
                {item.text}
            </option>
        );
    });

    return (
        <select id={id} name={id} required={attributes.required}>
            {listOptions}
        </select>
    );
};

const ImputForm = ({ children, id, type, attributes, options }) => {
    return (
        <label htmlFor={id}>
            <span>{children}</span>
            {type != "select" ? (
                <Normal id={id} type={type} attributes={attributes} />
            ) : (
                <Select id={id} attributes={attributes} options={options} />
            )}
        </label>
    );
};

ImputForm.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    attributes: PropTypes.object.isRequired,
    options: PropTypes.array,
};

Normal.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    attributes: PropTypes.object.isRequired,
};

Select.propTypes = {
    id: PropTypes.string.isRequired,
    attributes: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
};

export default ImputForm;
