import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi';
import logoLight from '../../public/images/logolight.svg';
import logoDark from '../../public/images/logodark.svg';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

function AppHeader() {
    const [showMenu, setShowMenu] = useState(false);
    const [activeTheme, setTheme] = useThemeSwitcher();

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    function showSendEmailModel() {
        window.location.href = "mailto:matthieu.mombert@edu.devinci.fr?subject=First Contact";
    }

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            id="nav"
            className="sm:container sm:mx-auto"
        >
            {/* Header */}
            <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
                <div className="flex justify-between items-center px-4 sm:px-0">
                    <div>
                        <Link href="/">
                            {activeTheme === 'dark' ? (
                                <Image
                                    src={logoDark}
                                    className="w-36 cursor-pointer"
                                    alt="Dark Logo"
                                    width={150}
                                    height={120}
                                />
                            ) : (
                                <Image
                                    src={logoLight}
                                    className="w-36 cursor-pointer"
                                    alt="Light Logo"
                                    width={150}
                                    height={120}
                                />
                            )}
                        </Link>
                    </div>

                    {/* Theme switcher small screen */}
                    <div
                        onClick={() => setTheme(activeTheme)}
                        aria-label="Theme Switcher"
                        className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
                    >
                        {activeTheme === 'dark' ? (
                            <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
                        ) : (
                            <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
                        )}
                    </div>

                    {/* Small screen hamburger menu */}
                    <div className="sm:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="focus:outline-none"
                            aria-label="Hamburger Menu"
                        >
                            <FiMenu className="text-3xl" />
                        </button>
                    </div>
                </div>

                {/* Header links small screen */}
                <div className={showMenu ? 'block' : 'hidden'}>
                    <div className="block text-lg text-primary-dark dark:text-ternary-light sm:mx-4 mb-2 sm:py-2">
                        <Link href="/projects" aria-label="Projects">
                            Projects
                        </Link>
                    </div>
                    <div className="block text-lg text-primary-dark dark:text-ternary-light sm:mx-4 mb-2 sm:py-2">
                        <Link href="/about" aria-label="About Me">
                            About Me
                        </Link>
                    </div>
                    <div className="block text-lg text-primary-dark dark:text-ternary-light sm:mx-4 mb-2 sm:py-2">
                        <Link href="/contact" aria-label="Contact">
                            Infos
                        </Link>
                    </div>
                    <button
                        onClick={showSendEmailModel}
                        className="text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 w-24"
                        aria-label="Hire Me Button"
                    >
                        Send Me An Email
                    </button>
                </div>

                {/* Header links large screen */}
                <div className="hidden sm:flex p-5 justify-center items-center">
                    <div className="text-lg text-primary-dark dark:text-ternary-light sm:mx-4 mb-2 sm:py-2">
                        <Link href="/projects">Projects</Link>
                    </div>
                    <div className="text-lg text-primary-dark dark:text-ternary-light sm:mx-4 mb-2 sm:py-2">
                        <Link href="/about">About Me</Link>
                    </div>
                    <div className="text-lg text-primary-dark dark:text-ternary-light sm:mx-4 mb-2 sm:py-2">
                        <Link href="/contact">Infos</Link>
                    </div>
                </div>

                {/* Header right section button */}
                <div className="hidden sm:flex">
                    <button
                        onClick={showSendEmailModel}
                        className="text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5"
                        aria-label="Hire Me Button"
                    >
                        Send Me An Email
                    </button>
                    <div
                        onClick={() => setTheme(activeTheme)}
                        aria-label="Theme Switcher"
                        className="ml-8 p-3 shadow-sm rounded-xl cursor-pointer"
                    >
                        {activeTheme === 'dark' ? (
                            <FiMoon className="text-ternary-dark" />
                        ) : (
                            <FiSun className="text-gray-200" />
                        )}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}

export default AppHeader;
