'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

//* Links de navegación
const links:any = [
    {key:'home', name:'Home', url:'/'},
    {key:'about', name:'About', url:'/about'}
];

export default function NavBarComponent(){
    const pathName = usePathname()
    console.log(pathName)
    return (
        <header className="bg-header-bg bg-auto bg-no-repeat bg-bottom bg-fixed h-96 static">
            <nav className="flex flex-row justify-center bg-transparent border rounded-lg border-radius border-gray-500 p-5 backdrop-blur-md backdrop-filter fixed top-5 left-10 right-10 z-10">
                <ul className="flex space-x-4">
                {links.map(({key, url, name}:any) => (
                        <li key={key}>
                            <Link
                                href={url}
                                className={`text-white hover:text-blue-400 transition duration-300 ease-in-out
                                    ${pathName === url ? 'text-blue-500' : 'text-white'}
                                `}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
            
    )
}