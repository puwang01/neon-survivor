# Neon Survivor — Cloudflare Pages 部署分支

这个分支只放 Pages 产物：

- `index.wasm.gz`（9.6MB）配合 `functions/index.wasm.js`，在 `/index.wasm` 上返回
  `Content-Type: application/wasm` + `Content-Encoding: gzip`。
  Godot 的引擎 wasm 原体积 37.7MB，超过 Pages 的 25MiB 单文件上限，所以用 gzip 存放并让浏览器透明解压。
- 其余文件（html/js/pck/图标/manifest/service worker）都是普通静态资源。

Cloudflare Pages 配置：Framework preset = None，Build command 留空，Output directory = `/`。
