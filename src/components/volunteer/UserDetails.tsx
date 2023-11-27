import LocationOnIcon from '@mui/icons-material/LocationOn';
import MonitorIcon from '@mui/icons-material/Monitor';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import React from 'react';


interface UserInfo {
    name: string;
    lastName: string;
    areas: string;
    habilidades: string;
    city: string;
    workmodality: string;
    profileImageUrl: string;
}


export const UserDetails: React.FC<UserInfo> = ({ name, lastName, areas, habilidades, city, workmodality, profileImageUrl }) => {
    return (
        <section>
            <article className="flex flex-col gap-3 py-10 ">
                <div>
                    <img src={profileImageUrl} alt="profile" className="rounded-full mx-auto w-24 h-24 object-cover" />
                    <span className='font-bold flex justify-between cursor-pointer'>{name}  {lastName} <EditOutlinedIcon /></span>
                </div>
                <span className='text-sm flex flex-col items-start gap-2 italic'>{areas}</span>
                <span className='text-sm flex flex-col items-start gap-2 italic'>{habilidades}</span>
                <span className='text-sm flex items-start gap-2 italic'>
                    <LocationOnIcon />
                    {city}
                </span>
                <span className='text-sm flex items-start gap-2 italic'>
                    <MonitorIcon />
                    {workmodality}
                </span>
            </article>
        </section>
    );
};



interface ArrNetworksProps {
    networks: Networks[]
}


interface Networks {
    name: string;
    platform: string;
    url: string
}

export const SocialNetwork: React.FC<ArrNetworksProps> = ({ networks }) => {
    return (
        <section>
            <article className='flex flex-col gap-3'>
                {networks.map((link) => (
                    <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[24px] text-sm text-center rounded-xl  border border-1 border-blue-200 hover:border-blue-500 "
                    >
                        {link.name}
                    </a>
                ))}
            </article>
        </section>
    );
}
