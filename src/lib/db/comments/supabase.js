import { createClient } from "@supabase/supabase-js";

export default createClient(
  import.meta.env.VITE_COMMENTS_DB_URL,
  import.meta.env.VITE_COMMENTS_KEY
)