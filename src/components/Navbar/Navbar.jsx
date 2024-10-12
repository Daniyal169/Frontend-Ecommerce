import React from 'react'
import { Menu, X } from 'lucide-react'
import logo from "../../asserts/logo.png"
import whatsapp from "../../asserts/whatsapp.png"
import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
import LogoutBtn from './LogoutBtn'

const menuItems = [
    {
        name: 'Home',
        to: '/',
    },
    {
        name: 'Menu',
        to: '/shop',
    },
    {
        name: 'Services',
        to: '#service',
    },
    {
        name: 'New',
        to: '#top',
    },
]

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const { isAuthenticated } = useAuth();

    return (
        <div className="relative w-full bg-white rounded-b-full ">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4  sm:px-6 lg:px-8 py-4">
                <div className="inline-flex items-center space-x-2">
                    <span>
                        <img src={logo} alt="" height={50} width={200} />
                    </span>
                </div>

                <div className="hidden lg:block">
                    <ul className="inline-flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.to}
                                    className="text-sm font-bold text-gray-900 hover:text-hoverColor"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:block mr-2">

                    {isAuthenticated ? (
                        <LogoutBtn />
                    ) : (
                        <>
                            <Link to="/signup">
                                <button type="button" className="nav-btn">
                                    Sign Up
                                </button>
                            </Link>
                            <Link to="/login">
                                <button type="button" className="nav-btn mx-2 my-0">
                                    Sign In
                                </button>
                            </Link>
                        </>
                    )}

                </div>
                <div className="lg:hidden">
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <span>
                                            <img src={logo} alt="" height={50} width={200} />
                                        </span>
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <X className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4">
                                        {menuItems.map((item) => (
                                            <Link
                                                key={Math.random}
                                                to={item.to}
                                                className="text-sm font-bold text-gray-900 hover:text-hoverColor"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                                {isAuthenticated ? (
                                    <LogoutBtn />
                                ) : (
                                    <>
                                        <Link to="/signup">
                                            <button type="button" className="nav-btn">
                                                Sign Up
                                            </button>
                                        </Link>
                                        <Link to="/login">
                                            <button type="button" className="nav-btn mx-2 my-0">
                                                Sign In
                                            </button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <a href={"//wa.me/923094161303"} >
                <img src={whatsapp} alt="" className='whatsapp' />
            </a>
        </div>
    )
}

export default Navbar