import bip39 from 'bip39';
import HDKey from 'hdkey';

const mnemonic = 'praise you muffin lion enable neck grocery crumble super myself license ghost';
const seed = bip39.mnemonicToSeedSync(mnemonic);

const hdkey = HDKey.fromMasterSeed(Buffer.from(seed, 'hex'))

console.debug(`origin wallet:`)

const key1 = "m/44'/0'/0'/0/0"
const key2 = "m/44'/0'/0'/0/2"

const child1 = hdkey.derive(key1)
console.debug(`${key1}: ${child1.publicKey}`)

const child2 = hdkey.derive(key2);
console.debug(`${key2}: ${child2.publicKey}`)

const xpub = hdkey.publicExtendedKey
console.debug(`xpub: ${xpub}`)


const hdkey2 = HDKey.fromExtendedKey('xpub661MyMwAqRbcGhVeaVfEBA25e3cP9DsJQZoE8iep5fZSxy3TnPBNBgWnMZx56oreNc48ZoTkQfatNJ9VWnQ7ZcLZcVStpaXLTeG8bGrzX3n')
console.debug(`xpub: ${hdkey2.publicExtendedKey}`)

// const child11 = hdkey2.derive(key1)
// console.debug(`${key1}: ${child11.publicKey}`)
