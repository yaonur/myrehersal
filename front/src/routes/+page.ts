import {redirect} from "@sveltejs/kit";

export const load = async ({locals}) => {
    console.log("main page.ts runned")
    console.log(locals)
    if (!locals) {
        throw redirect(307, '/login')
    }

}