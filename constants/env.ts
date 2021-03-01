
export const PreviewSecret = {
    isAllowed(secret: string) {
        return process.env.CONTENTFUL_PREVIEW_SECRET == secret
    }
}