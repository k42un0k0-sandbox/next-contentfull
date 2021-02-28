export const BuildMode = {
    production: "production" as const,
    preview: "preview" as const,

    isProduction() {
        return process.env.BUILD_MODE == BuildMode.production
    },
    isPreview() {
        return process.env.BUILD_MODE == BuildMode.preview
    }
}
