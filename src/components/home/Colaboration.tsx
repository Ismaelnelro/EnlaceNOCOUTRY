import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import Amnistia from '../../assets/home/colaboration/amnistia.png';
import Abuelas from '../../assets/home/colaboration/abuelas.png';
import Equipo from '../../assets/home/colaboration/equipo.png';
import Derechos from '../../assets/home/colaboration/derechos.png';
import Centro from '../../assets/home/colaboration/centro.png';
import Sos from '../../assets/home/colaboration/sos.png';
import Asamblea from '../../assets/home/colaboration/asamblea.png';


const images = [Amnistia, Abuelas, Equipo, Derechos, Centro, Sos, Asamblea];

const Colaboration: React.FC = () => {
    return (
        <div className="py-5 lg:py-10">
            <h2 className="mb-5 font-semibold">Con la colaboración de:</h2>
                <Swiper
                    slidesPerView={7}
                    spaceBetween={30}
                    loop={true}
                    speed={2000}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 7,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <div>
                                <img src={src} alt={`logo${index + 1}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
    );
}

export default Colaboration;