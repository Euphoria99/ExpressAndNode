const path = require('node:path');

//1
// console.log(__dirname);
// console.log(__filename);

//2
// console.log(path.basename(__dirname));
// console.log(path.basename(__filename));

//3
// console.log(path.extname(__dirname));
// console.log(path.extname(__filename));

//4
// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));

//5
// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute('./data.json'));

//6
// console.log(path.join('folder1', 'folder2', 'index.html'));
// console.log(path.join('/folder1', 'folder2', 'index.html'));
// console.log(path.join('/folder1', '//folder2', 'index.html'));
// console.log(path.join('/folder1', '//folder2', '../index.html'));
// console.log(path.join(__dirname, 'data.json'));

//7
console.log(path.resolve('folder1', 'folder2', 'index.html'));
console.log(path.resolve('/folder1', 'folder2', 'index.html'));
console.log(path.resolve('/folder1', '//folder2', 'index.html'));
console.log(path.resolve('/folder1', '//folder2', '../index.html'));
console.log(path.resolve(__dirname, 'data.json'));
