import { RxHamburgerMenu } from "react-icons/rx";

// eslint-disable-next-line react/prop-types
const NavbarToogle = ({ onToggle }) => {
    return (
        <div onClick={onToggle} className="text-2xl cursor-pointer hover:scale-110 active:scale-110 active:transition-none transition-all duration-300 dark:text-white sm:hidden">
            <RxHamburgerMenu />
        </div>
    )
}

export default NavbarToogle