import React from 'react'
import Logo from '../assets/Logo.png'
import { FaSearch } from "react-icons/fa";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { RiMenuFoldLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Nav = () => {

    const navigate = useNavigate(); // ✅ FIX

    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'Products', path: '/' },
        { name: 'Contact', path: '/' },
        { name: 'About', path: '/' },
    ];

    const ref = React.useRef(null)

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {

        // ✅ FIX scroll event
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <div ref={ref} >
            <nav className={`fixed h-[80px] top-0 left-0 bg-white w-full flex items-center justify-between px-4 md:px-4 lg:px-24 xl:px-32 transition-all duration-500 z-50`}>

                {/* Logo */}
                <a href="https://prebuiltui.com" className="flex items-center gap-2">
                    <img className='w-[100px] h-[60px]' src={Logo} alt="" />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.`}>
                            {link.name}
                            <div className={`h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}
                    <button className={`border border-black px-4 py-1 text-sm font-light rounded-full cursor-pointer  transition-all`}>
                        New Launch
                    </button>
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    <FaSearch className='text-white' />
                    <button
                        onClick={() => navigate("/login")}
                        className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 border border-black`}
                    >
                        Login
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex  items-center md:hidden">
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)} className={`w-[50px] h-[50px] cursor-pointer border border-white flex justify-center items-center rounded-md  ${isScrolled ? "invert" : ""}`}>

                        <RiMenuFoldLine className='text-[30px] text-white' />

                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>

                    <button className="absolute flex items-center justify-between w-full top-4 px-3" onClick={() => setIsMenuOpen(false)}>
                        <a href="https://prebuiltui.com" className="flex items-center gap-2">
                            <img className='w-[100px] h-[60px]' src={Logo} alt="" />
                        </a>
                        <div className='border border-black p-2 rounded-md' >
                            <RiMenuUnfoldLine className='text-[30px]' />
                        </div>
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}

                    <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                        New Launch
                    </button>

                    <button
                        onClick={() => {
                            setIsMenuOpen(false);
                            navigate("/login");
                        }}
                        className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500"
                    >
                        Login
                    </button>

                </div>
            </nav>
        </div>
    );
}

export default Nav
