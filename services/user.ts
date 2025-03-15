import { createClient } from "@supabase/supabase-js"

const createUserWithPasswordAction = async (email: string, username: string, password: string) => {
    "use server";
}

export const userService = {
    createUserWithPasswordAction
}