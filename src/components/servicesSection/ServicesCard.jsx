import PropTypes from 'prop-types';
import { motion } from 'motion/react';
import { fadeIn } from '../../framerMotion/variants';

const ServiceCard = ({ title, image, imgClass, mtClass }) => {
    return (
        <motion.div variants={fadeIn('opacity', 0.4)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="group bg-slate-100 w-[65%] sm:w-[90%] md:w-[100%] mx-auto shadow-2xl p-3 rounded-2xl relative pb-16 hover:bg-amber-400 active:bg-amber-400 active:transition-none transition duration-400 dark:bg-slate-700/50">
            <img
                className={`${imgClass} absolute left-1/2 -translate-x-1/2 group-hover:rotate-10 group-hover:scale-105 group-active:rotate-10 group-active:scale-105 group-active:transition-normal transition-all duration-400`}
                src={image}
                alt={title}
                loading='lazy'
            />
            <div className={`${mtClass} relative z-10 h-11`}>
                <h3 className="font-bold text-xl font-josefin mb-2 dark:text-white">{title}</h3>
                <div className="overflow-hidden">
                    <p className="text-gray-700 line-clamp-2 text-[15px] dark:text-gray-400 group-hover:dark:text-white transition-colors">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit Doloribus quod labore
                        asperiores enim deleniti? Doloremque magni pariatur minima et sequi recusandae
                        ratione, dolorum ullam quasi maiores! Dolor blanditiis rerum possimus.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imgClass: PropTypes.string.isRequired,
    mtClass: PropTypes.string.isRequired,
};


const ServicesCard = () => (
    <div className="mt-20 text-center space-y-20 md:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-4">
        <ServiceCard
            title="Biryani"
            image="/images/biryani2.png"
            imgClass="w-[14rem] md:w-[12.5rem] -top-12"
            mtClass="mt-31 md:mt-25"
        />
        <ServiceCard
            title="Chiken kari"
            image="/images/biryani3.png"
            imgClass="w-[15rem] md:w-[14rem] -top-16 left-[47%]"
            mtClass="mt-31 md:mt-25"
        />
        <ServiceCard
            title="Cold Cofee"
            image="/images/biryani5.png"
            imgClass="w-[16rem] md:w-[15rem] -top-12"
            mtClass="mt-31 md:mt-25"
        />
    </div>
);

export default ServicesCard;