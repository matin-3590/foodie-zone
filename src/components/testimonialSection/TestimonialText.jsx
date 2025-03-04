import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants"

const TestimonialText = () => {
    return (
        <motion.div variants={fadeIn('down', 0.4)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="text-center">
            <h4 className="text-sm text-amber-400">What our customers say</h4>
            <h3 className="text-4xl my-2 font-bold font-josefin dark:text-white">Testimonial</h3>
            <p className="text-[13px] text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt,</p>
        </motion.div>
    )
}

export default TestimonialText