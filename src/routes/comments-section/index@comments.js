import supabase from '$lib/db/comments/supabase';
import { responses, formDataToObj } from '$lib/utils';

export async function get() {
  const [
    { data: user, error: userError },
    { data: comments, error: commentsError }
  ] = await Promise.all([
    supabase.from('user_w_image').select().eq('id', 1).single(),
    supabase.from('all_comments').select()
  ]);

  if (userError || commentsError) {
    const error = userError ?? commentsError;
    console.log(error);
    return responses.serverError(error.toString());
  }

  return responses.success({ user, comments });
}

export async function put({ request, url }) {
  const commentId = url.searchParams.get('id');
  const data = await request.formData();
  const newComment = data.get('content');

  try {
    const { error } = await supabase
      .from('Comment')
      .update({ content: newComment })
      .match({ id: commentId })

    if (error) throw error;

    return responses.found({}, { location: '/comments-section' });
  } catch (error) {
    console.log('update error: ', error);
    return responses.serverError(error.toString());
  }
}

export async function post({ request }) {
  let data = await request.formData();
  data = formDataToObj(data);

  const { data: newComment, error } = await supabase
    .from('Comment')
    .insert([data])

  if (error) {
    console.log(error);
    return responses.serverError(error.toString())
  }

  return responses.success()
}

export async function del({ request }) {
  const data = await request.formData();
  const id = data.get('comment_id');

  console.log(id);

  const { data: deleted, error } = await supabase
    .from('Comment')
    .delete()
    .match({ id });

  if (error) {
    console.log(error);
    return responses.serverError(error.toString());
  }

  return responses.found({}, { location: '/comments-section' });
}