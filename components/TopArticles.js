import Image from "next/image";
import { Article2White, Article3, Article4, Article5 } from "@/assets";
import Link from "next/link";

const TopArticlesData = [{
  id: 1,
  imgSrc: Article5,
  itemLink: "/",
  minuteRead: 7,
  title: "What is Lorem Ipsum and dolor sit ampiet from the past",
},
{
  id: 2,
  imgSrc: Article3,
  itemLink: "/",
  minuteRead: 9,
  title: "What is Lorem Ipsum and dolor sit ampiet from the past",
},
{
  id: 3,
  imgSrc: Article4,
  itemLink: "/",
  minuteRead: 4,
  title: "What is Lorem Ipsum and dolor sit ampiet from the past",
},
{
  id: 4,
  imgSrc: Article2White,
  itemLink: "/",
  minuteRead: 5,
  title: "What is Lorem Ipsum and dolor sit ampiet from the past",
},
];

const TopArticles = () => {
  return (
    <div className="col-span-1 p-6 lp:mt-16 bg-purple-900/10 border-primary dark:border-purple-600 border dark:border-2 rounded-lg">
      <h2 className="font-bold text-xl lp:text-2xl xs:text-xl text-primary dark:text-light/80">Top Articles</h2>
      <div className="mt-2">
        {TopArticlesData.map((item, index) => (
          <div key={index} className={`grid grid-cols-2 lp:grid-cols-3 xs:grid-cols-1 border-b-2 border-primary/60 dark:border-purple-600 gap-x-4 lp:gap-x-8 md:gap-x-4 py-4 lp:pb-6 ${index !== 3 ? "border-b-2" : "border-none pb-0"}`}>
            <div className="flex items-center justify-center xs:hidden">
              <Link href={`/articles${item.itemLink}`} className="">
                <Image src={item.imgSrc} alt={item.imgSrc} className="rounded-lg" />
              </Link>
            </div>
            <div className="lp:flex flex-col items-start justify-center lp:col-span-2">
              <Link href={`/articles${item.itemLink}`} className="">
                <h3 className="text-sm lp:text-2xl md:text-xl sm:text-lg xs:text-base font-bold text-dark dark:text-light hover:underline-offset-2 hover:underline">{item.title}</h3>
              </Link>
              <span className="text-primary dark:text-purple-400 text-xs lp:text-sm xs:text-xs lp:mt-1 font-bold">{item.minuteRead} mins read</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopArticles