"use client"
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import { Article1, Article2, Article2White, Article3, Article4, Article5 } from '@/assets'
import { motion } from 'framer-motion'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function ArticlesTab() {
  let [categories] = useState({

    All: [
      {
        id: 1,
        imgSrc: Article1,
        itemLink: '/',
        tag: "Web",
        tagName: 'All',
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 2,
        imgSrc: Article2White,
        itemLink: '/',
        tag: "Tutorials",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 3,
        imgSrc: Article3,
        itemLink: '/',
        tag: "Web Development",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 4,
        imgSrc: Article4,
        itemLink: '/',
        tag: "Blockchain",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 5,
        imgSrc: Article5,
        itemLink: '/',
        tag: "Web",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 6,
        imgSrc: Article2,
        itemLink: '/',
        tag: "Web",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 7,
        imgSrc: Article1,
        itemLink: '/',
        tag: "Tutorials",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 8,
        imgSrc: Article4,
        itemLink: '/',
        tag: "Blockchain",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 9,
        imgSrc: Article5,
        itemLink: '/',
        tag: "Web Development",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 10,
        imgSrc: Article3,
        itemLink: '/',
        tag: "Tutorials",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 11,
        imgSrc: Article1,
        itemLink: '/',
        tag: "Blockchain",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
    ],
    "Web Development": [
      {
        id: 1,
        imgSrc: Article5,
        itemLink: '/',
        tag: "Web Development",
        tagName: "Web Development",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 2,
        imgSrc: Article4,
        itemLink: '/',
        tag: "Web Development",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 3,
        imgSrc: Article3,
        itemLink: '/',
        tag: "Web Development",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 4,
        imgSrc: Article2,
        itemLink: '/',
        tag: "Web Development",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 5,
        imgSrc: Article1,
        itemLink: '/',
        tag: "Web Development",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 6,
        imgSrc: Article5,
        itemLink: '/',
        tag: "Web Development",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 7,
        imgSrc: Article4,
        itemLink: '/',
        tag: "Web Development",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 8,
        imgSrc: Article2White,
        itemLink: '/',
        tag: "Web Development",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 9,
        imgSrc: Article1,
        itemLink: '/',
        tag: "Web Development",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 10,
        imgSrc: Article3,
        itemLink: '/',
        tag: "Web Development",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 11,
        imgSrc: Article5,
        itemLink: '/',
        tag: "Web Development",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
    ],
    "Web": [
      {
        id: 1,
        imgSrc: Article1,
        itemLink: '/',
        tag: "Web",
        tagName: "Web",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 2,
        imgSrc: Article3,
        itemLink: '/',
        tag: "Web",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 3,
        imgSrc: Article5,
        itemLink: '/',
        tag: "Web",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 4,
        imgSrc: Article2,
        itemLink: '/',
        tag: "Web",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 5,
        imgSrc: Article4,
        itemLink: '/',
        tag: "Web",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 6,
        imgSrc: Article1,
        itemLink: '/',
        tag: "Web",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 7,
        imgSrc: Article5,
        itemLink: '/',
        tag: "Web",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 8,
        imgSrc: Article3,
        itemLink: '/',
        tag: "Web",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 9,
        imgSrc: Article2White,
        itemLink: '/',
        tag: "Web",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 10,
        imgSrc: Article1,
        itemLink: '/',
        tag: "Web",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 11,
        imgSrc: Article4,
        itemLink: '/',
        tag: "Web",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
    ],
    "Blockchain": [
      {
        id: 1,
        imgSrc: Article1,
        itemLink: '/',
        tag: "Blockchain",
        tagName: "Blockchain",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 2,
        imgSrc: Article2,
        itemLink: '/',
        tag: "Blockchain",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 3,
        imgSrc: Article3,
        itemLink: '/',
        tag: "Blockchain",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 4,
        imgSrc: Article4,
        itemLink: '/',
        tag: "Blockchain",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 5,
        imgSrc: Article5,
        itemLink: '/',
        tag: "Blockchain",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 6,
        imgSrc: Article1,
        itemLink: '/',
        tag: "Blockchain",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 7,
        imgSrc: Article2White,
        itemLink: '/',
        tag: "Blockchain",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 8,
        imgSrc: Article3,
        itemLink: '/',
        tag: "Blockchain",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 9,
        imgSrc: Article4,
        itemLink: '/',
        tag: "Blockchain",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 10,
        imgSrc: Article1,
        itemLink: '/',
        tag: "Blockchain",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 11,
        imgSrc: Article5,
        itemLink: '/',
        tag: "Blockchain",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
    ],
    "Tutorials": [
      {
        id: 1,
        imgSrc: Article5,
        itemLink: '/',
        tagName: 'Tutorials',
        tag: "Tutorials",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 2,
        imgSrc: Article3,
        itemLink: '/',
        tag: "Tutorials",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 3,
        imgSrc: Article1,
        itemLink: '/',
        tag: "Tutorials",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 4,
        imgSrc: Article4,
        itemLink: '/',
        tag: "Tutorials",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 5,
        imgSrc: Article2,
        itemLink: '/',
        tag: "Tutorials",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 6,
        imgSrc: Article5,
        itemLink: '/',
        tag: "Tutorials",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 7,
        imgSrc: Article3,
        itemLink: '/',
        tag: "Tutorials",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 8,
        imgSrc: Article2White,
        itemLink: '/',
        tag: "Tutorials",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 9,
        imgSrc: Article1,
        itemLink: '/',
        tag: "Tutorials",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 10,
        imgSrc: Article3,
        itemLink: '/',
        tag: "Tutorials",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
      {
        id: 11,
        imgSrc: Article4,
        itemLink: '/',
        tag: "Tutorials",
        minuteRead: "0",
        title: "What is Lorem Ipsum and dolor sit ampiet from the past versions of intern",
      },
    ],
  })


  return (
    <div className="w-full max-w-full pt-16 relative pb-64">
      <Tab.Group>
        <Tab.List className="">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'mr-8 lg:mr-4 mt-6 md:mt-4 py-2 px-4 focus:outline-none font-semibold border border-secondary dark:border-transparent rounded-md text-base xl:text-sm xs:text-xs',
                  selected
                    ? 'text-white bg-secondary dark:bg-purple-500'
                    : 'text-secondary dark:text-white bg-secondary/10 hover:bg-secondary/20 dark:hover:bg-slate-900 dark:bg-slate-800'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-16">
          {Object.values(categories).map((items, idx) => (
            <Tab.Panel
              key={idx}
              className='grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-x-8 xl:gap-x-16 lg:gap-x-8 gap-y-24 focus:outline-none'
            >

              {items.map((item) => (
                <>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1, }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: Math.random(),
                    }}
                    viewport={{ once: true }}
                    key={item.id}
                    className='border-secondary/80 border dark:border-purple-400 rounded-lg max-w-sm mx-auto'
                  >
                    <Link href={`/articles${item.itemLink}`}>
                      <Image src={item.imgSrc} priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className='rounded-t-lg max-h-48 h-48' />
                    </Link>
                    <div className='pt-6 xl:pt-8 pb-8 px-6 xl:px-8 xs:px-6 text-dark dark:text-light'>
                      <div className='flex justify-between items-center'>
                        <span className='py-2 px-2 !text-secondary dark:!text-white bg-secondary/10  dark:bg-purple-700 rounded-md text-base lg:text-sm md:text-base sm:text-sm font-semibold'>{item.tag}</span>
                        <span className='font-medium text-base text-dark dark:text-light sm:text-sm'>{item.minuteRead} min read</span>
                      </div>
                      <Link href={`/articles${item.itemLink}`}>
                        <h3 className='text-xl xl:text-2xl lg:text-xl md:text-2xl sm:text-xl font-bold mt-3 mb-2 hover:underline hover:underline-offset-2'>{item.title}</h3>
                      </Link>
                      <p className='font-medium text-base md:text-lg sm:text-base'>{item.text}</p>
                    </div>
                  </motion.div>
                  <span className='absolute headingFontSize font-bold top-0 left-0 text-dark dark:text-light'>#{item.tagName}</span>
                </>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
