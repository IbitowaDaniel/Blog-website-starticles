"use client"
import { motion } from 'framer-motion'
import Backdrop from './Backdrop'

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    }
  },
  exit: {
    y: "-100vh",
  },
};

const Modal = ({ handleClose, children }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className='bg-dark dark:bg-light z-50 w-[50%] max-w-[500px] md:max-w-[75%] md:w-[75%] sm:max-w-[90%] sm:w-[90%] h-1/2 !min-h-[300px] flex rounded-lg flex-col items-center justify-center m-auto'
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </Backdrop>
  )
}

export default Modal