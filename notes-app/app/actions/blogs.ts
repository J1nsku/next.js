"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { addBlog, setLikes } from "../services/blogs"

export const createBlog = async (formData: FormData) => {
    const title = formData.get("title") as string
    const author = formData.get("author") as string
    const url = formData.get("url") as string
    const likes = Number(formData.get("likes") as string)
    addBlog(title, author, url, likes)

    revalidatePath("/blogs")
    redirect("/blogs")
}

export const likeBlog = async (formData: FormData) => {
    const blog = Number(formData.get("id") as string)
    setLikes(blog)

    revalidatePath(`/blogs/${blog}`)
}

// export const incrementLike = async (formData: FormData) => {
    
//     const updatedLikes = formData.get("updatedLikes") as string
//     const initialLikes = formData.get("initialLikes") as string

//     revalidatePath("/blogs")
//     redirect("/blogs")
// }

// export const toggleBlogImportance = async (formData: FormData) => {
//     const id = Number(formData.get("id"))
//     toggleImportance(id)
//     revalidatePath(`/blogs/${id}`)
//     revalidatePath("/blogs")
// }