import React from 'react'

const Experience = () => {
    return (
        <section className='relative'>
            <span className='block mb-1 text-lg sm:text-sm sm:absolute sm:w-20 sm:top-0 sm:-left-28 sm:text-right underline sm:no-underline sm:text-[#A0A0A0]'>Experience</span>

            <div className='flex flex-col gap-4'>
                <div>
                    <div className='flex justify-between'>
                        <div>
                            <h2>Antipoff IT</h2>
                            <span className='text-[#A0A0A0]'>Front-end developer</span>
                        </div>

                        <div className='flex flex-col text-right'>
                            <span>Remote</span>
                            <span>Feb 2024 - Present</span>
                        </div>
                    </div>

                    <ul className='mt-3 ms-3'>
                        <li className='list-disc text-[#A0A0A0]'>
                            Improved user experience by redesigning website UI and adding Dark Mode feature, which led to user number increase by 60%
                        </li>
                        <li className='list-disc text-[#A0A0A0]'>
                            Fixed bugs and maintained projects on daily basis.
                        </li>
                    </ul>
                </div>

                <div>
                    <div className='flex justify-between'>
                        <div>
                            <h2>Tony's pizza</h2>
                            <span className='text-[#A0A0A0]'>Senior cashier</span>
                        </div>

                        <div className='flex flex-col text-right'>
                            <span>Ocean city, USA</span>
                            <span>May 2023 - Sep 2023</span>
                        </div>
                    </div>

                    <ul className='mt-3 ms-3'>
                        <li className='list-disc text-[#A0A0A0]'>
                            Assisted customers by providing good service, which led to effective interaction with customers.
                        </li>
                        <li className='list-disc text-[#A0A0A0]'>
                            Supported new team members and constantly received positive feedback from customers and management.
                        </li>
                        <li className='list-disc text-[#A0A0A0]'>
                            Worked effectively in a team, coordinated tasks.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Experience
