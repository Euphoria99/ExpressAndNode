const crypto = require('node:crypto');

process.env.UV_THREADPOOL_SIZE = 6;
const start = Date.now();

//exp-1
// crypto.pbkdf2Sync('password', 'salt', 10000, 512, 'sha512');

// console.log('Hash: ', Date.now() - start);

//exp-2
const MAX_CALLS = 6;
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2('password', 'salt', 10000, 512, 'sha512', () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}
//libuv's thread pool has 4 threads
