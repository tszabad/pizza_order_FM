import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from "./Loader"

const buttonVariants = {
   visible: {
     x: [0, -20, 20, -20, 20, 0],
    transition: { delay: 2 }
   },
  hover: {
    scale:  1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.2,
      yoyo: Infinity
    }
  }
}

const containerVariants = {
  hidden: { 
    opacity: 0, 
  },
  visible: { 
    opacity: 1, 
    transition: { delay: 1.5, duration: 1.5 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};

const Home = () => {
  return (
    <motion.div className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
        variants={buttonVariants}
          animate="visible"
          whileHover="hover"
          
          
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader/>
    </motion.div>
  )
}

export default Home;