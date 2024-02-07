import ImputForm from "./ImputForm";

const Form = () => {
    return (
        <form className="form">
            <ImputForm id="inscriptionFirstName" type="text" required={true} autoComplete="given-name">
                Nombres*
            </ImputForm>

            <ImputForm id="inscriptionLastName" type="text" required={true} autoComplete="family-name">
                Apellidos*
            </ImputForm>

            <ImputForm
                id="inscriptionDocType"
                type="select"
                required={true}
                options={[
                    { value: "", text: "Seleccionar..." },
                    { value: "cc", text: "Cédula de Ciudadanía" },
                    { value: "ti", text: "Tarjeta de Identidad" },
                    { value: "ce", text: "Cédula de Extranjería" },
                ]}
            >
                Tipo de documento*
            </ImputForm>

            <ImputForm id="inscriptionDocNumber" type="text" required={true} autoComplete="off">
                Número de documento*
            </ImputForm>

            <ImputForm id="inscriptionCity" type="text" required={true} autoComplete="address-level2">
                Ciudad*
            </ImputForm>

            <ImputForm
                id="inscriptionVisitorType"
                type="select"
                required={true}
                options={[
                    { value: "", text: "Seleccionar..." },
                    { value: "estudiante", text: "Estudiante" },
                    { value: "docente", text: "Docente" },
                    { value: "externo", text: "Externo" },
                ]}
            >
                Tipo de visitante*
            </ImputForm>

            <ImputForm id="inscriptionEmail" type="email" required={true} autoComplete="email">
                Correo*
            </ImputForm>

            <ImputForm id="inscriptionPhone" type="tel" required={true} autoComplete="tel">
                Teléfono móvil*
            </ImputForm>

            <ImputForm
                id="inscriptionFacultyInterest"
                type="select"
                required={true}
                options={[
                    { value: "", text: "Seleccionar..." },
                    { value: "ingenieria", text: "Ingeniería" },
                    { value: "ciencias", text: "Ciencias" },
                    { value: "humanidades", text: "Humanidades" },
                ]}
            >
                Facultad o área de interés*
            </ImputForm>

            <ImputForm
                id="inscriptionProgramInterest"
                type="select"
                required={true}
                options={[
                    { value: "", text: "Seleccionar..." },
                    { value: "maestria", text: "Maestría en..." },
                    { value: "doctorado", text: "Doctorado en..." },
                    { value: "especializacion", text: "Especialización en..." },
                ]}
            >
                Programa de interés*
            </ImputForm>

            <ImputForm id="inscriptionTerms" type="checkbox" required={true} autoComplete="tel">
                Aceptar términos y condiciones.
            </ImputForm>

            <button type="submit">Enviar</button>
        </form>
    );
};

Form.propTypes = {};

export default Form;
