
interface propsAbout {
    src: string;
    orderOneImage: boolean;
    orderOneInfo: boolean;
    children: React.ReactNode;
}


const AboutSection = ({ src, orderOneImage, orderOneInfo, children }: propsAbout) => {
    return (
        <section className=" mx-20 my-10 grid grid-cols-1 md:grid-cols-2 items-center gap-20 font-medium">
            <div className={`w-full flex flex-col justify-center h-full gap-6 ${orderOneInfo ? 'order-1' : 'order-2'}`}>
                {children}
            </div>
            <div className={`hidden lg:flex    ${orderOneImage ? 'order-1' : 'order-2 justify-end'} `}>
                <img className=" w-[404.86px] h-[442.16px]" src={src} alt="imagen mockup de enlace" />
            </div>

        </section >
    )
}

export default AboutSection;
