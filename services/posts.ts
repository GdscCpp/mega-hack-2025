"use server";
import { createClient } from "@/utils/supabase/server"

const fetchProfessionId = async (profession: string) => {
    const supabase = createClient();

    console.log('professionsearched:', profession);
    const { data, error } = await (await supabase)
        .from("professions")
        .select("id")
        .eq("title", profession)
        .limit(1);

    console.log(data);

    if (error) {
        throw new Error(error.message);
    }

    if (!data || data.length === 0) {
        return null;
    }

    return data[0].id;
}

export const createPostAction = async (title: string, content: string, company: string, createdAt: string, profession: string, industry: string, userId?: string) => {
    const supabase = createClient();

    const professionId = await fetchProfessionId(profession);

    const { data, error } = await (await supabase)
        .from('posts')
        .insert({ company, industry, title, content, user_id: userId, profession_id: professionId, created_at: createdAt })
        .select();

    console.log(data);

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export const updatePostAction = async (id: number, updatedValues: { title?: string, content?: string, company?: string, industry?: string }) => {
    const supabase = createClient();

    const { data, error } = await (await supabase)
        .from('posts')
        .update(updatedValues)
        .eq('id', id)
        .select();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export const deletePostAction = async (id: number) => {
    const supabase = createClient();

    const { error } = await (await supabase)
        .from('posts')
        .delete()
        .eq('id', id);

    if (error) {
        throw new Error(error.message);
    }

    return true;
}

export const getPaginatedPosts = async (page: number, limit: number) => {
    const supabase = createClient();

    const { data, error } = await (await supabase)
        .from('posts')
        .select('*')
        .range(page, limit);

    if (error) {
        throw new Error(error.message);
    }

    return data;
}