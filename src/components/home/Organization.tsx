import computer from '../../assets/home/computer.svg'

export const Organization = () => {
    return (

        <section className=" mx-5 md:mx-10 my-10  grid  grid-cols-1 md:grid-cols-2  items-center rounded-3xl bg-[#A8A1DF] text-white ">

            <img src={computer} title="organizacion registro" className='w-6/7 p-10' />

            <div className="bg-primary w-full rounded-l-3xl rounded-r-none py-6 px-12">
                <h3 className="xl:text-4xl md:text-3xl text-xl font-medium text-black">
                    Organizaciones:
                </h3>
                <div className="">
                    <p className="xl:text-xl md:text-xl text-lg text-white xl:mt-9 md:mt-7 mt-2">
                        Si sos una organización o formás parte de una y te interesa sumarte a esta iniciativa
                        ofreciendo prácticas a nuevos profesionales, te invitamos a registrarte y a leer las
                        bases y condiciones.{' '}
                    </p>
                    <div className="flex mt-3 justify-between">
                        <button
                            className="xl:px-10 px-4 md:px-10 xl:py-2 md:py-2 py-1 border rounded-md bg-grey-900"
                            type="button"
                        >
                            Registrarme
                        </button>
                        <button className="xl:px-10 px-4 md:px-10 xl:py-2 md:py-2 py-1 border rounded-md" type="button">
                            Base y condiciones
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
