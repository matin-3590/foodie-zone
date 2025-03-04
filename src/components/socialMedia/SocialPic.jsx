import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants"

const SocialPic = () => {
    return (
        <motion.div variants={fadeIn('up', 0.4)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="text-center">
            <h3 className="text-2xl md:text-3xl lg:text-[2.5rem] font-tauri text-gray-600 dark:text-white/60">Foodly is available for Android and IOS</h3>
            <div className="mt-5 flex flex-row md:flex-col lg:flex-row justify-center gap-x-4 sm:gap-x-0">
                <div className="md:justify-items-center">
                    <img className="cursor-pointer w-[10rem] lg:w-[12rem] h-auto hover:scale-105 active:scale-105 active:transition-none transition-all duration-400" src="/images/play_store.png" alt="play store" />
                </div>

                <div className="md:justify-items-center">
                    <img className="cursor-pointer w-[10rem] lg:w-[12rem] h-auto hover:scale-105 active:scale-105 active:transition-none transition-all duration-400" src="/images/app_store.png" alt="app store" />
                </div>
            </div>
        </motion.div>
    )
}

export default SocialPic