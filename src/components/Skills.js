import React from 'react'
import Section from './common/Section'

import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiMui, SiExpress, SiFlask, SiMongodb, SiFirebase, SiMysql } from 'react-icons/si'

const Skills = () => {
    return (
        <Section title={"Skills ⚙️"}
            subtitle={"As a full stack developer, I am proficient in a varierty of programming languages and frameworks."}
        >
            <div className='grid gap-10 lg:grid-cols-3'>
                <div>
                    <h3 className='font-semibold uppercase pb-4 text-lg'>Forntend Web</h3>
                    <div className='grid justify-items-start gap-4'>
                        <div className='flex justify-center gap-2'>
                            <FaReact className='animate-headShake text-2xl' />
                            <p>React</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <SiJavascript className='animate-headShake text-2xl' />
                            <p>JavaScript</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <FaHtml5 className='animate-headShake text-2xl' />
                            <p>HTML</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <FaCss3Alt className='animate-headShake text-2xl' />
                            <p>CSS</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <SiTailwindcss className='animate-headShake text-2xl' />
                            <p>Tailwind</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <SiMui className='animate-headShake text-2xl' />
                            <p>Material UI</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='font-semibold uppercase pb-4 text-lg'>Backend</h3>
                    <div className='grid justify-items-start gap-4'>
                        <div className='flex justify-center gap-2'>
                            <FaNodeJs className='animate-headShake text-2xl' />
                            <p>Node JS</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <SiExpress className='animate-headShake text-2xl' />
                            <p>Express JS</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <SiFlask className='animate-headShake text-2xl' />
                            <p>Flask</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='font-semibold uppercase pb-4 text-lg'>Database</h3>
                    <div className='grid justify-items-start gap-4'>
                        <div className='flex justify-center gap-2'>
                            <SiMongodb className='animate-headShake text-2xl' />
                            <p>MongoDB</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <SiFirebase className='animate-headShake text-2xl' />
                            <p>Firebase firestore</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <SiMysql className='animate-headShake text-2xl' />
                            <p>MySQL</p>
                        </div>
                    </div>
                </div>
            </div>

        </Section>
    )
}

export default Skills