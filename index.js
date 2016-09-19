var Nightmare = require('nightmare');
var nightmare = Nightmare();

if (!process.argv[2]) {
  console.error('Please provide a url to your resume.');
  return;
};

const fileName = process.argv[3] ? process.argv[3] + '.pdf' : 'resume.pdf';
const pdfOptions = {marginsType: 2, pageSize: 'Legal'};

nightmare
  .goto(process.argv[2])
  .wait()
  .evaluate(function () {
    return document.querySelector('body');
  })
  .pdf(fileName, pdfOptions)
  .end()
  .catch(function (error) {
    console.error('Search failed:', error);
  });

console.log(`Done! open ./${fileName} to view your resume!`);
