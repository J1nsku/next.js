const blogs = [
    {
        id: 1, title: 'otsikko', author: 'jinca', url: 'https://github.com/J1nsku/next.js', likes: 999
    }
]

let nextId = 2

export const getBlogs = () => {
    return blogs
}

export const getBlogById = (id: number) => {
    return blogs.find((blog => blog.id === id))
}

export const addBlog = (title: string, author: string, url: string, likes: number) => {
    blogs.push({ id: nextId++, title, author, url, likes })
}

export const setLikes = (id: number) => {
    const blog = blogs.find((blog => blog.id === id))

    if (blog) {
        blog.likes = (Number(blog.likes) + 1)
    }
}