import HeaderMessage from "@/components/HeaderMessage"
import ResourcesTab from "@/components/ResourcesTab"
import Head from "next/head"


const Resources = () => {
  return (
    <>
      <Head>
        <title> StarTicles | Resources Page</title>
        <meta name="description" content="Discover amazing tools and resources that you can use on your next project" />
      </Head>

      <main className="min-h-screen bg-light dark:bg-dark">
        <HeaderMessage
          bgColor="bg-red"
          text="Discover Great Tools And Utils You Can Use In Your Next Projects"
        />

        <div className="max-w-7xl mx-auto w-full px-28 lg:px-16 md:px-12 xs:px-6 min-h-screen">
          <div className="w-full mt-24">
            <ResourcesTab />
          </div>
        </div>

      </main>
    </>
  )
}

export default Resources