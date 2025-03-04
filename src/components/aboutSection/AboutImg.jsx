import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants"

const AboutImg = () => {
    return (
        <motion.div variants={fadeIn('right', 0.4)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="w-full h-auto justify-items-center">
            <img className="lg:w-[28rem]" src="/images/biryani5.png" alt="biryani5" />
        </motion.div>
    )
}

export default AboutImg