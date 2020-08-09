import bip32 from 'bip32';
import bip39 from 'bip39';
import bitcoin from 'bitcoinjs-lib';
import secp256k1 from 'secp256k1';
import keccak256 from 'keccak256';

const mnemonic = 'praise you muffin lion enable neck grocery crumble super myself license ghost';
const seed = bip39.mnemonicToSeedSync(mnemonic);

const wallet = bip32.fromSeed(seed)
console.debug(`add1: ${getAddress(wallet, "m/44'/60'/0'/0/0")}`)
console.debug(`add2: ${getAddress(wallet, "m/44'/60'/0'/0/1")}`)
console.debug(`add3: ${getAddress(wallet, "m/44'/60'/0'/0/2")}`)


const xpubNew = wallet.derivePath("m/44'/60'/0'").neutered().toBase58()
console.debug(`xpub new: ${xpubNew}`)

const wallet2 = bip32.fromBase58(xpubNew)
console.debug(`add1: ${getAddress(wallet2, "0/0")}`)
console.debug(`add2: ${getAddress(wallet2, "0/1")}`)
console.debug(`add3: ${getAddress(wallet2, "0/2")}`)


function getAddress(wallet, path) {
  const child = wallet.derivePath(path)
  const ethPublicKey = Buffer.from(secp256k1.publicKeyConvert(child.publicKey, false).slice(1))

  console.debug(`ethereum address: [${keccak256(ethPublicKey).slice(-20).toString('hex')}]`)

  return bitcoin.payments.p2pkh({ pubkey: child.publicKey }).address
}
