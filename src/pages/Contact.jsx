import React from 'react'
import Form from '../components/Form'
import Contactlinks from '../components/Contactlinks'
import  {motion} from 'framer-motion'

const Contact = () => {

  const pagetrans = {
    hidden:{opacity:0},
    visible:{opacity:1}
  }
  // mobile:flex-col
  return (
    <motion.div className='row-start-2 bg-drk00 w-full flex overflow-auto flex-col sm:flex-row'
    variants={pagetrans}
    initial= "hidden"
    animate = "visible"
    exit="hidden"
    >
      <Contactlinks />
      <Form />
    </motion.div>
  )
}

export default Contact