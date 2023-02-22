import {redirect} from '@sveltejs/kit'
import axios from "axios"
import type {Action, Actions, PageServerLoad} from "../../../.svelte-kit/types/src/routes/register/$types";

let api_url = process.env.API_URL
console.log(api_url)


export const load: PageServerLoad = async () => {

}

const login: Action = async ({request}) => {
    const data = await request.formData()
    const username = data.get('username')
    const password = data.get('password')
    let user = {
        username,
        password,
        email: ''
    }

    try {
        console.log("login running")
        console.log(api_url)
        console.log(user)
        const res = await axios.post(`${api_url}/user/login`, user).then(res => {
            console.log("after res")
            return res.data
        })

    } catch (err) {
        // @ts-ignore
        console.log(err.message)
        console.log("login failed")
        redirect(301,'/')
    }
}

export const actions: Actions = {login}
