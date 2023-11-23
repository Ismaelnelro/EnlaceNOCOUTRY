import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuOpciones } from './MenuOpciones';
import Logo from '/brandEnlace.svg';


export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <nav className="flex justify-between align-middle   px-5 md:px-20 py-4 bg-white shadow-lg text-secondary relative ">
            <section className="flex gap-6 justify-start align-middle">
                <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <MenuIcon style={{ fontSize: 30 }} className='cursor-pointer' />
                    <MenuOpciones isMenuOpen={isMenuOpen} />
                </div>
                <img className="w-10 cursor-pointer " src={Logo} alt="logo" />
            </section>
            <section className="hidden md:flex gap-3 text-base font-lato font-medium">
                <button className='border-none  hover:text-hoverPrimary'>Iniciar sesión</button>
                <button className='rounded-2xl border px-6 hover:border-hoverPrimary hover:text-hoverPrimary'>Registrarme</button>
            </section>
        </nav>
    )
}
