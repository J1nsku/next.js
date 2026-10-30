import { notFound } from "next/navigation"
import { getBlogById } from "@/app/services/blogs"
import LikeButton from "@/app/components/LikeButton"
// import { toggleBlogImportance } from "@/app/actions/blogs"

export const instant = false

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params
    const blog = getBlogById(Number(id))

    if (!blog) {
        notFound()
    }

    return (
        <li>
            <h2>{blog.title}</h2>
            <p>Author: {blog.author}</p>
            <p>Url: {blog.url}</p>
            {/* <p>Likes: {blog.likes}</p> */}
            <LikeButton id={blog.id} initialLikes={blog.likes}/>
            <input type="hidden" name="id" value={blog.id} />
        </li>
    )
}

export default BlogPage