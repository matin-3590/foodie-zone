import { useEffect, useState } from "react"
import NavbarBrand from "./NavbarBrand"
import NavBarBtn from "./NavBarBtn"
import NavbarToogle from "./NavbarToogle"
import NavbarTheme from "./NavbarTheme"
import NavbarLinks from "./NavbarLinks"
import NavbarLinksMenu from "./NavbarLinksMenu"

const NavbarMain = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [hasShadow, setHasShadow] = useState(false)

    const handleToggle = () => {
        setMenuOpen(!menuOpen)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY > 10) {
                setHasShadow(true)
            } else {
                setHasShadow(false)
            }
        }

        window.addEventListener("scroll", handleShadow)

        return () => {
            window.removeEventListener("scroll", handleShadow)
        }
    }, [])



    return (
        <>
            <nav className={`bg-white/30 backdrop-blur-xl ${hasShadow ? 'shadow-sm' : 'shadow-none'} fixed w-screen z-20 dark:bg-gray-700/30 dark:backdrop-blur-xl`}>
                <div className="relative max-w-[1280px] px-4 py-3 mx-auto">
                    <div className="flex justify-between items-center">
                        <NavbarBrand />
                        <div className="flex items-center md:gap-x-8 gap-x-4 mr-2">
                            <NavbarTheme />
                            <NavbarLinks />
                            <NavBarBtn />
                            <NavbarToogle onToggle={handleToggle} />
                        </div>
                    </div>
                </div>
            </nav>
            
            {/* Mobile Links */}
            <NavbarLinksMenu menuOpen={menuOpen} />
        </>
    )
}

export default NavbarMain