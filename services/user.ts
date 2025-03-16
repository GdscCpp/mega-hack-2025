"use server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const NEXT_PUBLIC_SUPABASE_URL=process.env.NEXT_PUBLIC_SUPABASE_URL!;
const NEXT_PUBLIC_SUPABASE_ANON_KEY=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!; 

export const createUserWithPasswordAction = async (email: string, username: string, password: string) => {
    
    const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY);
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { username } // Store username in user metadata
        }
    });

    if (error) {
        console.error("Error creating user:", error.message);
        return { success: false, error: error.message };
    }

    return { success: true, user: data.user };
};
export const signInWithPasswordAction = async (email: string, password: string) => {
    const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY);
    const { data, error } =  await supabase.auth.signInWithPassword({email, password});
    if (error) {
        console.error("Error signing in:", error.message);
        return { success: false, error: error.message };
    }
    console.log("Signed in!", data);
    return {data};
}
