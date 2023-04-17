import { SupabaseClient, Session } from '@supabase/supabase-js';
import { Database } from './DatabaseDefinitions';

declare global {
	type Setlists= [Setlist]
	type Setlist= {
		id:string
		title: string;
		songs: Array<Song>;
	}
	
	type Song={
		name:string;
		tone:string;
		tempo:int;
	}
	namespace App {
		interface Locals {
			supabase: SupabaseClient<Database>;
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			session: Session | null;
			supabase: SupabaseClient<Database>;
			setlists: Setlists;
		}
		// interface Error {}
		// interface Platform {}
	}
}
