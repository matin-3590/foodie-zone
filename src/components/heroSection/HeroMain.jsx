import HeroPic from "./HeroPic"
import HeroText from "./HeroText"

const HeroMain = () => {
    return (
        <section id="home">
            <div className="relative w-screen h-[54rem] sm:h-[40rem]">
                <img className="w-full h-full object-cover" src="/images/vector3.png" alt="background" />

                <div className="sm:grid sm:grid-cols-2 items-center absolute inset-0 top-14 sm:top-0 lg:top-15 mt-20 sm:mt-0 max-w-7xl mx-auto px-4">
                    <HeroPic />
                    <HeroText />
                </div>
            </div>
        </section>
    )
}

export default HeroMain