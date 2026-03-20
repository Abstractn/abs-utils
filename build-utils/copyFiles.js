const fse = require('fs-extra');
const { globSync } = require('glob');
const path = require('path');

const sourceDir = process.argv[2];
const destinationDir = process.argv[3];

const files = globSync(sourceDir);
files.forEach((file) => {
  const fileName = path.basename(file);
  fse.copySync(file, path.join(destinationDir, fileName));
});