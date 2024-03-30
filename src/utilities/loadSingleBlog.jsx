

const loadSingleBlog = async (id) => {
    const res = await fetch(`http://localhost:5000/blogs/${id}`);
    return res.json();
}

export default loadSingleBlog