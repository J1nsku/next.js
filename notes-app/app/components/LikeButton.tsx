"use client"
// import { useState } from "react"
import { likeBlog } from "../actions/blogs"

const LikeButton = ({ initialLikes, id }: { initialLikes: number, id: number }) => {
    // const [likes, setLikes] = useState(initialLikes)

    // function handleClick() {
    //     setLikes(likes + 1)
    // }

    return (
        <div>
            <p>Likes: {initialLikes}</p>
            <form action={likeBlog}>
                <input name="id" value={id} type="hidden" />
                <button>
                    Like
                </button>
            </form>
        </div>
    )
}

export default LikeButton