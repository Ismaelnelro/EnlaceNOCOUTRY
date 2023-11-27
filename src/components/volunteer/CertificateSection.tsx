// CertificateSection.js
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddIcon from '@mui/icons-material/Add';



interface Certificate {
    title: string;
    institution: string;
    start: string;
    end: string;
    imageCertificate: string
}

interface CertificateProps {
    certificates: Certificate[];
}


const CertificateSection: React.FC<CertificateProps> = ({ certificates }) => {
    return (
        <section className='py-2' >
            <article className="border border-1 border-blue-200 p-6 rounded-2xl">
                <header className="w-full flex justify-between mb-5">
                    <h1 className="text-lg font-bold">Certificado</h1>
                    <AddIcon className="mr-3" />
                    <EditOutlinedIcon />
                </header>
                <main className="flex flex-col items-center">
                    {certificates.map((certificate) => (
                        <div className='flex flex-col gap-2 mb-10'>
                            <h2 className='self-start underline underline-offset-4'>{certificate.title}</h2>
                            <h5 className="text-xs">{certificate.institution} {certificate.start} {certificate.end}</h5>
                            <img
                                width={200}
                                height={150}
                                src={certificate.imageCertificate}
                                alt="certificado"
                            />
                        </div>
                    ))}
                </main>
            </article>
        </section >

    );
};

export default CertificateSection;
