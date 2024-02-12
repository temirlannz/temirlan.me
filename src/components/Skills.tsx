import React from 'react'

const skills = [
    'React.js',
    'Javascript',
    'Typescript',
    'Next.js',
    'Express',
    'Node.js',
    'PostgreSQL',
    'TailwindCSS',
    'Shadcn-ui',
]

const Skills = () => {
    return (
        <section className='relative'>
            <span className='block mb-1 text-lg sm:text-sm sm:absolute sm:w-16 sm:top-0 sm:-left-24 sm:text-right underline sm:no-underline sm:text-[#A0A0A0]'>
                Skills
            </span>

            <div className='flex flex-wrap gap-1'>
                {skills.map(skill => (
                    <span className='bg-[#707070] px-1 py-[1px] text-[13px] rounded-md'>
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    )
}
export default Skills
