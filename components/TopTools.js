"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {  Canva, GitExplorer, Locofy, Undraw, Patterns, WebAi, Blush, Codepen, Dribbble, Figma, Framer, Freecodecamp, Iconify, Obsidian, Openmoji, Storyset, W3Schools, } from '@/assets'


const TopToolsData = [{
  id: 1,
  imgSrc: Openmoji,
  itemLink: 'https://www.openmoji.org',
  tag: "Icons",
  tagName: "All",
  title: "Openmoji",
  text: "Openmoji is website where you can get handcrafted and SVG designed emojis. Their non-facial emojis are also well designed to be used as icons",
},
{
  id: 2,
  imgSrc: Patterns,
  itemLink: 'https://www.patterns.dev',
  tag: 'Productivity',
  title: 'Patterns.dev',
  text: 'Patterns.dev is a valuable resource for web developers and designers, providing a collection of design patterns and components for building web apps',
},
{
  id: 3,
  imgSrc: Canva,
  itemLink: 'https://www.canva.com',
  tag: 'Design',
  title: 'Canva',
  text: 'Canva is a very powerful tool that helps you to create professional designs with the help of thousands of professional templates and designs',
},
{
  id: 4,
  imgSrc: Framer,
  itemLink: 'https://www.framer.com',
  tag: 'Design',
  title: 'Framer UI',
  text: 'Framer is a free platform that allows you to create realistic UI and UX designs, for any type of app or website, that are interactive from the start',
},
{
  id: 5,
  imgSrc: Undraw,
  itemLink: 'https://www.undraw.co',
  tag: 'Illustration',
  title: 'Undraw',
  text: 'Undraw is a collection of beautiful SVG images/illustrations which you can customize to create better websites, products and visually representations',
},
{
  id: 6,
  imgSrc: Iconify,
  itemLink: 'https://www.iconify.design',
  tag: 'Icon',
  title: 'Iconify',
  text: 'Iconify is an Open Source project with over thousnad of icons housed in one framework. There are also different icon categories for different projects ',
},
];

const TopTools = () => {
  return (
    <div
      className='py-16 grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-x-8 xl:gap-x-16 lg:gap-x-8 gap-y-24 focus:outline-none'
    >
      {TopToolsData.map((item, index) => (
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
          key={index}
          className='border-primary/80 border dark:border-purple-400 rounded-lg max-w-sm mx-auto'
        >
          <Link href={item.itemLink} target="_blank">
            <Image src={item.imgSrc} alt={item.title} priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className='rounded-t-lg max-h-48 h-48' />
          </Link>
          <div className='pt-6 xl:pt-8 pb-8 px-6 xl:px-8 xs:px-6 text-dark dark:text-light'>
            <span className='py-2 px-2 !text-primary dark:!text-white bg-primary/10  dark:bg-purple-700 rounded-md text-sm md:text-base sm:text-sm xs:text-xs font-semibold'>{item.tag}</span>
            <Link href={item.itemLink} target="_blank">
              <h4 className='text-3xl lg:text-2xl md:text-4xl sm:text-3xl xs:text-2xl font-bold mt-3 mb-2 hover:underline hover:underline-offset-2'>{item.title}</h4>
            </Link>
            <p className='font-medium text-base md:text-lg sm:text-base'>{item.text}</p>
          </div>
        </motion.div>
      ))
      }
    </div>
  )
}

export default TopTools