import Head from "next/head"
import HeaderMessage from "@/components/HeaderMessage"
import TopTools from "@/components/TopTools"
import Link from "next/link"
import { HiLink } from "react-icons/hi"
import Categories from "@/components/Categories"
import Image from "next/image"
import { Article1 } from "@/assets"
import TopArticles from "@/components/TopArticles"

export default function Home() {
  return (
    <>
      <Head>
        <title>StarTicles | A Personal Blog Website built with Nextjs</title>
        <meta name="description" content="A place to find interesting and educational articles on Web Development" />
      </Head>

      <main className="min-h-screen bg-light dark:bg-dark">
        <HeaderMessage
          bgColor="bg-primary"
          text='Discover Interesting Articles, Tools And Resources On All Things Web'
        />

        <div className="w-full max-w-7xl mx-auto min-h-screen px-28 lg:px-16 md:px-12 xs:px-6 pt-20 pb-24">
          <h1 className="font-bold text-dark dark:text-light text-[5.4rem] leading-[5rem] max-w-[80vw] lg:max-w-[75vw] md:text-center md:max-w-full mb-10 xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl sm:mb-8 drop-shadow-[0_8px_0_rgb(195,165,245)] xl:drop-shadow-[0_6px_0_rgb(195,165,245)] md:drop-shadow-[0_4px_0_rgb(195,165,245)] dark:drop-shadow-[0_8px_0_rgb(105,45,202)] xl:dark:drop-shadow-[0_6px_0_rgb(105,45,202)] md:dark:drop-shadow-[0_4px_0_rgb(105,45,202)]">
            ALL MEN OF ACTION ARE DREAMERS.
          </h1>

          <div className="grid grid-cols-3 lp:grid-cols-1">
            <div className="col-span-2 border-dark dark:border-light border-2 lp:border-0 mr-20 lp:mr-0 lp:mb-4 rounded-lg">
              <Image src={Article1} alt="Article Image" className="h-full rounded-lg" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </div>

            <TopArticles />
          </div>

        </div>

        <div className="w-full max-w-7xl mx-auto px-28 lg:px-16 md:px-12 xs:px-6 pt-16 relative pb-24">
          <h3 className="headingFontSize font-bold mb-8 xs:mb-0 pb-4 md:pb-2 border-b-4 text-dark dark:text-white border-primary dark:border-purple-400 inline-block">Categories</h3>
          <Categories />
        </div>

        <div className="w-full max-w-7xl mx-auto px-28 lg:px-16 md:px-12 xs:px-6 min-h-screen pt-16 relative pb-64">
          <h3 className="headingFontSize font-bold mb-8 lg:mb-0 pb-4 md:pb-2 border-b-4 text-dark dark:text-white border-primary dark:border-purple-400 inline-block">Top Tools</h3>
          <TopTools />

          <div className="flex justify-end items-end mt-6">
            <Link href="/resources" className="text-2xl sm:text-xl font-semibold xs:text-lg" >
              <p className="text-black dark:text-white border-primary dark:border-purple-400 border-b-2 inline-block">See More Tools</p>
              <HiLink className="text-primary dark:text-purple-400 inline-block ml-1" />
            </Link>
          </div>

        </div>
      </main>
    </>
  )
}
