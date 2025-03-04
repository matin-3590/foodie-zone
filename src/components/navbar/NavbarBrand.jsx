const NavBarBrand = () => {
    return (
        <div className="flex items-center gap-x-3 dark:text-white transition duration-500">
            <a href="#">
                <img className="w-10 h-10" src="/images/food-logo.png" alt="food logo" />
            </a>
            <h1 className="font-bold text-2xl lg:text-3xl font-tauri">Foodie</h1>
        </div>
    )
}

export default NavBarBrand