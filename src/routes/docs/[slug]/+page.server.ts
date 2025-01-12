import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {

    return {
        path: '$lib/docs/' + params.slug + '.md'
    }
    
    
}