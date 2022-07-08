import supabase from '$lib/db/comments/supabase';
import { responses } from '$lib/utils';

export async function get() {
  try {
    const [{ data: [user] }, { data: comments }] = await Promise.all([
      supabase.from('user_w_image').select().eq('id', 1),
      supabase.from('all_comments').select()
    ]);

    return responses.success({ user, comments })
  } catch (error) {
    console.log(error);
    return responses.serverError(error.toString());
  }
}