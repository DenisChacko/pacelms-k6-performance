import * as CryptoJS from 'crypto-js';

async function encryptPassword(passwordToEncrypt) {
    const key = `SECRET`;

    // ENCRYPT
    const cipher = CryptoJS.AES.encrypt(passwordToEncrypt, key);
    console.log(`${passwordToEncrypt} is encrypted to=> ${cipher.toString()}`);
}

// Example usage
// const password = '';
// encryptPassword(password);
// U2FsdGVkX18reGDZSv4HmmZJB1JbuR4weB2QxMmra6A=
