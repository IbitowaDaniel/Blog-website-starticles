"use client"
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import {  Canva, GitExplorer, Locofy, Undraw, Patterns, WebAi, Blush, Codepen, Dribbble, Figma, Framer, Freecodecamp, Iconify, Obsidian, Openmoji, Storyset, W3Schools, } from '@/assets'
import { motion } from 'framer-motion'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ResourcesTab() {
  let [categories] = useState({
    All: [
      {
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
      {
        id: 7,
        imgSrc: Locofy,
        itemLink: 'https://www.locofy.ai',
        tag: 'Design',
        title: 'Locofy',
        text: 'Locofy is a powerful plugin that turns your designs into production-ready frontend code for mobile apps and web, automatically saving the stress of writing code',
      },
      {
        id: 8,
        imgSrc: Obsidian,
        itemLink: 'https://www.obsidian.md',
        tag: 'Productivity',
        title: 'Obsidian',
        text: 'The Obsidian is a powerful and extensible knowledge base that works on top of your local folder of plain text files. A great note taking app',
      },
      {
        id: 9,
        imgSrc: GitExplorer,
        itemLink: 'https://www.gitexplorer.com',
        tag: 'Productivity',
        title: 'Git Explorer',
        text: 'Always forgetting Git commands? Git Explorer is a web-based tool that allows developers to discover and explore GitHub commands with simple explanation',
      },
      {
        id: 10,
        imgSrc: Storyset,
        itemLink: 'https://www.storyset.com',
        tag: 'Illustration',
        title: 'Story Set',
        text: 'One of the best places to find customizable illustrations. You can edit and even animate your favorite illustrations with storyset',
      },
      {
        id: 11,
        imgSrc: Blush,
        itemLink: 'https://www.blush.design',
        tag: 'Illustration',
        title: 'Blush.design',
        text: 'One of the best places to find customizable illustrations. Play with customizable graphics and amazing designs made by artists across the globe',
      },
      {
        id: 12,
        imgSrc: Codepen,
        itemLink: 'https://www.codepen.io',
        tag: 'Code Editor',
        title: 'Codepen',
        text: 'Codepen is a social development environment for front-end designers and developers. You can build, deploy responsive Front-End Websites with this cool code editor',
      },
      {
        id: 13,
        imgSrc: Figma,
        itemLink: 'https://www.figma.com',
        tag: 'Design',
        title: 'Figma',
        text: 'Figma is the leading collaborative design tool for building meaningful products. Seamlessly design, prototype, develop and collect feedbacks',
      },
      {
        id: 14,
        imgSrc: W3Schools,
        itemLink: 'https://www.w3schools.com',
        tag: 'Learning',
        title: 'W3Schools',
        text: 'W3Schools is a great platform optimized for learning and training with simplified examples for better understanding. They are the largest web developer site',
      },
      {
        id: 15,
        imgSrc: Freecodecamp,
        itemLink: 'https://www.freecodecamp.org',
        tag: 'Learning',
        title: 'FreeCodeCamp',
        text: 'FreeCodeCamp is a 100% free learning plaform with courses, projects and even certifications. FreeCodeCamp is the perfect learning platform for aspiring software developers',
      },
      {
        id: 16,
        imgSrc: WebAi,
        itemLink: 'https://www.10web.io',
        tag: 'AI',
        title: '10Web.io',
        text: 'With 10Web you can build or recreate any website with AI and AI generated content and images in essentially minutes. Customize it with 10Web editor based on Elementor.',
      },
      {
        id: 17,
        imgSrc: Dribbble,
        itemLink: 'https://www.dribbble.com',
        tag: 'Design',
        title: 'Dribbble',
        text: "Dribbble is the world's leading community for creatives to share, grow and get hired. Hundreds of millions of people loof for design and inspiration and feedback on Dribbble",
      },
    ],
    Icons: [
      {
        id: 1,
        imgSrc: Openmoji,
        itemLink: 'https://www.openmoji.org',
        tag: "Icons",
        tagName: 'Icons',
        title: "Openmoji",
        text: "Openmoji is website where you can get handcrafted and SVG designed emojis. Their non-facial emojis are also well designed to be used as icons",
      },
      {
        id: 2,
        imgSrc: Iconify,
        itemLink: 'https://www.iconify.design',
        tag: 'Icon',
        title: 'Iconify',
        text: 'Iconify is an Open Source projects with over thousnad of icons housed in one framework. There are also different icon categories for different projects ',
      },
      {
        id: 3,
        imgSrc: Undraw,
        itemLink: 'https://www.undraw.co',
        tag: 'Illustration',
        title: 'Undraw',
        text: 'Undraw is a collection of beautiful SVG images/illustrations which you can customize to create better websites, products and visually representations',
      },
      {
        id: 4,
        imgSrc: Storyset,
        itemLink: 'https://www.storyset.com',
        tag: 'Illustration',
        title: 'Story Set',
        text: 'One of the best places to find customizable illustrations. You can edit and even animate your favorite illustrations with storyset',
      },
      {
        id: 5,
        imgSrc: Blush,
        itemLink: 'https://www.blush.design',
        tag: 'Illustration',
        title: 'Blush.design',
        text: 'One of the best places to find customizable illustrations. Play with customizable graphics and amazing designs made by artists across the globe',
      },
    ],
    Illustrations: [
      {
        id: 1,
        imgSrc: Undraw,
        itemLink: 'https://www.undraw.co',
        tag: 'Illustration',
        tagName: 'Illustrations',
        title: 'Undraw',
        text: 'Undraw is a collection of beautiful SVG images/illustrations which you can customize to create better websites, products and visually representations',
      },
      {
        id: 2,
        imgSrc: Storyset,
        itemLink: 'https://www.storyset.com',
        tag: 'Illustration',
        title: 'Story Set',
        text: 'One of the best places to find customizable illustrations. You can edit and even animate your favorite illustrations with storyset',
      },
      {
        id: 3,
        imgSrc: Blush,
        itemLink: 'https://www.blush.design',
        tag: 'Illustration',
        title: 'Blush.design',
        text: 'One of the best places to find customizable illustrations. Play with customizable graphics and amazing designs made by artists across the globe',
      },
    ],
    Design: [
      {
        id: 1,
        imgSrc: Patterns,
        itemLink: 'https://www.patterns.dev',
        tag: 'Productivity',
        tagName: 'Design',
        title: 'Patterns.dev',
        text: 'Patterns.dev is a valuable resource for web developers and designers, providing a collection of design patterns and components for building web apps',
      },
      {
        id: 2,
        imgSrc: Canva,
        itemLink: 'https://www.canva.com',
        tag: 'Design',
        title: 'Canva',
        text: 'Canva is a very powerful tool that helps you to create professional designs with the help of thousands of professional templates and designs',
      },
      {
        id: 3,
        imgSrc: Framer,
        itemLink: 'https://www.framer.com',
        tag: 'Design',
        title: 'Framer UI',
        text: 'Framer is a free platform that allows you to create realistic UI and UX designs, for any type of app or website, that are interactive from the start',
      },
      {
        id: 4,
        imgSrc: Dribbble,
        itemLink: 'https://www.dribbble.com',
        tag: 'Design',
        title: 'Dribbble',
        text: "Dribbble is the world's leading community for creatives to share, grow and get hired. Hundreds of millions of people loof for design and inspiration and feedback on Dribbble",
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
        imgSrc: Locofy,
        itemLink: 'https://www.locofy.ai',
        tag: 'Design',
        title: 'Locofy',
        text: 'Locofy is a powerful plugin that turns your designs into production-ready frontend code for mobile apps and web, automatically saving the stress of writing code',
      },
      {
        id: 7,
        imgSrc: Storyset,
        itemLink: 'https://www.storyset.com',
        tag: 'Illustration',
        title: 'Story Set',
        text: 'One of the best places to find customizable illustrations. You can edit and even animate your favorite illustrations with storyset',
      },
      {
        id: 8,
        imgSrc: Blush,
        itemLink: 'https://www.blush.design',
        tag: 'Illustration',
        title: 'Blush.design',
        text: 'One of the best places to find customizable illustrations. Play with customizable graphics and amazing designs made by artists across the globe',
      },
      {
        id: 9,
        imgSrc: Figma,
        itemLink: 'https://www.figma.com',
        tag: 'Design',
        title: 'Figma',
        text: 'Figma is the leading collaborative design tool for building meaningful products. Seamlessly design, prototype, develop and collect feedbacks',
      },
    ],
    AI: [
      {
        id: 1,
        imgSrc: WebAi,
        itemLink: 'https://www.10web.io',
        tag: 'AI',
        tagName: 'AI',
        title: '10Web.io',
        text: 'With 10Web you can build or recreate any website with AI and AI generated content and images in essentially minutes. Customize it with 10Web editor based on Elementor.',
      },
    ],
    "Code Editor": [
      {
        id: 1,
        imgSrc: Codepen,
        itemLink: 'https://www.codepen.io',
        tag: 'Code Editor',
        tagName: 'Code Editor',
        title: 'Codepen',
        text: 'Codepe is a social development environment for front-end designers and developers. You can build, deploy responsive Front-End Websites with this cool code editor',
      },
    ],
    Productivity: [
      {
        id: 1,
        imgSrc: Patterns,
        itemLink: 'https://www.patterns.dev',
        tag: 'Productivity',
        tagName: 'Productivity',
        title: 'Patterns.dev',
        text: 'Patterns.dev is a valuable resource for web developers and designers, providing a collection of design patterns and components for building web apps',
      },
      {
        id: 2,
        imgSrc: Obsidian,
        itemLink: 'https://www.obsidian.md',
        tag: 'Productivity',
        title: 'Obsidian',
        text: 'The Obsidian is a powerful and extensible knowledge base that works on top of your local folder of plain text files. A great note taking app',
      },
      {
        id: 3,
        imgSrc: GitExplorer,
        itemLink: 'https://www.gitexplorer.com',
        tag: 'Productivity',
        title: 'Git Explorer',
        text: 'Always forgetting Git commands? Git Explorer is a web-based tool that allows developers to discover and explore GitHub commands with simple explanation',
      },
    ],
    "No Code": [
      {
        id: 1,
        imgSrc: Figma,
        itemLink: 'https://www.figma.com',
        tag: 'Design',
        tagName: 'No Code',
        title: 'Figma',
        text: 'Figma is the leading collaborative design tool for building meaningful products. Seamlessly design, prototype, develop and collect feedbacks',
      },
      {
        id: 2,
        imgSrc: Framer,
        itemLink: 'https://www.framer.com',
        tag: 'Design',
        title: 'Framer UI',
        text: 'Framer is a free platform that allows you to create realistic UI and UX designs, for any type of app or website, that are interactive from the start',
      },
      {
        id: 3,
        imgSrc: Locofy,
        itemLink: 'https://www.locofy.ai',
        tag: 'Design',
        title: 'Locofy',
        text: 'Locofy is a powerful plugin that turns your designs into production-ready frontend code for mobile apps and web, automatically saving the stress of writing code',
      },
    ],
    "Educational Resources": [
      {
        id: 1,
        imgSrc: Freecodecamp,
        itemLink: 'https://www.freecodecamp.org',
        tag: 'Learning',
        tagName: 'Educational Resources',
        title: 'FreeCodeCamp',
        text: 'FreeCodeCamp is a 100% free learning plaform with courses, projects and even certifications. FreeCodeCamp is the perfect learning platform for aspiring software developers',
      },
      {
        id: 2,
        imgSrc: W3Schools,
        itemLink: 'https://www.w3schools.com',
        tag: 'Learning',
        title: 'W3Schools',
        text: 'W3Schools is a great platform optimized for learning and training with simplified examples for better understanding. They are the largest web developer site',
      },
      {
        id: 3,
        imgSrc: Patterns,
        itemLink: 'https://www.patterns.dev',
        tag: 'Productivity',
        title: 'Patterns.dev',
        text: 'Patterns.dev is a valuable resource for web developers and designers, providing a collection of design patterns and components for building web apps',
      },
    ],
    Development: [
      {
        id: 1,
        imgSrc: GitExplorer,
        itemLink: 'https://www.gitexplorer.com',
        tag: 'Productivity',
        tagName: 'Development',
        title: 'Git Explorer',
        text: 'Always forgetting Git commands? Git Explorer is a web-based tool that allows developers to discover and explore GitHub commands with simple explanation',
      },
    ],
    "Note Taking App": [
      {
        id: 1,
        imgSrc: Obsidian,
        itemLink: 'https://www.obsidian.md',
        tag: 'Productivity',
        tagName: 'Note Take App',
        title: 'Obsidian',
        text: 'The Obsidian is a powerful and extensible knowledge base that works on top of your local folder of plain text files. A great note taking app',
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
                  'mr-8 lg:mr-4 mt-6 md:mt-4 py-2 px-4 focus:outline-none font-semibold border border-red dark:border-transparent rounded-md text-base xl:text-sm xs:text-xs',
                  selected
                    ? 'text-white bg-red dark:bg-purple-500'
                    : 'text-red dark:text-white bg-red/10 hover:bg-red/20 dark:hover:bg-slate-900 dark:bg-slate-800'
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
                    className='border-red/80 border dark:border-purple-400 rounded-lg max-w-sm mx-auto'
                  >
                    <Link href={item.itemLink} target="_blank">
                      <Image src={item.imgSrc} alt={item.title} priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className='rounded-t-lg max-h-48 h-48' />
                    </Link>
                    <div className='pt-6 xl:pt-8 pb-8 px-6 xl:px-8 xs:px-6 text-dark dark:text-light'>
                      <span className='py-2 px-2 !text-red dark:!text-white bg-red/10  dark:bg-purple-700 rounded-md text-sm md:text-base sm:text-sm xs:text-xs font-semibold'>{item.tag}</span>
                      <Link href={item.itemLink}>
                        <h3 className='text-3xl lg:text-2xl md:text-4xl sm:text-3xl xs:text-2xl font-bold mt-3 mb-2 hover:underline hover:underline-offset-2'>{item.title}</h3>
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
