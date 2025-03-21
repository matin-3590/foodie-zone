import { useEffect, useState } from "react"

const NavbarTheme = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    )

    useEffect(() => {
        const element = document.documentElement;
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme])

    return (
        <div className="relative">
            <img onClick={() => setTheme(data => data === 'dark' ? 'light' : 'dark')} className={`w-10 h-6 absolute right-0 z-10 cursor-pointer transition-all duration-500 ${theme === 'light' ? 'opacity-0' : 'opacity-100'}`} src="/theme/dark-mode-button.png" alt="dark mode" />
            <img onClick={() => setTheme(data => data === 'dark' ? 'light' : 'dark')} className="w-10 h-6 cursor-pointer transition-all duration-500" src="/theme/light-mode-button.png" alt="light mode" />
        </div>
    )
}

export default NavbarTheme