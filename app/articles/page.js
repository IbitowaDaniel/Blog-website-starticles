import ArticlesTab from "@/components/ArticlesTab"
import HeaderMessage from "@/components/HeaderMessage"
import Head from "next/head"


const Articles = () => {
  return (
    <>
      <Head>
        <title> StarTicles | Articles Page</title>
        <meta name="description" content="Interesting and educational articles on Web Development and Blockhain" />
      </Head>

      <main className="min-h-screen bg-light dark:bg-dark">
        <HeaderMessage
          bgColor="bg-secondary"
          text="Top Notch Articles on Web Development, Blockchain and so on"
        />

        <div className="max-w-7xl mx-auto w-full px-28 lg:px-16 md:px-12 xs:px-6 min-h-screen">
          <div className="w-full mt-24">
            <ArticlesTab />
          </div>
        </div>

      </main>
    </>
  )
}

export default Articles