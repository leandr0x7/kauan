const http = require("http");
const fs = require("fs");
const path = require("path");
const root = __dirname;
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".json": "application/json",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".md": "text/markdown; charset=utf-8"
};

const sendFile = (req, res, file, ext) => {
  const stat = fs.statSync(file);
  const size = stat.size;
  const type = mime[ext] || "application/octet-stream";
  const isMedia = ext === ".mp4" || ext === ".webm" || ext === ".woff2" || ext === ".woff";
  const cache = isMedia ? "public, max-age=86400" : "no-cache";
  const range = req.headers.range;

  if (range && isMedia) {
    const m = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (m) {
      let start = m[1] ? parseInt(m[1], 10) : 0;
      let end = m[2] ? parseInt(m[2], 10) : size - 1;
      if (Number.isNaN(start) || Number.isNaN(end) || start > end || start >= size) {
        res.writeHead(416, { "Content-Range": `bytes */${size}` });
        return res.end();
      }
      end = Math.min(end, size - 1);
      const chunk = end - start + 1;
      res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunk,
        "Content-Type": type,
        "Cache-Control": cache
      });
      return fs.createReadStream(file, { start, end }).pipe(res);
    }
  }

  res.writeHead(200, {
    "Content-Type": type,
    "Content-Length": size,
    "Accept-Ranges": "bytes",
    "Cache-Control": cache
  });
  fs.createReadStream(file).pipe(res);
};

const server = http.createServer((req, res) => {
  try {
    let urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    if (urlPath.endsWith("/")) urlPath += "index.html";
    const file = path.resolve(root, "." + urlPath.replace(/\\/g, "/"));
    if (!file.startsWith(path.resolve(root) + path.sep) && file !== path.resolve(root)) {
      res.writeHead(403);
      return res.end("Forbidden");
    }
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      res.writeHead(404);
      return res.end("Not found");
    }
    sendFile(req, res, file, path.extname(file).toLowerCase());
  } catch (e) {
    res.writeHead(500);
    res.end(String(e));
  }
});
server.listen(4173, "127.0.0.1", () => console.log("READY http://127.0.0.1:4173"));
