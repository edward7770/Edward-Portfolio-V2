import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas, ReactMark } from "./canvas";
// import { Herostars } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        style={{zIndex: 10}}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-60 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Edward</span>
          </h1>
          <p className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 mt-2 text-white-100">
            Welcome To My World!
          </p>
        </div>
      </div>
      {/* <Herostars/> */}
      {/* <ComputersCanvas /> */}
      <div style={{position: 'relative', height: '100%', width: '100%',top: '76px' }}>
        <ReactMark/>
      </div>


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center' style={{zIndex: '10'}}>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;