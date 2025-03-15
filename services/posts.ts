import { createClient } from "@/utils/supabase/server"

const createPostAction = async (title: string, content: string, userId: string, /* Add more params as needed*/) => {
    "use server";
    // HINT: this may require also creating a new industry and or profession
}

const getPaginatePosts = async (page: number, limit: number) => {

}

export const deletePostAction = async (id: number) => {
    "use server";

}

export const postService = {
    createPostAction,
    getPaginatePosts,
    deletePostAction
}