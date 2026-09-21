/* Captura batch: todas as rotas x 3 viewports (mobile 390, tablet 768, desktop 1440). */
const puppeteer = require("puppeteer-core");

const OUT = process.argv[2] || "../.impeccable/review";
const BASE = process.argv[3] || "http://localhost:7100";

const routes = [
  ["home", "/"],
  ["quem-somos", "/quem-somos/"],
  ["servico", "/servicos/contabilidade/"],
  ["blog", "/blog/"],
  ["post", "/blog/simples-nacional-ou-lucro-presumido/"],
  ["contato", "/contato/"],
  ["design-system", "/design-system/"],
];
const shots = [
  { name: "m", width: 390, height: 844 },
  { name: "t", width: 768, height: 1024 },
  { name: "d", width: 1440, height: 1000 },
];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: "new",
  });
  for (const [rname, route] of routes) {
    for (const s of shots) {
      const page = await browser.newPage();
      await page.emulateMediaFeatures([
        { name: "prefers-reduced-motion", value: "reduce" },
      ]);
      await page.setViewport({ width: s.width, height: s.height });
      await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 60000 });
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let y = 0;
          const step = () => {
            y += window.innerHeight;
            window.scrollTo(0, y);
            if (y < document.body.scrollHeight) setTimeout(step, 120);
            else { window.scrollTo(0, 0); resolve(); }
          };
          step();
        });
      });
      await new Promise((r) => setTimeout(r, 1000));
      await page.screenshot({ path: `${OUT}/${rname}-${s.name}.png`, fullPage: true });
      const m = await page.evaluate(() => ({
        w: window.innerWidth,
        sw: document.documentElement.scrollWidth,
      }));
      console.log(`${rname}-${s.name}`, JSON.stringify(m), m.sw > m.w ? "OVERFLOW" : "ok");
      await page.close();
    }
  }
  await browser.close();
})();
