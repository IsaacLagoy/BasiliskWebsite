import broad_bvh from '$lib/images/devlogs/broad_bvh/bvh.png';
import narrow_bvh from '$lib/images/devlogs/narrow_bvh/L2.png';
import cuboids from '$lib/images/devlogs/cuboids/cuboids.png';

export async function load() {

    const logsOld: {
        title: string,
        description: string, 
        contributor: string, 
        date: string,
        href: string // just the last directory, not the whole file path
    }[] = [
        {
            title: 'Cuboid Algorithms',
            description: 'Adressed slowdowns for cuboids',
            contributor: 'Isaac Lagoy',
            date: '12/29/2024',
            href: 'cuboids'
        },
        {
            title: 'Broad BVH',
            description: 'Changed generation algorithms for faster build times',
            contributor: 'Isaac Lagoy',
            date: '12/20/2024',
            href: 'broadBVH'
        },
        {
            title: 'Narrow BVH',
            description: 'Improved mesh point and triangle accessing times',
            contributor: 'Isaac Lagoy',
            date: '12/11/2024',
            href: 'narrowBVH'
        },
    ]

    const logs: {
        title: string,
        description: string,
        date: string,
        thumbnail: string,
        href: string
    }[] = [
        {
            title: 'Cuboid Algorithms',
            description: 'Adressed slowdowns for cuboids',
            date: '12/29/2024',
            thumbnail: cuboids,
            href: 'cuboids'
        },
        {
            title: 'Broad BVH',
            description: 'Changed generation algorithms for faster build times',
            date: '12/20/2024',
            thumbnail: broad_bvh,
            href: 'broadBVH'
        },
        {
            title: 'Narrow BVH',
            description: 'Improved mesh point and triangle accessing times',
            date: '12/11/2024',
            thumbnail: narrow_bvh,
            href: 'narrowBVH'
        },

    ]

    return {
        logs: logs
    }

}