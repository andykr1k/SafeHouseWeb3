import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <motion.h1 whileHover={{scale:1.5}}>
        Hello
      </motion.h1>
    </div>
  )
}

export default Home
