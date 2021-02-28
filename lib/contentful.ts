import { createClient } from 'contentful'
const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export async function getPeople() {
    const entries = await client.getEntries({ content_type: 'person' })
    return entries.items
}

export async function getBlogPosts() {
    const entries = await client.getEntries({ content_type: 'blogPost' })
    return entries.items
}