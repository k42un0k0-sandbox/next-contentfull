export const BuildMode = {
    production: "production" as const,
    preview: "preview" as const,

    get isProduction() {
        return process.env.BUILD_MODE == BuildMode.production
    },
    get isPreview() {
        return process.env.BUILD_MODE == BuildMode.preview
    }
}

export const PreviewSecret = {
    isAllowed(secret: string) {
        return BuildMode.isProduction || process.env.CONTENTFUL_PREVIEW_SECRET == secret
    }
}