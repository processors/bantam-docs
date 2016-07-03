const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const rimrafAsync = Promise.promisify(require('rimraf'));
const glob = Promise.promisify(require('glob'));
const _template = require('lodash/template');

const TEMPLATES_LOCATION = '../bantam/templates';

const compiledBase = _template(fs.readFileSync('./scripts/base.html'));

function cleanDocs() {
  return rimrafAsync('./templates/*');
}

function readTemplateFiles(templateFilePaths) {
  return templateFilePaths.reduce((memo, file) => {
    memo[file] = fs.readFileSync(file);
    return memo;
  }, {});
}

function docTemplateFileContents(templateContents) {
  return compiledBase({ template: templateContents });
}

function writeDocs(fileDetails) {
  return Object.keys(fileDetails).map(fileName => {
    const docTemplatePath = `./templates/${path.basename(fileName)}`;
    return fs.writeFileSync(docTemplatePath, compiledBase({
      template: fileDetails[fileName],
    }));
  });
}

cleanDocs()
  .catch(e => {
    console.error('Error occurred while cleaning existing templates.');
    console.error(e);
  })
  .then(() => glob(`${TEMPLATES_LOCATION}/**/*.html`))
  .catch(e => {
    console.error('Unable to find templates at:', TEMPLATES_LOCATION, '.');
    console.error('Please check that templates exist at that location');
    console.error(e);
  })
  .then(readTemplateFiles)
  .catch(e => {
    console.error('Error reading templates.');
    console.error(e);
  })
  .then(writeDocs)
  .then(() => {
    console.log('Template files generated.');
  })
  .catch(err => {
    console.log('error writing docs', err);
    process.exit(1);
  });
