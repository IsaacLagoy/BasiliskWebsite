export async function load() {

    const logs: {
        title: string,
        description: string, 
        contributor: string, 
        date: string,
        href: string // just the last directory, not the whole file path
    }[] = [
        {
            title: 'Broad BVH',
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