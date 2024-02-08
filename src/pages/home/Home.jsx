// Components
import Header from "../../components/Header.jsx";
import SectionForm from "./components/templates/SectionForm.jsx";
import SectionDiscount from "./components/templates/SectionDiscount.jsx";
import SectionCharacteristics from "./components/templates/SectionCharacteristics.jsx";
import SectionGuests from "./components/templates/SectionGuests.jsx";
import SectionCampus from "./components/templates/SectionCampus.jsx";
import SectionBlogs from "./components/templates/SectionBlogs.jsx";
import SectionGraduates from "./components/templates/SectionGraduates.jsx";

// Assets
import background from "../../assets/images/home/bg.jpg";
import people from "../../assets/images/home/people.png";
import arrow from "../../assets/images/home/arrow.svg";
import stitching from "../../assets/images/home/stitching.svg";

// Data
import { dataForm } from "./components/data/dataForm.js";
import { dataCharacteristics } from "./components/data/dataCharacteristics.js";
import { dataGuests } from "./components/data/dataGuests.js";
import { dataBlogs } from "./components/data/dataBlogs.js";

const Home = () => {
    return (
        <>
            <Header />

            <main className="inscription">
                <SectionForm
                    background={background}
                    title={["EXPO", "JAVERIANA", "POSGRADOS"]}
                    caption="VIRTUAL"
                    date={{
                        dateSmall: "Fecha:",
                        dateBig: "1y2",
                        dateMiddle: "de octubre",
                        dateRange: ["Hora: 2:00p.m. ", " a 6:00 p.m."],
                    }}
                    imgPeople={people}
                    titleForm="Confirma tu asistencia aquí"
                    dataForm={dataForm}
                ></SectionForm>

                <SectionDiscount
                    title={["Esperamos disfruten de esta", " experiencia virtual ", "que contará con:"]}
                    cards={[
                        {
                            discount: "50",
                            discountUnit: "% dto",
                            description:
                                "En la <strong>inscripción al proceso de admisión</strong> para los posgrados con inscripciones abiertas. Válido durante el evento.",
                        },
                        {
                            discount: "15",
                            discountUnit: "OCT",
                            description: "Paga tu matrícula antes del 15 de octubre con precio del 2021.",
                        },
                    ]}
                ></SectionDiscount>

                <SectionCharacteristics dataCharacteristics={dataCharacteristics}></SectionCharacteristics>

                <SectionGuests title="INVITADOS ESPECIALES" dataGuests={dataGuests}></SectionGuests>

                <SectionCampus
                    arrow={arrow}
                    text="Conoce el <span>Campus de nuestra Universidad</span>"
                    urlVideo="https://www.youtube.com/embed/v0v7E77mUTA?si=-8dWAcHytuzxy8nz"
                ></SectionCampus>

                <SectionBlogs
                    caption="Encuentra aquí los"
                    title="BLOGS DESTACADOS"
                    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam."
                    dataBlogs={dataBlogs}
                ></SectionBlogs>

                <SectionGraduates
                    background={background}
                    title="Nuestros <span>Egresados</span>"
                    caption="La Universidad tiene más de <span>150.000</span> egresados entre pregrado y posgrado."
                    imgSrc={stitching}
                    text="Tenemos el programa REGRESA, el cual ofrece servicios y beneficios para los egresados Javerianos y sus familias, como apoyo a la inserción laboral, la red de negocios, los grupos de egresados en diferentes regiones del país y del mundo, y eventos de reencuentro por generaciones."
                ></SectionGraduates>

                
            </main>
        </>
    );
};

export default Home;
