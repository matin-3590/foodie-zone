import { Link } from 'react-scroll';

const NavbarLinks = () => {

    const links = [
        { link: 'Home', href: 'home' },
        { link: 'Services', href: 'services' },
        { link: 'About', href: 'about' },
        { link: 'Testimonial', href: 'testimonial' },
    ]

    return (
        <div className="hidden sm:block">
            <ul className="flex sm:space-x-5 md:space-x-8 dark:text-white">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.href} spy={true} smooth={true} offset={-75} className="text-gray-600 font-josefin hover:text-orange-400 active:text-orange-400 active:transition-none transition duration-400 dark:text-white lg:text-lg cursor-pointer">{link.link}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavbarLinks