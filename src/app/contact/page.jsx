import Image from "next/image"
import ContactImg from "@/assets/contact-us.webp"
import ContactPage from "@/components/ContactPage"

const Contact = () => {
    return (
        <div className="mt-20">
            <div className="md:flex justify-between items-center gap-y-8 my-10">
                <Image src={ContactImg} width={500} height={500} className="md:w-1/2" />

                <div className="md:w-1/2 md:order-2">
                    <h2 className="text-center text-5xl font-bold my-10">Contact Us</h2>
                    <p className="text-center md:w-2/3 mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eveniet quam aut hic delectus fugiat molestias dolore inventore illo expedita.
                    </p>
                </div>
            </div>
            <ContactPage />
        </div>
    )
}

export default Contact