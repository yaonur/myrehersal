import {redirect} from '@sveltejs/kit'
import axios from "axios"
import type {Action, Actions, PageServerLoad} from "../../../.svelte-kit/types/src/routes/register/$types";
let api_url = process.env.API_URL



export const load: PageServerLoad = async () => {

}

const register: Action = async ({request}) => {
    const data = await request.formData()
    const username = data.get('username')
    const password = data.get('password')
    const email = data.get('email')
    console.log("register is running")
    console.log(api_url)
    let user = {
        username,
        password,
        email
    }

    try {
        const res = await axios.post(`${api_url}/user/`, user)
    } catch (err) {
        console.log(err)
    }
}

export const actions: Actions = {register}