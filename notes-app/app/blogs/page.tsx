import { getBlogs } from '../services/blogs'
import BlogList from './BlogList'

export const instant = false

const Blogs = () => {
    const blogs = getBlogs()
    return (
        <div>
            <h2>Blogs</h2>
            <BlogList blogs={blogs} />
        </div>
    )
}

export default Blogs