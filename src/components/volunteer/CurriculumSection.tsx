import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

interface CVprops {
    cv: {
        cvImage: string;
        link: string
    }
}

const CurriculumSection: React.FC<CVprops> = ({ cv }) => {
    return (
        <section className='py-4'>
            <article className="border border-1 border-blue-200 p-6 rounded-2xl">
                <header className="w-full flex justify-between mb-5">
                    <h1 className="text-lg font-bold">Currículo</h1>
                    <EditOutlinedIcon />
                </header>
                <main className="flex flex-col items-center">
                    <img
                        src={`${cv.cvImage}`}
                        alt="curriculo"
                    />
                    <a href={`${cv.link}`} target='_blank' className='w-full text-center font-medium rounded-full my-2 bg-primary'>
                        Descargar
                    </a>
                </main>
            </article>
        </section >
    );
};

export default CurriculumSection;
