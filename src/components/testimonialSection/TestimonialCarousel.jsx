/* eslint-disable react/no-unknown-property */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { fadeIn } from '../../framerMotion/variants';
import { motion } from 'motion/react';

const TestimonialCarousel = () => {

    const slides = [
        {
            img: '/person/image1.jpg', alt: 'image1',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ad consequuntur suscipit nemo type fier format text sersuries common bot .',
            title: 'Reza'
        },

        {
            img: '/person/image2.jpg', alt: 'image2',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ad consequuntur suscipit nemo type fier format text sersuries common bot .',
            title: 'Matin'
        },

        {
            img: '/person/image11.jpg', alt: 'image3',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ad consequuntur suscipit nemo type fier format text sersuries common bot .',
            title: 'Maryam'
        },

        {
            img: '/person/image12.jpg', alt: 'image4',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ad consequuntur suscipit nemo type fier format text sersuries common bot .',
            title: 'Nima'
        },

        {
            img: '/person/image5.jpg', alt: 'image5',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ad consequuntur suscipit nemo type fier format text sersuries common bot .',
            title: 'Mahdi'
        },

        {
            img: '/person/image6.jpg', alt: 'image6',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ad consequuntur suscipit nemo type fier format text sersuries common bot .',
            title: 'Ali'
        },
    ]

    return (
        <motion.div variants={fadeIn('opacity', 0.5)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="p-8 mt-10">
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={15}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                    bulletClass: 'custom-bullet',
                    bulletActiveClass: 'custom-bullet-active',
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="relative"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='bg-amber-100/70 dark:bg-gray-700 w-full h-60 rounded-2xl border border-amber-100/70 dark:border-gray-700  shadow-lg relative'>
                            <div className='relative'>
                                <img loading='lazy' decoding='async' className='absolute left-[50%] -translate-x-[50%] top-4 w-25 h-25 rounded-full object-cover' src={slide.img} alt={slide.alt} />
                            </div>
                            <div className='absolute top-[50%] px-4'>
                                <p className='font-josefin text-[15px] text-center text-gray-600 dark:text-gray-50 line-clamp-3'>{slide.text}</p>
                                <h3 className='text-center mt-2 sm:mt-8 md:mt-3 font-bold font-tauri text-gray-800/70 text-xl dark:text-gray-300'>{slide.title}</h3>
                            </div>

                            <div className='absolute top-[5%] right-0 text-9xl text-gray-400/50 dark:text-gray-900/20 dark:z-0 -z-10 font-tauri font-thin mr-1.5'>,,</div>
                        </div>
                    </SwiperSlide>
                ))}


                {/* Pagination Container */}
                <div className="custom-pagination mt-8 flex justify-center gap-2" />
            </Swiper>

            {/* استایل‌های سفارشی */}
            <style jsx global>{`
        .custom-bullet {
          width: 7px;
          height: 7px;
          background: #e5e7eb;
          border-radius: 50%;
          opacity: 1;
          transition: all 0.3s;
          margin: 0 4px !important;
          cursor: pointer;
        }

        .custom-bullet-active {
          background: oklch(0.446 0.043 257.281);
        }
      `}</style>
        </motion.div>
    );
};

export default TestimonialCarousel;