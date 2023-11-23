
import Layout from '../layout/Layout';
import AboutSection, { } from '../components/about/AboutSection'

import mockup from '../assets/about/mockup.svg';
import lady from '../assets/about/ladyOnCouch.svg';
import man from '../assets/about/manAndTrees.svg';
import { AboutCard } from '../components/about/AboutCard';

export function AboutPage() {
    return (
        <Layout>
            <AboutSection src={mockup} orderOneImage={false} orderOneInfo={true}>
                <>
                    <h1 className=" text-start text-4xl  leading-7 text-hoverPrimary">
                        ¿Qué es Enlace ONG?
                    </h1>
                    <p className="text-sm leading-6  text-secondary">
                        Enlace es una plataforma digital que tiene como objetivo conectar organizaciones
                        sin fines de lucro con estudiantes y nuevos profesionales que buscan oportunidades
                        de prácticas laborales. Nuestra misión es contribuir a la sociedad al ayudar a
                        causas benéficas, al mismo tiempo que brindamos a los jóvenes profesionales
                        oportunidades de crecimiento en su carrera y la posibilidad de conectar con
                        personas en su campo de interés. Creemos que al proporcionar experiencias de
                        trabajo realistas, podemos ayudar a nuestros usuarios a desarrollar habilidades
                        valiosas y hacer una diferencia positiva en sus comunidades.
                    </p>
                </>
            </AboutSection>

            <AboutSection src={lady} orderOneImage={true} orderOneInfo={false}>
                <>
                    <AboutCard>
                        Ofrecemos un espacio seguro y confiable para profesionales y organizaciones,
                        donde persevere la ayuda y la colaboración colectiva.
                    </AboutCard>
                    <AboutCard>
                        Fomentamos la ayuda voluntaria a causas sociales y brindamos oportunidades
                        reales para el desarrollo profesional.
                    </AboutCard>
                </>
            </AboutSection>
            <AboutSection src={man} orderOneImage={false} orderOneInfo={true}>
                <>
                    <AboutCard>
                        Buscamos ser el enlace conector entre profesionales en busca de su primera
                        experiencia y organizaciones sociales.
                    </AboutCard>
                    <AboutCard>
                        Facilitamos la conexión entre partes para lograr una colaboración efectiva en
                        beneficio de la sociedad.
                    </AboutCard>
                </>
            </AboutSection>

            <section className=" mx-10 my-10  flex items-center justify-center self-center h-36 rounded-3xl bg-[#FF983D]">
                <p className="text-white h-14 font-medium xl:text-xl md:text-xl text-lg leading-7 text-center">
                    Únete a nuestra comunidad y ayúdanos a <br /> construir un mundo más justo y
                    sostenible.
                </p>
            </section>

        </Layout >
    );
}
