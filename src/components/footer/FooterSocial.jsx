import { FaLocationArrow } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const FooterSocial = () => {

    const addresses = [
        { icon: <FaLocationArrow />, text: 'Iran, Isfahan, Kashan' },
        { icon: <CiMobile3 />, text: '+98 913 423 0685' }
    ]

    const socialIcons = [
        { icon: <FaInstagram /> },
        { icon: <FaTelegram /> },
        { icon: <FaLinkedin /> }
    ]

    return (
        <div className="text-left dark:text-white">
            {addresses.map((address, index) => (
                <div className="flex gap-x-2 items-center mb-3" key={index}>
                    <span className="text-xl">
                        {address.icon}
                    </span>
                    <h3 className="text-[15px]">{address.text}</h3>
                </div>
            ))}

            <div className="flex items-center gap-x-4 mt-5">
                {socialIcons.map((socialIcon, index) => (
                    <a key={index} className="text-2xl md:text-3xl hover:text-amber-400 transition-colors duration-400 cursor-pointer">
                        {socialIcon.icon}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default FooterSocial