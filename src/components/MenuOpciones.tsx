import { ReactNode } from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import { LoginOutlined } from '@mui/icons-material';


import Logo from '/brandEnlace.svg';


const menuOptions = [
    "Sobre Enlace",
    "Bases y condiciones",
    "Preguntas frecuentes",
    "Contacto"
]

const socialIcons = [
    { linkedin: <LinkedInIcon /> },
    { instagram: <InstagramIcon /> },
    { twitter: <TwitterIcon /> },
    { language: <LanguageIcon /> }
]


export const MenuOpciones = ({ isMenuOpen }: { isMenuOpen: boolean }) => {

    return (
        <div className={`absolute top-16  w-[350px] h-auto px-8 pt-12 pb-2 rounded-br-3xl text-primary bg-grey-900 transition-all duration-300
         ${isMenuOpen ? 'left-0 h-[100px]' : '-left-[350px]'}`}>
            <section className="mb-10 flex flex-col gap-4">
                <ul className="flex flex-col gap-4" >
                    {
                        menuOptions.map((opciones, i) => (
                            <li key={i} className='hover:text-hoverPrimary'>
                                <a href="">
                                    {opciones}
                                </a>
                            </li>
                        ))
                    }
                </ul>

                <button className='flex justify-center gap-2 py-1 w-40 font-medium rounded-md bg-primary  hover:w-64 transition-all duration-300'>
                    <LoginOutlined />
                    Iniciar sesión
                </button>

            </section>

            <section className='grid grid-cols-2 '>
                <div className='flex items-center gap-2'>
                    <img className="w-5  text-primary" src={Logo} alt="logo" />
                    <p className="text-xs w-auto font-roboto ">Enlace ONG</p>
                </div>

                <div className='flex gap-2'>
                    {socialIcons.map((socialIcon, index) => (
                        <div key={index} className='text-xs cursor-pointer'>
                            {Object.values(socialIcon)}
                        </div>
                    ))}
                </div>

            </section>
        </div>
    )
}
