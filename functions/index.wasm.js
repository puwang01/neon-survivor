// /index.wasm -> 返回 gzip 后的引擎（后端存的是 index.wasm.gz）
// 这样既绕开 Pages 的 25 MiB 单文件限制，也让用户少下 27 MB。
export async function onRequestGet(context) {
  const src = new URL(context.request.url);
  src.pathname = src.pathname.replace(/\/index\.wasm$/, "/index.wasm.gz");

  const upstream = await context.env.ASSETS.fetch(new Request(src.toString(), context.request));
  if (!upstream.ok) {
    return new Response("engine asset missing", { status: 404 });
  }

  const body = await upstream.arrayBuffer();
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/wasm",
      "Content-Encoding": "gzip",
      "Cache-Control": "public, max-age=31536000, immutable",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
