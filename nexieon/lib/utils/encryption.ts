//Checking the crypto module
const cr = require('crypto');
const algorithm = 'aes-256-cbc'; //Using AES encryption
const fs = require('fs');
const path = require('path');
const KeyIvData = {
    "key":{"type":"Buffer","data":[212,240,99,100,140,246,120,235,152,97,110,251,89,39,234,248,137,152,113,79,170,209,12,116,102,52,119,215,86,51,73,178]},
    "iv": {"type":"Buffer","data":[124,117,24,178,234,129,186,101,25,152,70,72,150,211,254,195]}
}
const key = new Buffer(KeyIvData['key'].data);
const iv = new Buffer(KeyIvData['iv'].data);

//Encrypting text
function encrypt(text: string) {
   let cipher = cr.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
   let encrypted = cipher.update(text);
   encrypted = Buffer.concat([encrypted, cipher.final()]);
   return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

// Decrypting text 
function decrypt(text: any) {
   let iv = Buffer.from(text.iv, 'hex'); 
   let encryptedText = Buffer.from(text.encryptedData, 'hex');
   let decipher = cr.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
   let decrypted = decipher.update(encryptedText);
   decrypted = Buffer.concat([decrypted, decipher.final()]);
   return decrypted.toString();
}

// Check if correct
function verify(text:any, encrypted:any) {
   return decrypt(encrypted) == text;
}

// Export
export {encrypt, verify}