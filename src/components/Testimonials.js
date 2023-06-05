import React from 'react'
import Section from './common/Section'
import avatar from '../assets/avatar.png'

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            image: avatar,
            name: "Jhon Doe",
            comment: "ddLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            id: 2,
            image: avatar,
            name: "Jhon Doe",
            comment: "ddLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            id: 3,
            image: avatar,
            name: "Jhon Doe",
            comment: "ddLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
    ]

  return (
    <Section title={'Testimonials 💭'} subtitle={'This is what other clients have to say about me. I accept clients from all around the world'}>
        <div className='max-w-xl flex flex-col gap-8'> 
            {testimonials.map(({id, image, name, comment}) => (
                <div className='flex p-4 justify-center items-center rounded-xl shadow-md
                dark:shadow-gray-300'>
                    <div className='w-1/3'>
                        <img src={image} alt='' className='w-20 h-20 object-cover object-top pt-2'/>
                    </div>
                    <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                        <h3 className='text-xl font-semibold'>{name}</h3>
                        <p className='text-sm font-extralight'>{comment}</p>
                    </div>
                </div>
                ))}
        </div>
    </Section>
  )
}

export default Testimonials