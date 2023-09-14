import { useSanityClient } from 'astro-sanity'

export async function getAllProviders() {
    const query = `*[_type == 'employee']{name, bio, "imageUrl": image.asset->url}`
    return await useSanityClient().fetch(query)
}

export async function getAllServices() {
    const query = `*[_type == 'service']`
    return await useSanityClient().fetch(query)
}

export async function getServiceById(id: string) {
    const query = `*[_type == 'service' && _id == ${id}]`
    return await useSanityClient().fetch(query)
}
