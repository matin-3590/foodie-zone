import SocialGif from "./SocialGif"
import SocialPic from "./SocialPic"

const SocialMain = () => {
    return (
        <section className="bg-gray-400/20 w-screen mt-25">
            <div className="max-w-7xl mx-auto px-4 py-18 sm:py-10">
                <div className="grid sm:grid-cols-2 sm:gap-x-5 items-center">
                    <SocialPic />
                    <SocialGif />
                </div>
            </div>
        </section>
    )
}

export default SocialMain