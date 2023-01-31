import {redirect} from '@sveltejs/kit'
import axios from "axios"
import type {Action, Actions, PageServerLoad} from "../../../.svelte-kit/types/src/routes/register/$types";
import { PUBLIC_API_KEY } from '$env/static/public'
let api_url = process.env.API_URL
console.log(api_url)



export const load: PageServerLoad = async () => {

}

const register: Action = async ({request}) => {
    const data = await request.formData()
    const username = data.get('username')
    const password = data.get('password')
    const email = data.get('email')
    let user = {
        username,
        password,
        email
    }

    try {
        const res = await axios.post(`http://${api_url}/user/`, user)
    } catch (err) {
        console.log(err)
    }
}

export const actions: Actions = {register}