import { redirect } from '@sveltejs/kit';
// import type { PageServerLoad } from './$types';


export const load= (async ({locals}) => {
    const session = await locals.getSession();
    if(session){
      const {data,error}=await locals.supabase.from('setlists')
      .select("*")
      // .select('id,title,songs(name,tone,tempo).eq(setlists.id,songs.setlist_id)')
      .eq('user_id', session.user.id)
      const setlists =data as Setlists || {}
      return {setlists,error};
    }
    else{
      throw({status:401,message:'Not logged in'})
      redirect(301,'/login')
    }
  
    
}) 