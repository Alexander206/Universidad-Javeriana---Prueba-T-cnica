import PropTypes from "prop-types";

const Normal = ({ id, type, required, autoComplete }) => {
    return <input type={type} id={id} name={id} required={required} autoComplete={autoComplete} />;
};

const Select = ({ id, required, options }) => {
    const listOptions = options.map((item, index) => {
        return (
            <option key={index} value={item.value}>
                {item.text}
            </option>
        );
    });

    return (
        <select id={id} name={id} required={required}>
            {listOptions}
        </select>
    );
};

const ImputForm = ({ children, id, type, required, autoComplete, options }) => {
    return (
        <label htmlFor={id}>
            <span>{children}</span>
            {type != "select" ? (
                <Normal id={id} type={type} required={required} autoComplete={autoComplete} />
            ) : (
                <Select id={id} required={required} options={options} />
            )}
        </label>
    );
};

ImputForm.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    autoComplete: PropTypes.string,
    options: PropTypes.array,
};

Normal.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    autoComplete: PropTypes.string.isRequired,
};

Select.propTypes = {
    id: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    options: PropTypes.array.isRequired,
};

export default ImputForm;
