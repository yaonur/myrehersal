import {createSupabaseServerClient} from '@supabase/auth-helpers-sveltekit'
// import { createClient } from "@supabase/supabase-js";
import {
	PUBLIC_SUPABASE_ANON_KEY,
	PUBLIC_SUPABASE_URL
  } from '$env/static/public';
  
const supabaseUrl = PUBLIC_SUPABASE_URL;
const supabaseKey = PUBLIC_SUPABASE_ANON_KEY;
// export const supabaseClient=createSupabaseServerClient({supabaseUrl, supabaseKey})
