const crypto = require('crypto');
const cipher = crypto.createCipher('aes192','a password');
var encrypted = cipher.update('Hello Techweber','utf8','hex');
encrypted = encrypted + cipher.final('hex');
console.log(encrypted);


// 317c37cbfd2be29b03917f6df9a7cf41