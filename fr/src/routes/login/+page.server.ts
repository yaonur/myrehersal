import { AuthApiError } from "@supabase/supabase-js"
import type {Actions} from "./$types"
import { fail, redirect } from "@sveltejs/kit"

export const actions: Actions={
	login:async({request,locals})=>{
		const body = Object.fromEntries(await request.formData())
		console.log("logging in")
		console.log(body)
		const {data,error:err}=await locals.supabase.auth.signInWithPassword({
			email:body.email as string,
			password:body.password as string
		})
		if (err){
			console.log(data)
			console.log(`Error: ${err}`)
			if (err instanceof AuthApiError && err.status===400){
				return fail(400,{
					error: "Invalid email or password"
				})
			}
			return fail(500,{
				message:"Server error. Try again later"
			})
			
		}
		throw redirect(303,"/")
	}
}