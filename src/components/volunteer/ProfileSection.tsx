
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { CardProjects } from './CardProjects';

interface propsProfile {
    title: string;
    children: React.ReactNode;
}



export const ProfileSection = ({ title, children }: propsProfile) => {
    return (
        <section className="group min-h-[382px] px-8 py-6  rounded-3xl  border-blue-200  shadow-sm shadow-blue-200  hover:shadow-2xl">
            <div className="flex justify-between">
                <span className="text-xl font-medium flex items-center justify-end gap-2 ">
                    {title}
                </span>
                <div className="flex items-center justify-end gap-4">
                    <span className='cursor-pointer hover:text-blue-800'>
                        <AddIcon />
                    </span>
                    <span className='cursor-pointer hover:text-blue-800'>
                        <EditOutlinedIcon />
                    </span>
                </div>
            </div>

            <article className=' w-full flex overflow-hidden overflow-x-scroll min-h-[288px] '>
                {children}
            </article>
        </section >
    )
}




