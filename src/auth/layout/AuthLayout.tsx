import { ReactNode } from 'react'
import Facebook from '@mui/icons-material/Facebook';


interface AuthLayout {
    children: ReactNode;
    isLogin: boolean
    handle: () => void;
}

export const AuthLayout = ({ children, handle, isLogin }: AuthLayout) => {

    const handleSubmit = () => {
        handle();
    }

    return (
        <div className=" px-10 md:px-20 lg:px-72 my-8">
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <h2 className="text-5xl text-center text-secondary font-bold">
                    {isLogin ? (<>Iniciar sesión</>) : (<>Registro</>)}
                </h2>

                {children}

                <div className='flex flex-col gap-5 mt-10'>
                    <button className="
                    flex justify-center items-center gap-4
                    py-2 px-6 
                    text-sm font-medium leading-5 text-white 
                    rounded-xl
                     bg-violeta-200 hover:bg-violeta-400 
                     transition-all duration-300"
                        type="submit">
                        {isLogin ? (<>  Ingresar</>) : (<> Crear cuenta</>)}
                    </button>

                    <button className="
                    flex justify-center items-center gap-4
                     py-2 px-6  
                     text-sm font-medium leading-5 text-white 
                     rounded-xl
                    bg-blue-500 hover:bg-blue-800
                    transition-all duration-300
                    "
                        type="button"
                    >
                        <Facebook />
                        {isLogin ? (<>  Ingresa con facebook</>) : (<> Registrarme con facebook</>)}

                    </button>

                    <div className="flex justify-center gap-10">
                        <p className="text-sm text-secondary">
                            {isLogin ? (<>Ingresar</>) : (<>¿No tenés cuenta?</>)}
                        </p>
                        <a className="px-6 text-sm font-medium leading-5  text-white rounded-full  bg-primary"
                            href="/auth/volunteer/login"
                        >
                            {isLogin ? (<>Iniciar sesión</>) : (<>Registrate</>)}
                        </a>
                    </div>
                </div>
            </form>
        </div>
    )
}
