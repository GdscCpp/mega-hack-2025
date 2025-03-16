'use server';
import { revalidatePath } from 'next/cache';
import { createClient } from '../utils/supabase/server';
import { z } from 'zod';

const newuserSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
});

const userSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const createUserWithPasswordAction = async (
  email: string,
  username: string,
  password: string
) => {
  // validate form data
  const userDataValidation = newuserSchema.safeParse({
    email,
    username,
    password,
  });

  // throw error if input data is faulty
  if (!userDataValidation.success) {
    return { error: userDataValidation.error.flatten() };
  }

  // initialize supabase client
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: userDataValidation.data.email,
    password: userDataValidation.data.password,
    options: { data: { username: userDataValidation.data.username } },
  });

  // reset cache to ensure ui has fresh user data
  revalidatePath('/');
  return { data, error };
};

export const signInUserWithPasswordAction = async (
  email: string,
  password: string
) => {
  // validate form data
  const userDataValidation = userSchema.safeParse({
    email,
    password,
  });

  // throw error if input data is faulty
  if (!userDataValidation.success) {
    return { error: userDataValidation.error.flatten() };
  }

  // initialize supabase client
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: userDataValidation.data.email,
    password: userDataValidation.data.password,
  });

  // reset cache to ensure ui has fresh user data
  revalidatePath('/');
  return { data, error };
};

export const signOutUser = async () => {
  // initialize supabase client
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut({ scope: 'local' });

  // reset cache to ensure ui clears user data
  revalidatePath('/');
  // if supabase returns an error, send an error response, otherwise send data
  return error ? error : { data: 'Succesfully signed user out.' };
};
