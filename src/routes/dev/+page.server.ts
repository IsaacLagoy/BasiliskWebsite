export async function load() {

    const logs: {
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

    return {
        logs: logs
    }

}