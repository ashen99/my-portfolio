import React from 'react'
import Section from './common/Section'
import contact from '../assets/mobile.png'

import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const Contact = () => {

    const SOCIAL = [
        {
            id: 1,
            link: 'https://twitter.com',
            icon: <FaTwitter />
        },
        {
            id: 2,
            link: 'https://facebook.com',
            icon: <FaFacebook />
        },
        {
            id: 3,
            link: 'https://linkedin.com',
            icon: <FaLinkedin />
        },
        {
            id: 4,
            link: 'mailto:ashenperera51@yahoo.com',
            icon: <HiMail />
        },
    ];

  return (
    <Section title='Contact 📞'
    subtitle='These are the ways you can get in touch with me. Hope to hear from you soon :)' >
        <div className='flex flex-col items-center justify-center gap-8 text-center'> 
            <div>
                <img src={contact} alt='contact info' className='w-32 h-32'/>
            </div>
            <div>
                <p className='max-w-xs md:max-w-lg font-extralight'>
                    I am open to talk to regarding freelancing or full-time oppurtunities.
                    Feel fee to contact me using your preferred medium.
                </p>
            </div>
            <div className='flex w-full items-center justify-evenly text-3xl'>
                {SOCIAL.map(({id, link, icon}) => (
                    <a href={link} target='_blank' rel='noperner noreferrer'
                    className='duration-200 ease-in-out hover:text-rose-600'>{icon}</a>
                ))}
            </div>

            {/* bottom form */}
            <div className='p-8 text-left w-full'>
                <form action='https://getform.io/f/fd60bcc9-e752-4bf7-af76-1f950d9ceaec' method='POST'>
                    <div className='gap-4 w-full'>
                        <div className='flex flex-col'>
                            <label className='caparalize text-sm py-2 font-extralight'>Name</label>
                            <input type='text' name='name' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900
                            dark:text-white'/>
                        </div>
                        <div className='flex flex-col my-2'>
                            <label className='caparalize text-sm py-2 font-extralight'>Phone</label>
                            <input type='text' name='phone' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900
                            dark:text-white'/>
                        </div>
                        <div className='flex flex-col my-2'>
                            <label className='caparalize text-sm py-2 font-extralight'>Email</label>
                            <input type='text' name='email' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900
                            dark:text-white'/>
                        </div>
                        <div className='flex flex-col'>
                            <label className='caparalize text-sm py-2 font-extralight'>Message</label>
                            <textarea name='message' rows="10 " className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900
                            dark:text-white resize-none'></textarea>
                        </div>
                    </div>

                    <div className='flex items-center justify-center'>
                        <button className='my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white
                        px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200'>
                            send message
                        </button>
                    </div>
                </form>
            </div>

        </div>
    </Section>
  )
}

export default Contact