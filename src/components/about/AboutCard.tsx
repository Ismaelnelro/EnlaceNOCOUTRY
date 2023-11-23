import { ReactNode } from 'react'

export const AboutCard = ({ children }: { children: ReactNode }) => {
    return (
        <div className="px-12 py-4 h-[113px] shadow-xl rounded-2xl">
            <p className='text-lg text-justify  font-roboto font-normal text-secondary  '>
                {children}
            </p>
        </div>
    )
}
