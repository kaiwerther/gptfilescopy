#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import clipboardy from 'clipboardy';

let files = [];

const getFilesRecursively = (directory) => {
  const filesInDirectory = fs.readdirSync(directory);
  for (const file of filesInDirectory) {
    const absolute = path.join(directory, file);
    if (fs.statSync(absolute).isDirectory()) {
      getFilesRecursively(absolute);
    } else {
      files.push(absolute);
    }
  }
};

const sourceFolder = process.argv[2] || 'src';
getFilesRecursively(sourceFolder);

let result = '';

for (const file of files) {
  const data = fs.readFileSync(file, 'utf8');
  console.log('// ' + file);
  result += '// ' + file + '\n';
  if (/\ufffd/.test(data)) {
    console.log('binary file');
    result += 'binary file' + '\n';
  } else {
    console.log(data);
    result += data + '\n\n';
  }
}

clipboardy.writeSync(result);
