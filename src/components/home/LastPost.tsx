import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import axios from "axios";
import { useEffect, useState } from "react";
import VolunteerPositionCard from "../VolunteerPositionCard";


export interface OngInterface {
    id: string;
    activ: boolean;
    img: string;
    name: string;
    description: string;
    job_position: string;
    categories: string;
    area: string;
    title: string;
    tasks: string;
    requirements: string[];
    location: string;
    hours: string;
    certificate: string;
    duration: string;
    modality: string;
    published: string;
    comment: string;
    about: string;
}

const LastPosts: React.FC = () => {
    const [db, setdb] = useState<[]>();

    const actuales = db?.filter((post: OngInterface) => post.published === '17/4/2023');

    useEffect(() => {
        axios('../src/data/post.json').then((data) => {
            console.log(data.data.post);
            setdb(data.data.post);
        });
    }, []);

    return (
        <div className="bg-[#FFDC72] p-4 md:p-10">
            <h2 className="mb-4 text-xl font-bold text-secondary">Últimas búsquedas publicadas</h2>
            <Swiper
                slidesPerView={7}
                spaceBetween={30}
                loop={true}
                speed={2000}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                className="mySwiperLastPost"
                breakpoints={{
                    0: {
                        slidesPerView: 1.5,
                    },
                    768: {
                        slidesPerView: 2.5,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                }}
            >
                {actuales?.map((post: OngInterface, index) => (
                    <SwiperSlide key={index}>
                        <VolunteerPositionCard key={post.id} post={post} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default LastPosts;