const express = require("express");
const puppeteer = require("puppeteer");

const server = express();

server.get('/', (req, res) => {
    res.send('Hello world!');
});

const port = 3000;

server.listen(port, () => {
    console.log(`O servidor subiu com success! em http://localhost:${port}`);
});

;(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://pptr.dev/");
  
  //await page.screenshot({ path: 'exemple.png' });

  await browser.close();
})();
