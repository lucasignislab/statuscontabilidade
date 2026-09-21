/* Captura screenshots reais (desktop/mobile) com prefers-reduced-motion. */
const puppeteer = require("puppeteer-core");

const OUT = process.argv[2] || "../.impeccable/review";
const BASE = process.argv[3] || "http://localhost:7100";

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: "new",
  });
  const shots = [
    { name: "desktop", width: 1440, height: 1000 },
    { name: "mobile", width: 390, height: 844 },
  ];
  for (const s of shots) {
    const page = await browser.newPage();
    await page.emulateMediaFeatures([
      { name: "prefers-reduced-motion", value: "reduce" },
    ]);
    await page.setViewport({ width: s.width, height: s.height });
    await page.goto(BASE, { waitUntil: "networkidle0", timeout: 60000 });
    // rola a página para disparar lazy-load antes da captura fullPage
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
    await new Promise((r) => setTimeout(r, 1200));
    await page.screenshot({ path: `${OUT}/${s.name}.png`, fullPage: true });
    // diagnóstico de overflow
    const m = await page.evaluate(() => ({
      innerWidth: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    console.log(s.name, JSON.stringify(m));
    await page.close();
  }
  await browser.close();
})();
