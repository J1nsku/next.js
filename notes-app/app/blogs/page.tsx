import { getBlogs } from '../services/blogs'

const Blogs = () => {
    const blogs = getBlogs()
    return (
        <div>
            <h2>Blogs</h2>
            <ul>
                {blogs.map(blog => (
                    <li key={blog.id}>
                        <p>
                            {blog.title}
                        </p>
                        <p>
                            {blog.author}
                        </p>
                        <p>
                            {blog.url}
                        </p>
                        <p>
                            {blog.likes}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Blogs