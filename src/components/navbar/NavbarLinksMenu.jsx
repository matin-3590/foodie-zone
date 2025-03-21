import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

const NavbarLinksMenu = ({ menuOpen }) => {

    const menuLinks = [
        { link: 'Home', href: 'home' },
        { link: 'Services', href: 'services' },
        { link: 'About', href: 'about' },
        { link: 'Testimonial', href: 'testimonial' },
    ]

    return (
        <div className={`w-full fixed  top-18 z-20 transition-all duration-300 ease-in-out
            ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"} sm:hidden`}>
            <div className="bg-amber-200/20 backdrop-blur-lg dark:bg-gray-600/30 dark:backdrop-blur-lg py-6">
                <ul className="flex flex-col gap-4 text-center font-josefin">
                    {menuLinks.map((menuLink, index) => (
                        <li key={index}>
                            <Link to={menuLink.href} spy={true} smooth={true} offset={-75} className="text-gray-600 hover:text-orange-400 active:text-orange-400 active:transition-none transition duration-300 dark:text-white cursor-pointer">{menuLink.link}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

NavbarLinksMenu.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
};

export default NavbarLinksMenu