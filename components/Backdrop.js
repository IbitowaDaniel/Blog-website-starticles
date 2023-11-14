"use client"
import { motion } from 'framer-motion'


const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className='absolute top-0 left-0 z-50 bg-dark/50 backdrop-blur-sm backdrop-opacity-70 h-full w-full flex items-center justify-center'
      onClick={onClick}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
      {children}
    </motion.div>
  )
}

export default Backdrop