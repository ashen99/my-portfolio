import React from 'react'
import Section from './common/Section'
// import avatar from '../assets/avatar.png'
import dilan from '../assets/profiles/avatar-male.jpg'
const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            image: dilan,
            name: "Dilan Jayamanne",
            title: "Software Developer",
            comment: "According to what I know about him, he completes work on schedule by not waiting until the very last minute. He always gets a head start and produces high-quality work. He is also very passionate in learning about various technologies and the software engineering process. Finally, I can endorse him as a knowledgeable software engineer who will be a great contribution to a software business.",
            link: "https://www.linkedin.com/in/dilanjt/"
        },
        // {
        //     id: 2,
        //     image: avatar,
        //     name: "Jhon Doe",
        //     title: "",
        //     comment: "ddLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        //     link: ""
        // },
    ]

  return (
    <Section title={'Testimonials 💭'} subtitle={'This is what other clients have to say about me. I accept clients from all around the world'}>
        <div className='max-w-xl flex flex-col gap-8'> 
            {testimonials.map(({id, image, name, comment, title, link}) => (
                <div className='flex p-4 justify-center items-center rounded-xl shadow-md
                dark:shadow-gray-300' key={id}>
                    {/*<div className='w-1/3'>*/}
                    {/*    <a href={link} target="_blank" rel="noreferrer">*/}
                    {/*        <img src={image} alt='' className='w-20 h-20 object-cover object-top pt-2'/>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                    <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                        <a href={link} target="_blank" rel="noreferrer">
                            <h3 className='text-xl font-semibold'>{name}</h3>
                        </a>
                        <p className='text-'>{title}</p>
                        <p className='text-sm font-extralight'>{comment}</p>
                    </div>
                </div>
                ))}
        </div>
    </Section>
  )
}

export default Testimonials