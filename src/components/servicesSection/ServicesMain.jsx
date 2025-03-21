import ServicesCard from "./ServicesCard"
import ServicesText from "./ServicesText"

const ServicesMain = () => {
    return (
        <section id='services' className="max-w-7xl mx-auto px-4 mt-10 relative">
            <ServicesText />
            <div>
                <ServicesCard />
            </div>
        </section>
    )
}

export default ServicesMain