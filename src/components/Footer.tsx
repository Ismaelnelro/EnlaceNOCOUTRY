import Logo from '/brandEnlace.svg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import React, { ReactNode } from 'react';
// import { Link } from 'react-router-dom';


interface Section {
    title: string;
    items: string[];
}

const sections: Section[] = [
    {
        title: 'Área',
        items: ['Administración', 'Marketing', 'Tecnología'],
    },
    {
        title: 'Puestos más buscados',
        items: ['Administración', 'Marketing', 'Tecnología'],
    },
    {
        title: 'Modalidad',
        items: ['Administración', 'Marketing', 'Tecnología'],
    },
    {
        title: 'Fecha de publicación',
        items: ['Administración', 'Marketing', 'Tecnología'],
    },
    {
        title: 'Soporte',
        items: ['Sobre nosotros', 'Ayuda', 'Medios de contacto'],
    },
    {
        title: 'Preguntas frecuentes',
        items: ['Generales', 'Para los voluntarios', 'Para las organizaciones'],
    },
];

interface SocialIcon {
    [key: string]: ReactNode;
}

const socialIcons: SocialIcon[] = [
    { linkedin: <LinkedInIcon /> },
    { instagram: <InstagramIcon /> },
    { twitter: <TwitterIcon /> },
    { language: <LanguageIcon /> }
]



const Footer: React.FC = () => {
    return (
        <footer>
            <section className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 
            items-center
            px-10 py-6 rounded-t-3xl bg-grey-900 text-white">
                {sections.map((section, index) => (
                    <div key={index} className="">
                        <h2 className="m-1 mb-3 text-xs md:text-sm uppercase font-lato font-semibold">{section.title}</h2>
                        <ul>
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-xs  font-thin p-1">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section className="flex justify-between flex-wrap py-2 px-10  ">
                <div className='flex items-center gap-10'>
                    <img className="w-8 " src={Logo} alt="logo" />
                    <span className="text-sm font-roboto font-normal hidden md:block ">Copyright © Enlace - ONG 2023</span>
                </div>

                <div className="text-secondary flex gap-5">
                    {socialIcons.map((socialIcon, index) => (
                        <div key={index} className='cursor-pointer hover:text-hoverPrimary'>
                            {Object.values(socialIcon)}
                        </div>
                    ))}
                </div>
            </section>
        </footer>
    );
}

export default Footer;
