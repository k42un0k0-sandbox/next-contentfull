
export default async function handler(req, res) {
    console.log("clear")
    res.clearPreviewData()
    res.redirect("/")
}