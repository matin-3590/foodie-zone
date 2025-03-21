import { fadeIn } from "../../framerMotion/variants";
import { motion } from "motion/react";

const FooterCopyright = () => {

    const years = new Date().getFullYear();

    return (
        <motion.div className="font-tauri text-center mt-6 dark:text-white" variants={fadeIn('opacity', 0.3)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
            <p className="md:text-lg">&copy; {years} All rights reserved || Made with 😍 by Matin Aliakbari</p>
        </motion.div>
    )
}

export default FooterCopyright