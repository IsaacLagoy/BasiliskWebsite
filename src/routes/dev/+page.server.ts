export async function load() {

    const logs: {
        title: string,
        description: string, 
        contributor: string, 
        href: string // just the last directory, not the whole file path
    }[] = [
        {
            title: 'BVH',
            description: 'Improved mesh data accessing times',
            contributor: 'Isaac Lagoy',
            href: 'narrowBVH'
        },
    ]

    return {
        logs: logs
    }

}