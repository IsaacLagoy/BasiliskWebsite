export async function load() {

    const logs: {
        title: string,
        description: string, 
        contributor: string, 
        href: string // just the last directory, not the whole file path
    }[] = [
        {
            title: 'Broad BVH',
            description: 'Improved mesh point and triangle accessing times',
            contributor: 'Isaac Lagoy',
            href: 'narrowBVH'
        },
    ]

    return {
        logs: logs
    }

}