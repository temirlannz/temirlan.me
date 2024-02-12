import React from 'react'

const Education = () => {
    return (
        <section className='relative'>
            <span className='block mb-1 text-lg sm:text-sm sm:absolute sm:w-16 sm:top-0 sm:-left-24 sm:text-right underline sm:no-underline sm:text-[#A0A0A0]'>Education</span>

            <div className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                    <div>
                        <h2>IITU</h2>
                        <span className='text-[#A0A0A0]'>B.Sc. in Computer Science</span>
                    </div>

                    <div className='flex flex-col'>
                        <span>Almaty, KZ</span>
                        <span>Sep 2021 - May 2025</span>
                    </div>
                </div>

                <div>
                    <div className='flex justify-between'>
                        <div>
                            <h2>University Of Czech republic</h2>
                            <span className='text-[#A0A0A0]'>Foundation programme.</span>
                        </div>

                        <div className='flex flex-col'>
                            <span>Prague, Czech</span>
                            <span>Sep 2020 - May 2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Education
