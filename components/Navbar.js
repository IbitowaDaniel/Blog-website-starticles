"use client"
import Link from "next/link"
import Image from "next/image"
import { LogoLight, LogoDark } from "@/assets"
import { usePathname } from "next/navigation"
import { SunIcon, MoonIcon } from "./Icons"
import useThemeSwitcher from "./hooks/useThemeSwitcher"
import { useState } from "react"
import Modal from "./Modal"


const CustomLink = ({ href, className, underLineColor, title }) => {

  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <>
      <Link href={href} className={`${className} font-semibold relative group`}>
        {title}
        <span className={`h-[2px] inline-block ${underLineColor} dark:bg-purple-400 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${isActive ? "w-full" : "w-0"}`}>
          &nbsp;
        </span>
      </Link>
    </>
  )
}

const CustomMobileLink = ({ href, title, className, underLineColor, toggle }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  const handleClick = () => {
    toggle();
  }

  return (
    <Link href={href} className={`${className} relative group font-semibold text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span className={`h-[2px] inline-block ${underLineColor} absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${isActive ? "w-full" : "w-0"}`}>
        &nbsp;
      </span>
    </Link>
  )
}

const Navbar = () => {

  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>

      <header className="w-full bg-light dark:bg-dark text-dark dark:text-light">
        <div className="max-w-7xl w-full mx-auto px-14 md:px-10 xs:px-4 py-4 flex justify-between">

          <a href="https://daniel-ibitowa.vercel.app" target="_blank">
            <Image src={mode === "dark" ? LogoDark : LogoLight} alt="Logo" className="w-56 xs:w-40 max-h-16" width={160} priority />
          </a>

          <div className="flex items-center justify-between">
            <button className="hidden flex-col justify-center items-left lg:flex" onClick={handleClick}>
              <span className={`bg-dark dark:bg-light block h-0.5 w-4 transition-300 transition-all ease-out rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-dark dark:bg-light block h-0.5 w-6 transition-300 transition-all ease-out rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-dark dark:bg-light block h-0.5 w-4 ml-[0.5rem] transition-300 transition-all ease-out rounded-sm ${isOpen ? '-rotate-45 -translate-y-1 !ml-0' : 'translate-y-0.5'}`}></span>
            </button>

            <nav className="w-full flex justify-between items-center lg:hidden">
              <CustomLink href="/" title="Home" className="mr-4" underLineColor="bg-primary" />
              <CustomLink href="/articles" title="Articles" className="mx-4" underLineColor="bg-secondary" />
              <CustomLink href="/resources" title="Resources" className="mx-4" underLineColor="bg-red" />
              <CustomLink href="/about" title="About" className="ml-4" underLineColor="bg-dark" />
            </nav>

            <a
              href="mailto:danielibitowa@gmail.com"
              className='block !relative flex-shrink-0 ml-6 bg-dark text-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:bg-light hover:text-dark hover:dark:text-light hover:dark:border-light border border-solid border-transparent hover:border-dark lg:hidden p-2 px-4 rounded-md text-lg font-semibold'
            >
              Hire Me
              <span className="absolute inline-block -top-1 -right-1 bg-purple-400 rounded-full w-4 h-4" />
              <span className="absolute -top-2 -right-2 bg-primary rounded-full w-6 h-6 animate-playPulseAnim" />
            </a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-6 p-1 inline-block flex-shrink-0 focus:outline-none rounded ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
              aria-label="light-mode dark-mode button">
              {
                mode === "dark" ? <SunIcon className={"w-5 -rotate-90 fill-dark"} />
                  : <MoonIcon className={"w-6 -rotate-90 fill-dark"} />
              }
            </button>
          </div>

        </div>

        {
          isOpen ?
            <Modal handleClose={handleClick}>
              <nav className="flex items-center flex-col justify-center">
                <CustomMobileLink href="/" title="Home" toggle={handleClick} underLineColor="bg-purple-400 dark:bg-purple-700" />
                <CustomMobileLink href="/articles" title="Articles" toggle={handleClick} underLineColor="bg-secondary dark:bg-purple-700" />
                <CustomMobileLink href="/resources" title="Resources" toggle={handleClick} underLineColor="bg-red dark:bg-purple-700" />
                <CustomMobileLink href="/about" title="About" toggle={handleClick} underLineColor="dark:bg-transparent" />

                <Link
                  href="/"
                  className='flex !relative bg-light dark:bg-dark text-dark dark:text-light hover:bg-dark dark:hover:bg-light hover:text-light dark:hover:text-dark hover:border-light dark:hover:border-dark border border-solid duration-300 p-2 px-4 rounded-md text-lg font-semibold'
                >
                  Hire Me
                  <span className="absolute inline-block -top-1 -right-1 bg-purple-400 rounded-full w-4 h-4" />
                  <span className="absolute -top-2 -right-2 bg-primary rounded-full w-6 h-6 animate-playPulseAnim" />
                </Link>
              </nav>
            </Modal>

            : null
        }


      </header>
    </>
  )
}

export default Navbar