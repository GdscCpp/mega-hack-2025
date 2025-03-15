import { createClient } from "@/utils/supabase/server"

const createPost = async (title: string, content: string, userId: string, /* Add more params as needed*/) => {
    // HINT: this may require also creating a new industry and or profession
}

const getPaginatePosts = async (page: number, limit: number) => {

}

export const deletePost = async (id: number) => {
    
}

export const postService = {
    createPost,
    getPaginatePosts,
    deletePost
}