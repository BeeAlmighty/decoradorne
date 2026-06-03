import { NextResponse, type NextRequest } from 'next/server'

/**
 * Maintenance gate.
 *
 * When the env var MAINTENANCE_MODE=1 is present, EVERY request is served a
 * styled HTTP 503 "temporarily unavailable" page. The rest of the codebase is
 * untouched — restoring the live site is just removing that env var (and
 * redeploying). See the header comment in package.json / README for the runbook.
 *
 * SEO-safe by design: 503 + Retry-After tells crawlers the outage is temporary,
 * so URLs stay indexed and Google simply retries later (no de-indexing). Do NOT
 * add a noindex meta tag here — that would actively remove the pages.
 */

// Where visitors are told to reach out. Change this one line to re-point.
const CONTACT_EMAIL = 'geotechsolutionsng@gmail.com'

export function middleware(_request: NextRequest) {
  if (process.env.MAINTENANCE_MODE !== '1') return NextResponse.next()

  return new NextResponse(UNAVAILABLE_HTML, {
    status: 503,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'retry-after': '86400', // 24h — "check back later", keeps URLs indexed
      'cache-control': 'no-store, must-revalidate',
    },
  })
}

export const config = {
  // Run on everything except Next internals, static assets, and the crawl
  // signal files (so robots.txt / sitemap.xml keep resolving normally).
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
}

const UNAVAILABLE_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Decor Adorne — Temporarily Unavailable</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;1,400&family=Geist+Mono&display=swap" rel="stylesheet" />
<style>
  :root{
    --cream:#FAF7F4;--parchment:#F2EDE8;--espresso:#1A1410;
    --gold:#C9A96E;--rose:#D4878A;--border:#E8E0D8;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%}
  body{
    font-family:'Cormorant Garamond',Georgia,serif;
    background:
      radial-gradient(120% 80% at 50% -10%, rgba(201,169,110,.18), transparent 60%),
      radial-gradient(90% 60% at 50% 110%, rgba(212,135,138,.10), transparent 55%),
      var(--cream);
    color:var(--espresso);
    display:flex;align-items:center;justify-content:center;
    min-height:100%;padding:32px;-webkit-font-smoothing:antialiased;
  }
  .card{max-width:560px;text-align:center}
  .mark{
    font-family:'Geist Mono',ui-monospace,monospace;
    font-size:12px;letter-spacing:.32em;text-transform:uppercase;
    color:var(--gold);margin-bottom:28px;
  }
  .rule{width:48px;height:1px;background:var(--gold);margin:0 auto 28px;opacity:.65}
  h1{font-weight:300;font-size:clamp(40px,7vw,68px);line-height:1.04;letter-spacing:-.01em;margin-bottom:20px}
  h1 em{font-style:italic;color:var(--gold)}
  p{font-size:clamp(17px,2.4vw,20px);line-height:1.6;color:rgba(26,20,16,.72);max-width:42ch;margin:0 auto 12px}
  .btn{
    display:inline-flex;align-items:center;gap:10px;margin-top:24px;
    font-family:'Geist Mono',ui-monospace,monospace;font-size:13px;letter-spacing:.06em;
    text-transform:uppercase;text-decoration:none;color:var(--espresso);background:var(--gold);
    padding:15px 28px;border-radius:2px;
    transition:transform .2s ease,box-shadow .2s ease;
    box-shadow:0 1px 0 rgba(26,20,16,.06);
  }
  .btn:hover{transform:translateY(-2px);box-shadow:0 10px 24px -12px rgba(201,169,110,.7)}
  .foot{margin-top:40px;font-family:'Geist Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:rgba(26,20,16,.4)}
</style>
</head>
<body>
  <main class="card">
    <div class="mark">Decor Adorne</div>
    <div class="rule"></div>
    <h1>Temporarily <em>unavailable</em></h1>
    <p>This site is currently offline. We expect it to return shortly.</p>
    <p>For assistance or to restore service, please reach the developer.</p>
    <a class="btn" href="mailto:${CONTACT_EMAIL}?subject=Decor%20Adorne%20%E2%80%94%20Site%20Access">Contact the developer</a>
    <div class="foot">503 · Service temporarily unavailable</div>
  </main>
</body>
</html>`
