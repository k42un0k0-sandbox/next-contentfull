import { PreviewSecret } from "../../constants/env"
import { previewClient } from "../../lib/contentful/client"

export default async function handler(req, res) {
    // Check the secret and next parameters
    // This secret should only be known to this API route and the CMS
    if (!PreviewSecret.isAllowed(req.query.secret) || !req.query.slug) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    try {
        const post = await previewClient.getBlogPost(req.query.slug)
        res.setPreviewData(post)

        // Redirect to the path from the fetched post
        // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
        res.redirect("/blogs/" + post.sys.id)
    } catch (e) {
        console.log(e)
        return res.status(401).json({ message: 'Invalid slug' })
    }
}