
const loadAllBlogs = async () => {
    const res = await fetch("http://localhost:5000/blogs");
    return res.json();
};

export default loadAllBlogs