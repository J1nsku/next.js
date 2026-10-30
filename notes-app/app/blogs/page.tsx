import { getBlogs } from '../services/blogs'
import BlogList from './BlogList'

export const instant = false

const Blogs = () => {
    const blogs = getBlogs()
    return (
        <div>
            <h2>Blogs</h2>
            <BlogList blogs={blogs} />
            {/* <ul>
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
            </ul> */}
        </div>
    )
}

export default Blogs