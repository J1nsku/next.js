"use client"

import Link from "next/link"

type Blog = {
    id: number
    title: string
    author: string
    url: string
    likes: number
}

const BlogList = ({ blogs }: { blogs: Blog[] }) => {

    return (
        <div>
            <div>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link href={`/blogs/${blog.id}`}>
                            <ul>
                                {blog.title}
                            </ul>
                            <ul>
                                {blog.author}
                            </ul>
                            <ul>
                                {blog.url}
                            </ul>
                            <ul>
                                {blog.likes}
                            </ul>
                        </Link>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default BlogList