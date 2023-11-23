type infoType = {
    title: string;
    busqueda: string;
};

const experiencias: infoType[] = [
    {
        title: 'Administracion',
        busqueda: '10 busquedas activas',
    },
    {
        title: 'Comunicacion',
        busqueda: '10 busquedas activas',
    },
    {
        title: 'Diseno',
        busqueda: '10 busquedas activas',
    },
    {
        title: 'Educacion',
        busqueda: '10 busquedas activas',
    },
    {
        title: 'Marketing',
        busqueda: '10 busquedas activas',
    },
    {
        title: 'Produccion',
        busqueda: '10 busquedas activas',
    },
    {
        title: 'Tecnologia',
        busqueda: '10 busquedas activas',
    },
];

export const FirstExperience = () => {
    return (
        <div className="bg-gradient-to-b from-tercero to-white">
            <div className="flex flex-col justify-center items-center">
                <h6 className="h-28 m-16  text-4xl md:text-5xl text-center font-lato font-normal  tracking-wider  text-secondary ">
                    Encontra tu primera experiencia laboral,
                    <br />
                    <span className="text-hoverPrimary">aporta un granito de arena</span>
                </h6>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5   ">
                    {experiencias.map((experiencia) => (
                        <div key={experiencia.title} className=" lg:w-80 flex gap-6 p-4 rounded-2xl 
                             items-center justify-center  bg-white shadow-md
                             shadow-blue"
                        >
                            <img src={`../../../src/assets/home/experiences/${experiencia.title}.png`} alt={experiencia.title} />
                            <div className=" flex flex-col justify-center text-secondary  tracking-wide">
                                <h1 className="font-medium">
                                    {experiencia.title}
                                </h1>
                                <p className="text-xs ">
                                    {experiencia.busqueda}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center  my-20">
                <div className="flex flex-col justify-center items-center relative">
                    <p className=" md:w-3/5 h-44 font-medium xl:text-4xl text-3xl leading-10 text-center flex items-center">
                        ¿Te gustaría ganar experiencia brindado ayuda a una organización sin fines de lucro?
                    </p>

                    <button type="submit" className=" w-72 p-3 text-xl  rounded-md hover:font-bold bg-primary text-white">
                        ¡Sumate!
                    </button>
                </div>
            </div>
        </div>
    );
};
