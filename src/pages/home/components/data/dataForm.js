export const dataForm = [
    {
        type: "text",
        id: "inscriptionFirstName",
        label: "Nombres*",
        attributes: {
            required: true,
            autoComplete: "given-name",
        },
    },
    {
        type: "text",
        id: "inscriptionLastName",
        label: "Apellidos*",
        attributes: {
            required: true,
            autoComplete: "family-name",
        },
    },
    {
        type: "select",
        id: "inscriptionDocType",
        label: "Tipo de documento*",
        options: [
            { value: "", text: "Seleccionar..." },
            { value: "cc", text: "Cédula de Ciudadanía" },
            { value: "ti", text: "Tarjeta de Identidad" },
            { value: "ce", text: "Cédula de Extranjería" },
        ],
        attributes: { required: true },
    },
    {
        type: "text",
        id: "inscriptionDocNumber",
        label: "Número de documento*",
        attributes: {
            required: true,
            autoComplete: "off",
        },
    },
    {
        type: "text",
        id: "inscriptionCity",
        label: "Ciudad*",
        attributes: {
            required: true,
            autoComplete: "address-level2",
        },
    },
    {
        type: "select",
        id: "inscriptionVisitorType",
        label: "Tipo de visitante*",
        options: [
            { value: "", text: "Seleccionar..." },
            { value: "estudiante", text: "Estudiante" },
            { value: "docente", text: "Docente" },
            { value: "externo", text: "Externo" },
        ],
        attributes: { required: true },
    },
    {
        type: "email",
        id: "inscriptionEmail",
        label: "Correo*",
        attributes: {
            required: true,
            autoComplete: "email",
        },
    },
    {
        type: "tel",
        id: "inscriptionPhone",
        label: "Teléfono móvil*",
        attributes: {
            required: true,
            autoComplete: "tel",
        },
    },
    {
        type: "select",
        id: "inscriptionFacultyInterest",
        label: "Facultad o área de interés*",
        options: [
            { value: "", text: "Seleccionar..." },
            { value: "ingenieria", text: "Ingeniería" },
            { value: "ciencias", text: "Ciencias" },
            { value: "humanidades", text: "Humanidades" },
        ],
        attributes: { required: true },
    },
    {
        type: "select",
        id: "inscriptionProgramInterest",
        label: "Programa de interés*",
        options: [
            { value: "", text: "Seleccionar..." },
            { value: "maestria", text: "Maestría en..." },
            { value: "doctorado", text: "Doctorado en..." },
            { value: "especializacion", text: "Especialización en..." },
        ],
        attributes: { required: true },
    },
    {
        type: "checkbox",
        id: "inscriptionTerms",
        label: "Aceptar términos y condiciones.",
        attributes: { required: true },
    },
];
