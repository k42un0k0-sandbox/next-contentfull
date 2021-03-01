import { ContentfulClientApi, createClient } from 'contentful'
import { BlogPostField } from './model/blogPost'

class Client {
    constructor(private client: ContentfulClientApi) { }
    async getPeople() {
        const entries = await this.client.getEntries({ content_type: 'person' })
        return entries.items
    }

    async getBlogPosts() {
        const entries = await this.client.getEntries({ content_type: 'blogPost' })
        return entries.items
    }

    async getBlogPost(id: string) {
        const entry = await this.client.getEntry<BlogPostField>(id)
        return entry
    }
}

export const client = new Client(createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}))

export const previewClient = new Client(createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
    host: "preview.contentful.com"
}))
