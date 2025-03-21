import { motion } from "motion/react"
import AboutBtn from "./AboutBtn"
import AboutIcons from "./AboutIcons"
import AboutImg from "./AboutImg"
import AboutText from "./AboutText"
import { fadeIn } from "../../framerMotion/variants"

const AboutMain = () => {
    return (
        <section id="about" className="max-w-7xl mx-auto mt-20 px-4">
            <div className="grid sm:grid-cols-2 items-center">
                <AboutImg />
                <motion.div variants={fadeIn('left', 0.4)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
                    <AboutText />
                    <AboutIcons />
                    <AboutBtn />
                </motion.div>
            </div>
        </section>
    )
}

export default AboutMain