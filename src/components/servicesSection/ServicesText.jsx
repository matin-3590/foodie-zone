import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants"

const ServicesText = () => {
    return ( 
        <motion.div variants={fadeIn('up', 0.3)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="text-center">
            <h4 className="text-amber-400">Our Services</h4>
            <h3 className="mt-1 font-bold text-4xl font-titillium dark:text-white">Services</h3>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt,</p>
        </motion.div>
    )
}

export default ServicesText