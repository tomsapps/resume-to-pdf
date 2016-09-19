# resume-to-pdf

Made this because json resume rules & I'm always running into job apps that dont support .html format.

This is a super simple scraper powered by [Nightmare](https://github.com/segmentio/nightmare) that works...

It exports a .pdf file that preserves links as well as style and format (for the most part)

## Instructions
```
git clone https://github.com/tomsapps/resume-to-pdf.git
npm i
node index.js <URL TO YOUR RESUME> <OPTIONAL NAME>
open name_of_resume.pdf
```

# API

**URL** is required.

This needs to be the full https://registry.jsonresume.org/your_resume_here

**Name** is optional & defaults to resume.pdf.

You can also mess with the pdfOptions constant. This is an object that accepts the [following parameters](https://github.com/electron/electron/blob/v0.35.2/docs/api/web-contents.md#webcontentsprinttopdfoptions-callback)
___

## Shout out
### [Nightmare js](http://www.nightmarejs.org/)
### [json resume](https://jsonresume.org)
