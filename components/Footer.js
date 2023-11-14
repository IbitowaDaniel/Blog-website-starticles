import Link from "next/link"



const Footer = () => {
  return (
    <footer className="bg-light dark:bg-dark w-full border-t-2 border-dark dark:border-light text-dark dark:text-light">
      <div className="max-w-7xl w-full mx-auto px-14 md:px-10 xs:px-4 pt-8 pb-6 md:pt-12 flex flex-row md:flex-col gap-y-4 md:text-center justify-between items-center text-base lg:text-sm md:text-base xs:text-sm">
        <div className="md:order-2 font-medium">
          {new Date().getFullYear()} &copy;DanielIbitowa.
        </div>

        <div className="font-semibold">
          <Link href='/' className={`mr-4 lg:mr-2`}>
            Home
          </Link>
          <Link href='/articles' className={`mx-4 lg:mx-2`}>
            Articles
          </Link>
          <Link href='/resources' className={`mx-4 lg:mx-2`}>
            Resources
          </Link>
          <Link href='/about' className={`ml-4 lg:mx-2`}>
            About
          </Link>
        </div>

        <Link href="mailto:danielibitowa@gmail.com" className=" md:order-1 underline underline-offset-2 font-medium">Send me a mail</Link>
      </div>
    </footer>
  )
}

export default Footer