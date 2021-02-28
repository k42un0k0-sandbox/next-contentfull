import { createClient } from 'contentful'
import { BuildMode } from '../../constants/env'
import { BlogPost, BlogPostField } from './model/blogPost'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: BuildMode.isPreview() ? "preview.contentful.com" : "cdn.contentful.com",
})

export async function getPeople() {
    const entries = await client.getEntries({ content_type: 'person' })
    return entries.items
}

export async function getBlogPosts() {
    const entries = await client.getEntries({ content_type: 'blogPost' })
    return entries.items
}

export async function getBlogPost(id: string) {
    const entry = await client.getEntry<BlogPostField>(id)
    return entry
}