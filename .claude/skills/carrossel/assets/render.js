// Renderiza cada .slide de um HTML em PNG via Playwright.
// Uso: node render.js [carrossel.html] [pasta-de-saida]
//   ex.: node render.js carrossel.html instagram
// Reaproveite node_modules de outra pasta com:
//   NODE_PATH=../outra-pasta/node_modules node render.js
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const htmlFile = process.argv[2] || 'carrossel.html';
  const outDir = process.argv[3] || 'instagram';
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve(htmlFile));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500); // margem pra imagens de fundo

  const slides = await page.locator('.slide').all();
  if (slides.length === 0) {
    console.error('Nenhum elemento .slide encontrado em ' + htmlFile);
    process.exit(1);
  }
  for (let i = 0; i < slides.length; i++) {
    const num = String(i + 1).padStart(2, '0');
    const out = path.join(outDir, `slide-${num}.png`);
    await slides[i].screenshot({ path: out });
    console.log(out);
  }
  await browser.close();
})();
