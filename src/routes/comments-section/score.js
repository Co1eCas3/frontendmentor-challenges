import supabase from '$lib/db/comments/supabase';
import { responses } from '$lib/utils';

export async function get({ url }) {
  const _id = url.searchParams.get('comment_id');
  const _val = +url.searchParams.get('val');

  if (!_id || !_val) return responses.accepted();

  const { data: score, error } = await supabase
    .rpc('add_to_score', { _id, _val });

  if (error) {
    console.log(error);
    return responses.serverError(error.toString())
  }

  return responses.success({ score });
}