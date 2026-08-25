'use client'

import Image from 'next/image'
import Link from 'next/link'
import { musicShelfTabRendered } from '@/lib/data'
import { usePathname } from 'next/navigation'

const Sidebar = () => {

    const pathname = usePathname()

    return (
        <aside className={`h-full sm:w-54 md:w-64 bg-transparent border-r border-gold-accent/50
            relative overflow-hidden flex flex-col text-neutral-400 z-10 backdrop-blur-md py-4`}>

            {/* Logo Section */}
            <div className='px-4'>
                <Link href={'/'}>
                    <div className='flex gap-4 items-center'>
                        <Image src={'/logogold.svg'} alt='Musicon Logo' width={48} height={48} />
                        <h1 className='uppercase font-logotext text-accent-gradient text-2xl font-semibold tracking-wide'>Musicon</h1>
                    </div>
                </Link>
            </div>

            {/* Nav Section */}
            <div className='flex flex-col mt-10'>

                <div className='px-8'>
                    <h4 className='text-xs uppercase font-sans text-stone-400'>Menu</h4>
                </div>


                <div className='flex flex-col mt-4 box-border'>
                    {musicShelfTabRendered.map((item, i) => {

                        const Icon = item.icon
                        const isActive = pathname === item.href

                        return (
                            <Link href={item.href} key={i} className={`${isActive ? "pl-4 tab-accent-gradient" : "px-4"} flex mb-2 group`}>
                                <nav className={`flex flex-1 gap-2 p-3 font-poppins font-medium text-sm rounded-xl items-center ${!isActive ? "group-hover:bg-white/5" : ""}`}>
                                    <Icon className={`${isActive ? "text-gold-accent" : ""} w-5 h-5`} />
                                    <span className={`${isActive ? "text-[#dec38b]" : "group-hover:text-white"} font-medium text-sm`}>{item.label}</span>
                                </nav>
                                {isActive && (
                                    <div className='h-full border-3 box-border border-gold-accent rounded-bl-md rounded-tl-md'>
                                    </div>
                                )}
                            </Link>
                        )
                    })}
                </div>

            </div>

        </aside>
    )
}

export default Sidebar