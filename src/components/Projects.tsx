import React from 'react'
import {UserPlus} from "lucide-react";
import Link from "next/link";

const Projects = () => {
    return (
        <section className='relative'>
            <span className='block mb-1 text-lg sm:text-sm sm:absolute sm:w-16 sm:top-0 sm:-left-24 sm:text-right underline sm:no-underline sm:text-[#A0A0A0]'>Projects</span>

            <div className='flex flex-col gap-4'>
                <Link href='https://github.com/temirlannz/katysu/' target='_blank'>
                    <div className='bg-[#282828] rounded-md flex flex-col gap-3 px-2 py-3 border-[1px] border-[#2E2E2E]'>
                        <h2 className='flex items-center gap-1'>
                            Katysu.app
                        </h2>

                        <p className='text-[#A0A0A0]'>
                            An attendance tracking app for small businesses, organizations and etc..
                            Create classes, groups, add students and track
                            their attendance on daily basis with convenient ui/ux.
                        </p>

                        <div className='flex gap-1.5 text-[#A0A0A0]'>
                            <span className='bg-red-950 px-1 py-[1px] text-[13px] rounded-md'>Next.js</span>
                            <span className='bg-blue-950 px-1 py-[1px] text-[13px] rounded-md'>Typescript</span>
                            <span className='bg-green-950 px-1 py-[1px] text-[13px] rounded-md'>PostgreSQL</span>
                        </div>
                    </div>
                </Link>

                <Link href='https://github.com/temirlannz/koru'>
                    <div className='bg-[#282828] rounded-md flex flex-col gap-3 px-2 py-3 border-[1px] border-[#2E2E2E]'>
                        <h2 className='flex items-center gap-1'>
                            Koru.app
                        </h2>

                        <p className='text-[#A0A0A0]'>
                            Developed a service for watching movies and series (Netflix clone). Authorization and Authentication
                            with Next Auth.
                        </p>

                        <div className='flex gap-1.5 text-[#A0A0A0]'>
                            <span className='bg-red-950 px-1 py-[1px] text-[13px] rounded-md'>Next.js</span>
                            <span className='bg-blue-950 px-1 py-[1px] text-[13px] rounded-md'>Typescript</span>
                            <span className='bg-green-950 px-1 py-[1px] text-[13px] rounded-md'>PostgreSQL</span>
                            <span className='bg-orange-950 px-1 py-[1px] text-[13px] rounded-md'>PrismaORM</span>
                        </div>
                    </div>
                </Link>

                <Link href='https://github.com/temirlannz/next-blog'>
                    <div className='bg-[#282828] rounded-md flex flex-col gap-3 px-2 py-3 border-[1px] border-[#2E2E2E]'>
                        <h2 className='flex items-center gap-1'>
                            Blog
                        </h2>

                        <p className='text-[#A0A0A0]'>
                            Implementation of full-stack blog on the modern tech stack.
                            Built API for creating, editing, deleting, and reading records (CRUD).
                        </p>

                        <div className='flex gap-1.5 text-[#A0A0A0]'>
                            <span className='bg-yellow-950 px-1 py-[1px] text-[13px] rounded-md'>React.js</span>
                            <span className='bg-blue-950 px-1 py-[1px] text-[13px] rounded-md'>Typescript</span>
                            <span className='bg-green-950 px-1 py-[1px] text-[13px] rounded-md'>PostgreSQL</span>
                            <span className='bg-orange-950 px-1 py-[1px] text-[13px] rounded-md'>PrismaORM</span>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}
export default Projects
