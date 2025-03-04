import { fadeIn } from "../../framerMotion/variants"
import { motion } from "motion/react"

const SocialGif = () => {
    return (
        <motion.div variants={fadeIn('down', 0.3)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="w-full h-auto mt-6">
            <img className="w-[100%] lg:w-[30rem] rounded-2xl mx-auto" src="/images/mobile_bike.gif" alt="mobile bike" />
        </motion.div>
    )
}

export default SocialGif