import TestimonialCarousel from "./TestimonialCarousel"
import TestimonialText from "./TestimonialText"

const TestimonialMain = () => {
    return (
        <section id="testimonial" className="max-w-7xl mx-auto px-4 mt-20">
            <div>
                <TestimonialText />
            </div>

            <div>
                <TestimonialCarousel />
            </div>
        </section>
    )
}

export default TestimonialMain