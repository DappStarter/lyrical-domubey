require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth museum unit install basket furnace genius'; 
let testAccounts = [
"0xe399403be0b5ae2b4fdabb4b1ad705d30829cf4d7c6f61a80dcdea73abfadfe2",
"0x50418222a75305c3a4dbdd2e812e8825d5c1fed7aae0b14834325e4ba9f4e54f",
"0xa09294caf2735c44dffeccf8822bf6976fe3a09dcab2ecc6224a60792b03dbb8",
"0x5608c1ae7e9ace1b7fa83644838d16aec05776e1a51384ee92525efda9833365",
"0xa2554bd05e54f4e36bf539415ec9bc780f0cf9f686e8cac3e02fd664aa018d8b",
"0xe36f6e252d2c265e8a9d620a7cba6b440e73a3ab954c44063c1b7591478ed80f",
"0xba995deab875000d4f798a4a3ac24264d0641a93b58ac63c27d4aec569be7c8a",
"0x70c67944f56dddbd087686cf1611bf9e895225d080a95817d021fa5b9994a5af",
"0xe97264ebaf9fb152d4062fab227b77ca7e8178cb4e88f07a6e87489ed04a0128",
"0x25ea282658c78c55033b61936986d816ba8aef8bf33ece3c428dcd0b5c6e8e29"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
