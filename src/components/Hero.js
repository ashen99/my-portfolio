import React from 'react'
import { FaGithub, FaFacebook, FaLinkedin, FaArrowDown } from 'react-icons/fa'
import avatar from '../assets/avatar1.png'

const Hero = () => {

    const SOCIAL = [
        {
            id: 1,
            link: 'https://Github.com/ashen99',
            icon: <FaGithub />
        },
        {
            id: 2,
            link: 'https://www.facebook.com/ashane.perera.1/',
            icon: <FaFacebook />
        },
        {
            id: 3,
            link: 'https://www.linkedin.com/in/ashen-perera-834747195/',
            icon: <FaLinkedin />
        },
    ];

    window.addEventListener('scroll', function () {
        const downArrow = document.querySelector('.down-arrow');
        if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow");
    });

    return (
        <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
            <h2 className='overflow-hidden whitespace-nowrap animate-typing border-r-4 border-r-rose-600 dark:border-r-rose-600 text-5xl
             text-rose-600 font-bold py-2'>Ashen Perera</h2>
            <h3 className='pt-5 py-1 text-2xl'>Full Stack Web Developer | NLP Enthusiast</h3>
            <p className='max-w-xl font-light text-gray-500 py-3'>
                Hello there,<span className='animate-pulse text-4xl'>👋</span>,
                Welcome to my site. I am a Full-stack developer. I love
                to work on web dev, Mobile and automation projects.
            </p>

            {/* social icons */}
            <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
                {SOCIAL.map(({ id, link, icon }) => (
                    <a href={link} key={id} className='cursor-pointer duration-300 hover:text-rose-600'
                        target='_blank'
                        rel='noopener noreferrer'>
                        {icon}
                    </a>
                ))}
            </div>

            {/* avatr and resume */}
            <div>
                <img src={avatar} alt='avatar' className='w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b
                from-rose-600 rounded-xl pt-5'/>
                <a href='/resume.pdf' download={true} className='flex items-center
                justify-center mt-10 bg-gradient-to-r from-rose-600
                to-teal-500 text-white py-2 rounded-lg'>Resume</a>
            </div>

            {/* arrow down animation */}
            <div className='mt-10 down-arrow'>
                <FaArrowDown className='text-gray-400 text-2xl animate-bounce' />
            </div>


        </section>
    )
}

export default Hero