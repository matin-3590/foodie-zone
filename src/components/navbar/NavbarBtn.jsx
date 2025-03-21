import { FaCartShopping } from "react-icons/fa6";

const NavBarBtn = () => {
    return (
        <div className="btn btn-primary">
            <div className="flex items-center gap-x-2">
                <span>Order</span>
                <span>
                    <FaCartShopping />
                </span>
            </div>
        </div>
    )
}

export default NavBarBtn