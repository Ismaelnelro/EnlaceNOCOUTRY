import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddIcon from '@mui/icons-material/Add';
import Layout from '../../layout/Layout';
import { ProfileSection } from '../../components/volunteer/ProfileSection';
import { SocialNetwork, UserDetails } from '../../components/volunteer/UserDetails';
import CurriculumSection from '../../components/volunteer/CurriculumSection';
import CertificateSection from '../../components/volunteer/CertificateSection';
import { CardProjects } from '../../components/volunteer/CardProjects';
import VolunteerPositionCard from '../../components/VolunteerPositionCard';



// Valores ficticios de usuario
const fakeUser = {
    name: 'John',
    lastName: 'Doe',
    areas: 'Development',
    habilidades: 'React, JavaScript',
    city: 'Cityville',
    workmodality: 'Remote',
    profileImageUrl: 'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg',
    aboutme: 'Soy un desarrollador apasionado con experiencia en desarrollador apasionado con experiencia en desarrollador apasionado con experiencia en desarrollador apasionado con experiencia endesarrollador apasionado con experiencia endesarrollador apasionado con experiencia en desarrollador apasionado con experiencia en desarrollador apasionado con experiencia en desarrollador apasionado con experiencia endesarrollador apasionado con experiencia endesarrollador apasionado con experiencia en desarrollador apasionado con experiencia en desarrollador apasionado con experiencia endesarrollador apasionado con experiencia endesarrollador apasionado con experiencia en...',
    redesSociales: [
        { name: 'Contactar', platform: 'Contactar', url: '#contactar' },
        { name: 'Linkedin', platform: 'Linkedin', url: 'https://www.linkedin.com/' },
        { name: 'Behance', platform: 'Behance', url: 'https://www.behance.net/' },
        { name: 'Github', platform: 'Github', url: 'https://github.com/' },
    ],
    cv: {
        cvImage: "https://marketplace.canva.com/EAFKHSQ7beo/1/0/1236w/canva-curr%C3%ADculum-profesional-monocrom%C3%A1tico-verde-i2x8e2J_qwk.jpg",
        link: "https://marketplace.canva.com/EAFKHSQ7beo/1/0/1236w/canva-curr%C3%ADculum-profesional-monocrom%C3%A1tico-verde-i2x8e2J_qwk.jpg"
    },
    certificates: [
        { title: "Programación web", institution: "Platzi", start: "10/02/2021", end: "02/10/2021", imageCertificate: "https://gabrielchavez.me/storage/2017/08/desarrollo-web.png" },
        { title: "Programación BackEnd", institution: "Platzi", start: "10/02/2021", end: "02/10/2021", imageCertificate: "https://gabrielchavez.me/storage/2017/08/desarrollo-web.png" },
        { title: "Base de datos MYSQL", institution: "Platzi", start: "10/02/2021", end: "02/10/2021", imageCertificate: "https://gabrielchavez.me/storage/2017/08/desarrollo-web.png" },
    ],
    myProyects: [
        "1", "2", "3", "4"
    ],
    Vontuntarios: [
        "1", "2",
    ],
    Experiences: [],
    FeedBacks: [],
    Edutation: []
};


export const ProfilePage = () => {
    const user = fakeUser;

    const {
        name,
        lastName,
        areas,
        habilidades,
        city,
        workmodality,
        profileImageUrl,
        redesSociales,
        aboutme,
        cv,
        certificates,
        myProyects,
        Vontuntarios,
        Experiences,
        FeedBacks,
        Edutation,
    } = user;


    return (
        <Layout>
            <div className="grid grid-cols-12 px-20 py-10 gap-14 text-secondary">
                <aside className="col-span-3">
                    <UserDetails
                        name={name}
                        lastName={lastName}
                        areas={areas}
                        habilidades={habilidades}
                        city={city}
                        workmodality={workmodality}
                        profileImageUrl={profileImageUrl}
                    />
                    <SocialNetwork networks={redesSociales} />
                    <CurriculumSection cv={cv} />
                    <CertificateSection certificates={certificates} />
                </aside>


                <main className="col-span-9 flex flex-col gap-10">
                    <p className="w-fit px-24 py-1 self-end text-lg leading-5 font-normal text-center  rounded-full bg-green-200  ">
                        Activo
                    </p>

                    <article className=" flex flex-col gap-4 p-6  rounded-3xl border-border-1  border-blue-200 shadow-md shadow-blue-200">
                        <div className="flex justify-between">
                            <span className="text-xl font-medium">Sobre mí</span>
                            <EditOutlinedIcon />
                        </div>
                        <p className="h-16 text-sm font-normal leading-5 text-secondary overflow-hidden line-clamp-3">
                            {aboutme}
                        </p>
                    </article>

                    <div className="flex self-end items-center gap-2 px-6 text-lg font-normal border border-1 border-black rounded-full cursor-pointer">
                        <AddIcon />
                        Añadir sección
                    </div>

                    <ProfileSection title='Mis mejores proyectos'>
                        {myProyects.map((_n, index) => (
                            <div key={index} className='py-10  p-2 w-fit'>
                                <CardProjects />
                            </div>
                        ))}
                    </ProfileSection>


                    <ProfileSection title=' Mis voluntariados'>
                        {Vontuntarios.map(() => (
                            <div className='py-10  p-2 w-fit'>
                                <CardProjects />
                            </div>
                        ))}
                    </ProfileSection>

                    <ProfileSection title='Mis devoluciones'>
                        {FeedBacks.map(() => (
                            <div className='py-10  p-2 w-fit'>
                                <CardProjects />
                            </div>
                        ))}
                    </ProfileSection>

                    <ProfileSection title='Mi experiencia' >
                        {Experiences.map(() => (
                            <div className='py-10  p-2 w-fit'>
                                <CardProjects />
                            </div>
                        ))}
                    </ProfileSection>

                    <ProfileSection title='Mi educación' >
                        {Edutation.map(() => (
                            <div className='py-10  p-2 w-fit'>
                                <CardProjects />
                            </div>
                        ))}
                    </ProfileSection>

                </main>
            </div>
        </Layout>
    );
};


