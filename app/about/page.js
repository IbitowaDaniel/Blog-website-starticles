import Head from "next/head"
import Link from "next/link"


const About = () => {
  return (
    <>
      <Head>
        <title> StarTicles | About Page</title>
        <meta name="description" content="Learning what StarTicles is all about" />
      </Head>

      <main className="bg-light dark:bg-dark text-dark dark:text-light min-h-screen">
        <div className="flex flex-col items-center justify-center w-full text-center pt-20 pb-40 max-w-4xl mx-auto lg:max-w-3xl md:max-w-2xl px-14 md:px-10 xs:px-8">
          <h1 className="w-full font-bold text-8xl mb-10 xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl sm:mb-8 drop-shadow-[0_8px_0_rgb(195,165,245)] xl:drop-shadow-[0_6px_0_rgb(195,165,245)] md:drop-shadow-[0_4px_0_rgb(195,165,245)] dark:drop-shadow-[0_8px_0_rgb(105,45,202)] xl:dark:drop-shadow-[0_6px_0_rgb(105,45,202)] md:dark:drop-shadow-[0_4px_0_rgb(105,45,202)]">
            Welcome To <br /> StarTicles
          </h1>

          <div className="!text-left text-lg xs:text-base font-medium">
            <p className="mb-12 lg:mb-8"><span className="text-6xl md:text-5xl sm:text-4xl xs:text-3xl">H</span>ey there, fellow enthusiasts of the digital realm! I am thrilled to unveil my brainchild, StarTicles, a personal blog page that's aimed at sharing rich knowledge on all things Web Development. Join me as we traverse the intricate landscapes of coding, design, and everything tech-related that makes the internet the mesmerizing realm it is today.</p>
            <p className="my-8 lg:my-6">My name is Daniel and my developer journey started in 2020 during the Corona Virus Lockdown. Since then, my hunger for tech and coding hasn't been satisfied. The endless possibilities, the creative freedom, and the power to bring ideas to life through lines of code fascinated me like nothing before. StarTicles is just an extension and manifestation of my unwavering love for all things web</p>
            <p className="my-12 lg:my-8">I hope you enjoy the articles and find the resources section useful. If you want to see some of my personal projects, 
              <Link href="/" target="_blank" className="underline text-primary font-bold hover:text-slate-800 dark:text-purple-400 dark:hover:text-purple-200">please click on this link</Link></p>
          </div>
        </div> 
      </main>
    </>
  )
}

export default About