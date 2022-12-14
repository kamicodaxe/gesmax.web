import Image from "next/image"
import Link from "next/link"
import logoImage from '../assets/images/logo-lg.png'

const routes = [
    {
        name: "Pricing",
        path: "/pricing"
    },
    {
        name: "Contact",
        path: "/contact"
    }
]

const Footer: React.FC<{}> = ({ }) => {

    return (
        <footer className="px-4 pt-8 text-gray-800">
            <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                <div className="flex flex-row flex-wrap pr-3 space-x-4 sm:space-x-8">
                    <Link href="/" aria-label="Back to Gesmax by Bogital homepage" className="flex items-center justify-center flex-shrink-0">
                        <div className="mx-auto h-24 w-48 relative cursor-pointer">
                            <Image
                                layout="fill"
                                src={logoImage}
                                className="object-contain"
                                alt="Logo - Taroungamograph by Tarounga Mbaye "
                            />
                        </div>
                    </Link>

                    <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                        {
                            routes.map(route => (
                                <li key={route.name} className="cursor-pointer">
                                    <Link href={route.path}>
                                        <span className="px-4">
                                            {route.name}
                                        </span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* <ul className="flex flex-wrap mx-auto pl-3 space-x-4 lg:space-x-8">
                    <li>
                        <a href="#">Instagram</a>
                    </li>
                    <li>
                        <a href="#">Facebook</a>
                    </li>
                    <li>
                        <a href="#">Twitter</a>
                    </li>
                </ul> */}
            </div>
            <p className="text-xs text-center pt-4 p-2 md:pt-2">Coded with ?????? by <a href="https://bogital.com">Bogital</a></p>
        </footer>
    )
}


export default Footer