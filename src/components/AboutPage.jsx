import React from "react"
import Image from "next/image"
import AboutImage from "../assets/about.avif"

const AboutPage = () => {
    return (
        <div className="px-5 mb-10">
            <h2 className="text-center text-5xl font-bold mb-10">About Us</h2>
            <p className="text-center md:w-2/3 mx-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
                modi! Architecto cum excepturi non obcaecati qui laboriosam facilis a
                quisquam harum nulla reprehenderit ratione praesentium laborum corporis,
                unde ex vero!
            </p>

            {/* about container */}
            <div className="grid md:grid-cols-2 my-16 md:w-4/5 mx-auto gap-8">
                <div className="reletive md:order-2">
                    <Image src={AboutImage} alt="" width={500} height={500} className="rounded hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold">We are care about..</h2>
                    <p className="my-5 md:w-11/12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eveniet quam aut hic delectus fugiat molestias dolore inventore illo expedita.
                        <br /> <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique aspernatur quos sed, eius et libero impedit nam odit rem nobis!
                    </p>

                    <button className="btn hover:bg-red-600 hover:text-zinc-50">Contact Me</button>
                    <a className="ml-3 text-red-700 hover:border-2 rounded text-center hover:border-red-600 px-3 py-2 transition-all duration-300 cursor-pointer">See Project</a>
                </div>
            </div>
        </div>
    )
}

export default AboutPage