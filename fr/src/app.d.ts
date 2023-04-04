import { SupabaseClient, Session } from '@supabase/supabase-js';
import { Database } from './DatabaseDefinitions';

declare global {
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
interface Setlists {
	[Setlist];
}
interface Setlist {
	id:string
	title: string;
}
interface Songs{
	[Song];
}
interface Song{
	name:string;
	tone:string;
	tempo:string;
}
