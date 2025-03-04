import { Link } from 'react-scroll';

const FooterLinks = () => {

    const links = [
        { href: 'home', text: 'Home' },
        { href: 'services', text: 'Services' },
        { href: 'about', text: 'About' },
        { href: 'testimonial', text: 'Testimonial' }
    ]

    const Login = [
        { href: 'home', text: 'Login' },
        { href: 'home', text: 'Registration' }
    ]

    const lorems = [
        { text: 'Lorem' },
        { text: 'Lorem Ipsum' },
        { text: 'Lorem' },
        { text: 'Lorem Ipsum' }
    ]

    return (
        <div className="mt-10 font-josefin dark:text-white grid grid-cols-2 sm:grid-cols-3 md:gap-x-6 lg:gap-x-20">

            <div className="mb-8">
                <h3 className="font-bold text-xl mb-4">Links</h3>
                <ul className="space-y-4">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.href} spy={true} smooth={true} offset={-75} className="hover:text-amber-500 active:text-amber-500 active:transition-none transition-colors duration-400 cursor-pointer">{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="font-bold text-xl mb-4">Login</h3>
                <ul className="space-y-4">
                    {Login.map((login, index) => (
                        <li key={index}>
                            <Link to={login.href} spy={true} smooth={true} offset={-75} className="hover:text-amber-500 active:text-amber-500 active:transition-none transition-colors duration-400 cursor-pointer">{login.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="font-bold text-xl mb-4">Lorem</h3>
                <ul className="space-y-4">
                    {lorems.map((lorem, index) => (
                        <li key={index}>
                            <Link className="hover:text-amber-500 active:text-amber-500 active:transition-none transition-colors duration-400 cursor-pointer">{lorem.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default FooterLinks