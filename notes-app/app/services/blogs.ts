const blogs = [
    { id: 1, title: 'otsikko', author: 'jinca', url: 'https://github.com/J1nsku/next.js', likes: '1000',
    }
]

let nextId = 2

export const getBlogs = () => {
    return blogs
}

export const addBlog = (title: string, author: string, url: string, likes: string) => {
    blogs.push({ id: nextId++, title, author, url, likes })
}