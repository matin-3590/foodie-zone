import { LuLockKeyhole } from "react-icons/lu";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const AboutIcons = () => {

    const aboutIcons = [
        { icon: <LuLockKeyhole />, bg: 'bg-purple-200/60   dark:bg-purple-200' },
        { icon: <IoFastFoodSharp />, bg: 'bg-amber-200/60  dark:bg-amber-200' },
        { icon: <GiFoodTruck />, bg: 'bg-teal-200/60  dark:bg-teal-200' }
    ]

    return (
        <div className="mt-6">
            <div className="flex justify-center items-center gap-x-6">
                {aboutIcons.map((aboutIcon, index) => (
                    <span key={index} className={`text-4xl ${aboutIcon.bg} p-5 rounded-full`}>
                        {aboutIcon.icon}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default AboutIcons