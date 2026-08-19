// local dev server for the pixlr offline mirror.
// the editor bundles have absolute root paths (/dist/, /img/, /images/, /font/, /text/, /js/)
// baked in as literal strings, so this maps those urls onto the assets/ folder layout
// instead of rewriting every occurrence inside the bundles.
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

const mappings = [
    ["/dist/", "assets/static/dist/"],
    ["/font/", "assets/fonts/"],
    ["/img/", "assets/images/img/"],
    ["/images/", "assets/images/images/"],
    ["/text/", "assets/static/text/"],
    ["/js/", "assets/static/js/"],
    ["/favicon/", "assets/static/favicon/"],
    ["/src/", "src/"]
]

function resolvefile(urlpath) {
    if (urlpath === "/") return "index.html"
    if (urlpath === "/service-worker.js") return "assets/static/service-worker.js"
    for (const [prefix, dir] of mappings) {
        if (urlpath.startsWith(prefix)) {
            return path.join(dir, urlpath.slice(prefix.length))
        }
    }
    return urlpath.slice(1)
}

http.createServer((req, res) => {
    const urlpath = decodeURIComponent(req.url.split("?")[0])
    const relative = resolvefile(urlpath)
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
