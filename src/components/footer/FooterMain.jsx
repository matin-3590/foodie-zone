import { fadeIn } from "../../framerMotion/variants"
import FooterCopyright from "./FooterCopyright"
import FooterLinks from "./FooterLinks"
import FooterLogo from "./FooterLogo"
import FooterSocial from "./FooterSocial"
import { motion } from "motion/react"

const FooterMain = () => {
    return (
        <footer className="bg-gray-200 dark:bg-gray-700 w-screen pb-12">
            <div className="max-w-7xl mx-auto px-4 mt-14">
                <div className="flex flex-col md:flex-row md:gap-x-8 md:items-center">
                    <motion.div className="md:w-[50%]" variants={fadeIn('right', 0.3)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
                        <FooterLogo />
                        <FooterSocial />
                    </motion.div>

                    <motion.div variants={fadeIn('left', 0.3)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
                        <FooterLinks />
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-1 mt-8">
                <div className="bg-gray-500 w-[100%] h-[2px] mt-10"></div>
                <FooterCopyright />
            </div>
        </footer>
    )
}

export default FooterMain