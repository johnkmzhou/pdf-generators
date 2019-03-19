const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');

const app = express();
app.use(cors());

app.get('/pdf', (req, res) => {
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000');
        const pdf = await page.pdf({format: 'A4'});
        await browser.close();
        await res.set({
            'Content-Type': 'application/pdf', 
            'Content-Length': 'pdf.length', 
            'Content-Disposition': 'attachment; filename=output.pdf'});
        await res.send(pdf);
    })();
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Listening on port " + port));