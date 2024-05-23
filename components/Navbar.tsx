"use client" // this is a client component
import React, {useState} from "react"
import { Link } from "react-scroll/modules"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import logo from "../logo.jpg"
import title from "../title.jpg"

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        page: "home",
    },
    {
        label: "About",
        page: "about",
    },
    {
        label: "Projects",
        page: "projects",
    },
    {
        label: "Certifications",
        page: "certifications",
    },
]

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [navbar, setNavbar] = useState(false)

    return (
        <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className="container flex items-center space-x-2">
                            <img src={logo.src} alt="" width={70} height={70} />
                            <img src={title.src} alt="" width={90} height={70} />
                        </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                            onClick={() => setNavbar(!navbar)}>
                            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        navbar ? "block" : "hidden"
                        }`}>
                        <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-neutral-900">
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Link
                                    key={idx}
                                    to={item.page}
                                    className={
                                      "block lg:inline-block text-neutral-900 p-2 rounded hover:text-white hover:bg-color1 cursor-pointer" 
                                    }
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    onClick={() => setNavbar(!navbar)}>
                                        {item.label}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navbar