# CV source

`cv.html` is the source of `public/Tatiana-Papastylianou-CV.pdf` (the CV linked from the nav, footer and About page) and of `Tatiana-Papastylianou-CV-2026.pdf` in the repo root. Fonts load from Fontshare, the same fonts as the site.

Build the PDF (A4, 2 pages):

```
google-chrome --headless=new --no-pdf-header-footer --print-to-pdf=../public/Tatiana-Papastylianou-CV.pdf cv.html
```

`build-docx.js` builds `Tatiana-Papastylianou-CV-ATS.docx`, a one-column copy with the same text for job portals (needs the `docx` npm package). Keep the two files in sync when the text changes.
