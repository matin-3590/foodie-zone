import AboutMain from "./components/aboutSection/AboutMain"
import FooterMain from "./components/footer/FooterMain"
import HeroMain from "./components/heroSection/HeroMain"
import NavbarMain from "./components/navbar/NavbarMain"
// import PreFixer from "./components/preFixer/PreFixer"
import ServicesMain from "./components/servicesSection/ServicesMain"
import SocialMain from "./components/socialMedia/SocialMain"
import TestimonialMain from "./components/testimonialSection/TestimonialMain"

const App = () => {
  return (
    <div className="relative font-roboto">
      <NavbarMain />
      <HeroMain />
      <ServicesMain />
      <AboutMain />
      <SocialMain />
      <TestimonialMain />
      <FooterMain />
      {/* <PreFixer /> */}
    </div>
  )
}

export default App