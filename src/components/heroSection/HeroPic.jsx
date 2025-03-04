import { motion } from "motion/react"
import { useState } from "react"
import { fadeIn } from "../../framerMotion/variants"

const HeroPic = () => {

    const [mainImage, setMainImage] = useState('/images/biryani3.png')

    const handleChangeImage = (image) => {
        setMainImage(image)
    }

    const changeImage = [
        { image: '/images/biryani3.png', src: '/images/biryani3.png', alt: 'biryani3' },
        { image: '/images/biryani2.png', src: '/images/biryani2.png', alt: 'biryani2' },
        { image: '/images/biryani5.png', src: '/images/biryani5.png', alt: 'biryani5' },
    ]

    return (
        <div className="sm:order-1 lg:flex lg:flex-row items-center">
            <motion.img variants={fadeIn('opacity', 0.4)} initial={'hidden'} whileInView={'show'} viewport={{ amount: 0.7 ,once: false }} className="w-90 h-full sm:w-auto sm:h-auto md:w-[20rem] lg:w-[25rem] lg:h-auto mx-auto animate-[spin_25s_linear_infinite]" src={mainImage} alt="biryani3" />

            <motion.div variants={fadeIn('left', 0.4)} initial={'hidden'} whileInView={'show'} viewport={{ amount: 0.7 ,once: false }} className="mt-7 bg-white/30 rounded-full w-[60%] sm:w-full md:w-[20rem] lg:w-auto lg:max-h-60 mx-auto">
                <div className="flex flex-row lg:flex-col items-center justify-center gap-4 sm:gap-2 lg:gap-4">
                    {changeImage.map((image, index) => (
                        <div key={index}>
                            <img onClick={() => handleChangeImage(image.image)} className="w-24 sm:w-60 md:w-24 lg:w-20 transition-all duration-500 hover:scale-110 active:scale-110 active:transition-none" src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default HeroPic