// local dev server for the pixlr offline mirror. plain static file serving --
// no url rewriting, since all paths in the html/js now match the real folder
// layout directly. any other static server (vs code live preview, python -m
// http.server, etc.) works exactly the same, this is just a convenience.
// run: node index.js [port]

const http = require("http")
const fs = require("fs")
const path = require("path")

const port = Number(process.argv[2]) || 8123
const root = __dirname

const mimetypes = {
    ".html": "text/html", ".css": "text/css", ".js": "application/javascript",
    ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
    ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
    ".woff": "font/woff", ".woff2": "font/woff2", ".ttf": "font/ttf",
    ".ico": "image/x-icon", ".wasm": "application/wasm", ".webmanifest": "application/manifest+json",
    ".mp4": "video/mp4"
}

http.createServer((req, res) => {
    const urlpath = decodeURIComponent(req.url.split("?")[0])
    const relative = urlpath === "/" ? "index.html" : urlpath.slice(1)
    const full = path.normalize(path.join(root, relative))
    if (!full.startsWith(root)) {
        res.writeHead(403)
        res.end("forbidden")
        return
    }
    fs.readFile(full, (err, data) => {
        if (err) {
            res.writeHead(404)
            res.end("not found")
            return
        }
        const ext = path.extname(full)
        res.writeHead(200, {"content-type": mimetypes[ext] || "application/octet-stream"})
        res.end(data)
    })
}).listen(port, "127.0.0.1", () => {
    console.log("pixlr offline mirror running at http://127.0.0.1:" + port + "/")
})
