import Link from "next/link"
import { useMemo, useState } from "react"


interface Props {
    active: string
    locale: string
    title: string
    subtitle?: string
    hideHero?: boolean
    image?: {
        src?: string
        alt: string
    }
}

const Header: React.FC<Props> = ({ active, locale, title, subtitle, hideHero, image }) => {
    const activeLink = (routeName: string) => {
        // TODO: Use classnames from npm
        if (!active) return 'flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-primary transition-colors cursor-pointer'
        const isActive = active.toLowerCase().includes(routeName.toLowerCase())
        if (isActive) return 'flex cursor-pointer items-center px-4 -mb-1 border-b-2 link-active'
        return 'flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-primary transition-colors cursor-pointer'
    }

    const isFrench = useMemo(() => locale.toLowerCase().includes('fr'), [locale])
    const [isActive, setIsAvtice] = useState(false)

    const toggleMenu = () => {
        setIsAvtice(v => !v)
    }

    return (
        <header className="flex flex-col justify-between bg-cover">
            <nav className="p-4 text-gray-800">
                <div className="flex justify-between h-16 mx-auto">
                    <Link href="/" aria-label="Back to Gesmax by Bogital homepage" className="flex items-center p-2">
                        <div className="flex items-center cursor-pointer z-50 md:px-16">
                            <div className="h-16 w-auto relative">
                                <img src="/images/logo-lg.png" alt="Gesmax by Bogital Logo" className="object-contain h-16 sm:h-16 lg:h-16 xl:h-16 2xl:h-16" />
                            </div>
                        </div>
                    </Link>
                    <ul className="items-stretch hidden space-x-3 md:flex">
                        <li className={activeLink('pricing')}>
                            <Link href='/pricing' className="flex items-center -mb-1">
                                <span className="">
                                    {isFrench ? 'Co??ts' : 'Pricing'}
                                </span>
                            </Link>
                        </li>
                        <li className={activeLink('contact')}>
                            <Link href='/contact' className="flex items-center -mb-1">
                                <span className="">
                                    {isFrench ? 'Contact' : 'Contact'}
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <button onClick={toggleMenu} className="flex justify-end p-4 md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                {
                    isActive && (
                        <div className="flex flex-col text-center mx-auto">
                            <ul className={"space-y-4 md:flex"}>
                                <li className={activeLink('pricing')}>
                                    <Link href='/pricing' className="flex">
                                        <span className="flex">
                                            {isFrench ? 'Co??ts' : 'Pricing'}
                                        </span>
                                    </Link>
                                </li>
                                <li className={activeLink('contact')}>
                                    <Link href='/contact' className="flex">
                                        <span className="flex">
                                            {isFrench ? 'Contact' : 'Contact'}
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </nav>

            {
                !hideHero &&
                <section className="bg-white text-gray-900">
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-6 lg:py-12 lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className="text-5xl font-bold leading-none sm:text-5xl">
                                {title}
                            </h1>
                            <p className="mt-6 mb-8 text-lg sm:mb-12">
                                {subtitle || ''}
                            </p>
                        </div>
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            {
                                image?.src && <img src={image.src} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />

                            }
                        </div>
                    </div>
                </section>
            }

        </header>
    )
}

export default Header