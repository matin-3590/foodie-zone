import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants"

const HeroText = () => {
    return (
        <div className="mt-14 sm:mt-0 text-center dark:text-white sm:text-left sm:px-2">
            <motion.h2 variants={fadeIn('down', 0.4)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0 }} className="font-bold text-5xl font-tauri sm:text-6xl lg:text-7xl">Welcome <span className="text-amber-500">Foodie</span> Zone</motion.h2>
            <motion.p variants={fadeIn('right', 0.4)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0 }} className="mt-5 text-lg sm:text-[17px] font-titillium w-[90%] sm:w-[110%] lg:w-[100%] mx-auto lg:mx-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</motion.p>
            <motion.div variants={fadeIn('up', 0.4)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0 }} className="mt-5">
                <button type="button" className="btn btn-primary py-2">Order Now</button>
            </motion.div>
        </div>
    )
}

export default HeroText