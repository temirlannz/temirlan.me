import React from 'react'
import {Clock} from "@/components/Clock";
import {Copy, FileText, Github, Instagram, Linkedin, Mail, Send} from "lucide-react";
import Link from "next/link";

const socials: { link: string, icon: React.JSX.Element }[] = [
    {
        link: 'https://github.com/temirlannz',
        icon: <Github strokeWidth={1.5} />
    },
    {
        link: 'https://instagram.com/temirlannz',
        icon: <Instagram strokeWidth={1.5} />
    },
    {
        link: 'https://www.linkedin.com/in/temirlan-zhanibek-aa3086194/',
        icon: <Linkedin strokeWidth={1.5} />
    },
    {
        link: 'https:/t.me/temirlannz',
        icon: <Send strokeWidth={1.5} />
    },
    {
        link: 't.zhanibek@bk.ru',
        icon: <Mail strokeWidth={1.5} />
    },
    {
        link: 't.zhanibek@bk.ru',
        icon: <FileText strokeWidth={1.5} />
    },
];

const Header = () => {
    const now = new Date();

    return (
        <nav className='text-center flex flex-col gap-5'>
            <Clock time={now.getTime()} />

            <span className='space-y-1'>
                <h1 className='text-xl'>
                    Zhanibek Temirlan
                </h1>
                <h2 className='text-lg text-[#A0A0A0]'>
                    An enthusiast full-stack developer
                </h2>
            </span>

            <span className='flex justify-center items-center gap-3 text-[#A0A0A0]'>
                <div className='relative h-4 w-4 flex items-center justify-center'>
                    <span className='block h-2.5 w-2.5 absolute rounded-full bg-green-700'></span>
                    <span className="animate-ping block h-full w-full rounded-full bg-green-800 opacity-75"></span>
                </div>
                Available for new opportunities
            </span>

            <div className='flex justify-center gap-7'>
                {socials.map(social => (
                    <Link href={social.link} className='text-[#A0A0A0] hover:text-white transition'>
                        {social.icon}
                    </Link>
                ))}
            </div>

            <div className='flex justify-center items-center gap-4'>
                <button className='flex items-center bg-white text-[#161616] rounded-md gap-2 py-1 px-4'>
                    Contact me
                    <Mail strokeWidth={1.5} size={18} />
                </button>

                <span className='text-[#707070]'>or</span>

                <button className='flex items-center bg-[#282828] rounded-md gap-2 py-1 px-4 border-[1px] border-[#2E2E2E]'>
                    Copy email
                    <Copy strokeWidth={1.5} size={16} />
                </button>
            </div>
        </nav>
    )
}
export default Header
