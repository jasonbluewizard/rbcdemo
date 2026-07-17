/* ============================================================================
 * RBC Quest — tiny static file server
 * ----------------------------------------------------------------------------
 * Zero dependencies (Node's built-in http/fs only), so it runs on Replit and
 * locally with no `npm install`. Binds 0.0.0.0 on $PORT (Replit sets this;
 * falls back to 3000 for local dev).
 *
 *   Run:  node server.js      →  http://localhost:3000
 * ==========================================================================*/

const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = process.env.PORT || 3000;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".map": "application/json; charset=utf-8"
};

function send(res, status, body, headers) {
  res.writeHead(status, Object.assign({ "Cache-Control": "no-cache" }, headers || {}));
  res.end(body);
}

const server = http.createServer((req, res) => {
  let urlPath;
  try {
    urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
  } catch (e) {
    return send(res, 400, "Bad request");
  }

  const rel = urlPath === "/" ? "/index.html" : urlPath;
  const filePath = path.join(ROOT, path.normalize(rel));

  // Block path traversal outside the project root.
  if (filePath !== ROOT && !filePath.startsWith(ROOT + path.sep)) {
    return send(res, 403, "Forbidden");
  }

  fs.stat(filePath, (err, stat) => {
    // Directory → serve its index.html (e.g. /finskool → finskool/index.html),
    // matching how production static hosting (Replit) serves directory indexes.
    if (!err && stat.isDirectory()) {
      return fs.readFile(path.join(filePath, "index.html"), (e, data) =>
        e ? send(res, 404, "Not found")
          : send(res, 200, data, { "Content-Type": MIME[".html"] })
      );
    }
    if (err || !stat.isFile()) {
      if (!path.extname(filePath)) {
        // Clean URLs: try "<route>.html" first (e.g. /finskool → finskool.html),
        // then fall back to the single-page app shell (index.html).
        return fs.readFile(filePath + ".html", (e, data) => {
          if (!e) return send(res, 200, data, { "Content-Type": MIME[".html"] });
          return fs.readFile(path.join(ROOT, "index.html"), (e2, data2) =>
            e2 ? send(res, 404, "Not found")
               : send(res, 200, data2, { "Content-Type": MIME[".html"] })
          );
        });
      }
      return send(res, 404, "Not found");
    }
    fs.readFile(filePath, (e, data) => {
      if (e) return send(res, 500, "Server error");
      const type = MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream";
      const headers = { "Content-Type": type };
      // Images/fonts under /assets rarely change — let the browser keep them
      // for an hour instead of re-fetching on every preview reload.
      if (urlPath.startsWith("/assets/")) headers["Cache-Control"] = "public, max-age=3600";
      send(res, 200, data, headers);
    });
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`RBC Quest is running → http://localhost:${PORT}`);
});
