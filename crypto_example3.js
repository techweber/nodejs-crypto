const crypto = require('crypto');
const decipher = crypto.createDecipher('aes192','a password');

var encrypted = '317c37cbfd2be29b03917f6df9a7cf41';

var decrypted = decipher.update(encrypted,'hex','utf8');
decrypted = decrypted + decipher.final('utf8');
console.log(decrypted);