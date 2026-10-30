const blogs = [
    {
        id: 1, title: 'otsikko', author: 'jinca', url: 'https://github.com/J1nsku/next.js', likes: 1
    },
    { id: 2, title: 'otsikko2', author: 'janiella', url: 'https://github.com/Jqnsku/next.js', likes: 3
    },
]

let nextId = 3

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