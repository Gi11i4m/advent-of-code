const { create } = require('filehound');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PROJECT_PATH = path.resolve(__dirname, '..');
const OPS_PATH = path.resolve(__dirname);
const PAGES_PATH = path.resolve(PROJECT_PATH, 'pages');
const HTML_FILENAME = 'index.html';
const HTML_PATH = path.resolve(PAGES_PATH, HTML_FILENAME);
const CSS_FILENAME = 'index.css';
const CSS_PATH = path.resolve(PAGES_PATH, CSS_FILENAME);

function addJsToRequirePaths(filePath) {
  fs.readFile(filePath, 'utf8', (_, data) =>
    fs.writeFile(
      filePath,
      data.replace(/require\(\"(.*)\"\)/g, 'require("$1.js")'),
      () => console.log(`Fixed ${filePath}`)
    )
  );
}

function generateHtmlOption(filePath) {
  const day = filePath.split('/').reverse().at(0);
  const readableDay = day
    .split('')
    .map((value, index) =>
      index === 0 ? value.toUpperCase() : value === 'y' ? 'y ' : value
    )
    .join('');
  return `<option value="${day}">${readableDay}</option>`;
}

function addOptionsToHtml(options) {
  fs.readFile(HTML_PATH, 'utf8', (_, data) =>
    fs.writeFile(
      HTML_PATH,
      data.replace('{{DAY_OPTIONS}}', options.join('\n')),
      () => console.log(`Added options to ${HTML_PATH}`)
    )
  );
}

fs.rmSync(PAGES_PATH, { recursive: true, force: true });
execSync(`cd ${PROJECT_PATH} && tsc`);
fs.copyFileSync(path.resolve(OPS_PATH, HTML_FILENAME), HTML_PATH);
fs.copyFileSync(path.resolve(OPS_PATH, CSS_FILENAME), CSS_PATH);

create().paths(PAGES_PATH).ext('js').find().each(addJsToRequirePaths);

create()
  .paths(PAGES_PATH)
  .directory()
  .glob('day*')
  .find()
  .map(generateHtmlOption)
  .then(addOptionsToHtml);
