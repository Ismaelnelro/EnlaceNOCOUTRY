import handwithlight from '../../assets/home/handWithLight.png'

const populars = [
    "Community Manager",
    "Diseñador UI",
    "Desarrollador Jr."
];

export const Hero = () => {
    return (
        <div className="
        w-full 
        flex 
        bg-white 
        lg:shadow 
        md:shadow-[#89D0CA] 
        lg:rounded-2xl 
        lg:px-20
        ">
            <section className=' hidden w-2/4 lg:flex justify-center'>
                <img className="w-40" src={handwithlight} alt="frame" />
            </section>

            <section className=' w-full  flex flex-col 
            lg:w-2/4 
            lg:justify-center 
            lg:items-start 
            gap-4 
            font-lato ' >

                <p className='font-normal text-5xl  md:text-7xl lg:text-5xl'>Comenza tu primera experiencia,<span className=' font-bold text-hoverPrimary'>ayudando</span></p>

                <div className='flex justify-start md:w-5/6 h-12'>
                    <input type="text" name="input-search" id="input-search-theme" className='w-full rounded-l-2xl pl-5 text-secondary capitalize   border border-[#89D0CA]' />
                    <button className='text-lg text-white font-bold px-6 py-3 rounded-r-2xl bg-blue-200'>Buscar</button>
                </div>

                <div className='flex  items-center gap-1 md:gap-4'>
                    <p className='text-sm md:text-lg lg:text-sm text-hoverPrimary font-bold '>Temas populares:</p>
                    {populars.map((name, i) => (
                        <span key={i} className='text-xs font-thin text-hoverPrimary border rounded-lg px-2 cursor-pointer'>{name}</span>
                    ))}
                </div>
            </section>
        </div>
    )
}
