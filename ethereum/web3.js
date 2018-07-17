import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser
    // Metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    // We are on the browser or the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/1SnJoBTzxLduR2ZuzuZ0'
    );
    web3 = new Web3(provider);
}

export default web3;