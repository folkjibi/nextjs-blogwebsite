import React from 'react'

const ContactPage = () => {
    return (
        <div className="bg-no-repeat bg-cover bg-[#DF0030] text-white rounded-md md:h-72 mt-32">
            <div className="md:flex justify-center h-full items-center">
                <div className="md:w-1/2 md:p-10 md:px-5 py-10 text-center">
                    <h2 className="text-3xl font-bold">
                        The New Ravulation Starts from You
                    </h2>
                    <p className="my-3 pr-5">
                        Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
                        aptent dapibus metus maecenas consequat. Elementum interdum a
                        semper.
                    </p>

                    <div className="w-full mt-5 text-black">
                        <input type="file" name="" id="" placeholder="Enter your email" className="md:w-72 rounded" />
                        <input type="submit" value="Submit" className="btn ml-2 px-3 py-2 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage