
import loadAllBlogs from "@/utilities/loadAllBlogs"
import BlogCard from "./BlogCard";

const BlogPage = async () => {
    const blogs = await loadAllBlogs();

    return (
        <div className="my-24 px-5">
            <h2 className="text-center text-5xl font-bold mb-10">
                Popular Blogs
            </h2>

            <p className="text-center md:w2/3 mx-auto">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, at tempora corrupti ut aperiam blanditiis exercitationem. Dolore quaerat temporibus inventore.
            </p>

            {/* will add blogs card here */}
            <div className="grid md:grid-cols-3 gap-5 mt-20">
                {
                    blogs.slice(0, 6).map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))
                }
            </div>
        </div>
    )
}

export default BlogPage