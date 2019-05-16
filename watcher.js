const chokidar = require('chokidar');
const shell = require('shelljs');

shell.exec('pdflatex main.tex');

let filesToWatch = [
  'main.tex',
  '**/*.tex'
]

const watcher = chokidar.watch(filesToWatch, {
  ignoreInitial: true
});

watcher.on('add', (event, path) => {
  shell.exec('pdflatex main.tex');
  console.log(event, path);
});

watcher.on('change', (event, path) => {
  shell.exec('pdflatex main.tex');
  console.log(event, path);
});
