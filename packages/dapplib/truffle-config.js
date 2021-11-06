require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note often method half problem front truly'; 
let testAccounts = [
"0x8e2154c255253eeae48745d2dcf91ed12e94ac9fc5c05942c410b5f0fe2768d5",
"0x4240cd38bc020205e6e4f40fc2c0e6fc781d0cee212eda33caf77444e77ea4c4",
"0x746a30cb334656ef756325ff475f713100276681a4f33a9b7d39a30f126002dc",
"0xab72c760d05e326b6528ccf94573291def21b061a245be75f7090c59c138a7eb",
"0x9d1623709c0b84214dff64b42fae3514c700449d83ca3142fcaa774e68009b9e",
"0xf3fc5c77eedc98cc97d2af3ab8378ba45cc365c3f29f5bb14843964d64c24bc1",
"0xad6ebdc908c7e19404df8b33e18c36ddd6f73d86c12a639a50ad5f4829168d32",
"0xac89cb071a6e5c9d6b375ce10690786f11ef5b54c0414cfeca8af84b065136da",
"0xc99e54fab760794dbdbe28941aa8aa1491d9c509eb7238b3eb058d40c832ed18",
"0x466d7fbd4a7d4cac6fd45e7c911f6199cf4b72e54234e9d20f1c5cc7af53bf6e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


