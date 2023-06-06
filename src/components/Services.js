import React from 'react'
import Section from './common/Section'

import mobile from '../assets/mobile.png'
import web from '../assets/web.png'

const Services = () => {
    const services = [
        {
            id:1,
            image: web,
            title: "Web Development"
        },
        {
            id:2,
            image: mobile,
            title: "Mobile Development"
        },
    ]

    return (
        <Section title={"Services ⚒️"}
            subtitle={"Here are all the services that i provide to my clients. I hope I offer the service that you are looking for, If you don't find something that you are looking for than please sent me an email."}
        >
            <div className='grid gap-10 lg:grid-cols-2'>
                {services.map(({ id, image, title }) => (
                    <div className='flex flex-col items-center justify-center
                    p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'>
                        <img src={image} alt="" className='w-36 h-36 md:w-44 md:h-44 object-contain'/>
                        <h3 className='mt-5 text-base'>{title}</h3>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Services