import BannerImage from "../assets/banner-img.png"

const Banner = () => {
    return (
        <div className="bg-[url('/banner-img.png')] bg-no-repeat bg-cover bg-black text-white rounded-md md:h-72 my-8">
            <div className="md:flex justify-end h-full items-center banner">
                <div className="md:w-1/2 p-10">
                    <h2 className="text-3xl font-bold">
                        The New Ravulation Starts from You
                    </h2>
                    <p className="my-3 pr-5">
                        Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
                        aptent dapibus metus maecenas consequat. Elementum interdum a
                        semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra
                        sagittis sit aliquet at. Magna nam platea justo.
                    </p>

                    <button className="btn">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;