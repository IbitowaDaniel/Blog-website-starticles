import Link from "next/link"


const Categories = () => {
  return (
    <div className="mt-12 flex overflow-x-scroll text-dark dark:text-white">

      <Link href="/articles" className="flex-shrink-0">
        <div className="categoryText">All</div>
      </Link>

      <Link href="/articles" className="flex-shrink-0">
        <div className="categoryText">Web Development</div>
      </Link>

      <Link href="/articles"  className="flex-shrink-0">
        <div className="categoryText">Web</div>
      </Link>

      <Link href="/articles"  className="flex-shrink-0">
        <div className="categoryText">BlockChain</div>
      </Link>

      <Link href="/articles"  className="flex-shrink-0">
        <div className="categoryText">Tutorials</div>
      </Link>

    </div>

  )
}

export default Categories