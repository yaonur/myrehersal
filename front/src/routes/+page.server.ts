import { PUBLIC_API_KEY } from '$env/static/public'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
  console.log(PUBLIC_API_KEY) // secret
}