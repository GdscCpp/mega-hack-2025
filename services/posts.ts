"use server";
import { createClient } from "@/utils/supabase/server"
import { SupabaseClient } from "@supabase/supabase-js";

const validateIndustry = async (industry: string, client: SupabaseClient) => {
    const { data: existingIndustry, error: existingIndustryError } = await client
        .from("industries")
        .select("name")
        .eq("name", industry)
        .limit(1);

    if (existingIndustryError)
        throw new Error(existingIndustryError.message);

    if (!existingIndustry || existingIndustry.length === 0) {

        const { data: newIndustry, error: newIndustryError } = await client
            .from("industries")
            .insert({ name: industry })
            .select();

        if (newIndustryError)
            throw new Error(newIndustryError.message);

        return newIndustry[0].name;
    }

    return existingIndustry[0].name;
}

const validate = async (profession: string, industry: string, client: SupabaseClient) => {
    const { data, error } = await client
        .from("professions")
        .select("id")
        .eq("title", profession)
        .limit(1);

    if (error)
        throw new Error(error.message);

    if (!data || data.length === 0) {
        const industryName = await validateIndustry(industry, client);

        const { data: newProfession, error: newProfessionError } = await client
            .from("professions")
            .insert({ title: profession, industry: industryName })
            .select();

        if (newProfessionError)
            throw new Error(newProfessionError.message);

        return newProfession[0].id;
    }

    return data[0].id;
}

export const createPostAction = async (title: string, content: string, company: string, createdAt: string, profession: string, industry: string, userId?: string) => {
    const supabase = await createClient();
    const professionId = await validate(profession, industry, supabase);

    const { data, error } = await supabase
        .from('posts')
        .insert({ company, industry, title, content, user_id: userId, profession_id: professionId, created_at: createdAt })
        .select();

    if (error)
        throw new Error(error.message);

    return data;
}

export const updatePostAction = async (id: number, updatedValues: { title?: string, content?: string, company?: string, industry?: string }) => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('posts')
        .update(updatedValues)
        .eq('id', id)
        .select();

    if (error)
        throw new Error(error.message);

    return data;
}

export const deletePostAction = async (id: number) => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id)
        .select();

    if (error)
        throw new Error(error.message);

    return data;
}

export const getPaginatedPosts = async (page: number, limit: number) => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .range(page, limit);

    if (error)
        throw new Error(error.message);

    return data;
}