/* Import modules (getters). */
import getChangeAccounts from './wallets/getters/getChangeAccounts'
import getChangeAddress from './wallets/getters/getChangeAddress'
import getReceivingAccounts from './wallets/getters/getReceivingAccounts'
import getWalletAddress from './wallets/getters/getWalletAddress'
import getWalletBalance from './wallets/getters/getWalletBalance'

/* Import modules (actions). */
import addImportedSeed from './wallets/actions/addImportedSeed'
import createNewWallet from './wallets/actions/createNewWallet'
import destroyWallet from './wallets/actions/destroyWallet'
import initWallet from './wallets/actions/initWallet'
import nextChange from './wallets/actions/nextChange'
import nextReceiver from './wallets/actions/nextReceiver'
import sendCrypto from './wallets/actions/sendCrypto'
import updateMasterMnemonic from './wallets/actions/updateMasterMnemonic'
import updateMasterSeed from './wallets/actions/updateMasterSeed'
import updateWalletHistory from './wallets/actions/updateWalletHistory'

/* Import modules (mutations). */
import setChangeAccounts from './wallets/mutations/setChangeAccounts'
import setEmptyWallet from './wallets/mutations/setEmptyWallet'
import setImportedSeeds from './wallets/mutations/setImportedSeeds'
import setMasterMnemonic from './wallets/mutations/setMasterMnemonic'
import setMasterSeed from './wallets/mutations/setMasterSeed'
import setNextChange from './wallets/mutations/setNextChange'
import setNextReceiver from './wallets/mutations/setNextReceiver'
import setReceivingAccounts from './wallets/mutations/setReceivingAccounts'
import setWalletHistory from './wallets/mutations/setWalletHistory'

/* Initialize state. */
const state = {
    /* Initialize change accounts (index). */
    // NOTE: A list of the starting and ending indexes of ALL
    //       active "change" accounts.
    changeAccounts: null,

    /* Initialize derivation paths. */
    // NOTE: Based on (BIP-44) derivation paths.
    //       (m / purpose' / coin_type' / account' / change / address_index)
    derivationPath: {
        bch: `m/44'/145'/0'`, // Bitcoin Cash
        eth: `m/44'/60'/0'`, // Ethereum
        slp: `m/44'/245'/0'`, // Simple Ledger Protocol (SLP)
        slpr: `m/44'/2450'/0'`, // SLP Registered
    },

    /* Initialize wallet history. */
    // NOTE: A complete record of ALL incoming and outgoing transactions.
    history: null,

    /* Initialize imported (wallet) seeds. */
    // NOTE: Seeds may be imported from UUIDs embedded in the url,
    //       as a querystring (https://nito.cash?<uuid>).
    importedSeeds: null,

    /* Initialize master menmonic. */
    // NOTE: This is a 24-word (BIP-39) phrase, which can be generated from
    //       the `masterSeed` or imported from an existing wallet.
    masterMnemonic: null,

    /* Initialize master seed. */
    // NOTE: This is a 32-byte seed, which can be generated randomly,
    //       or by importing from an existing wallet.
    masterSeed: null,

    /* Initialize receiving accounts (index). */
    // NOTE: A list of the starting and ending indexes of ALL
    //       active "receiving" accounts.
    receivingAccounts: null,
}

/* Getters. */
const getters = {
    getChangeAccounts,
    getChangeAddress,
    getReceivingAccounts,
    getWalletAddress,
    getWalletBalance,
}

/* Actions. */
const actions = {
    addImportedSeed,
    createNewWallet,
    destroyWallet,
    initWallet,
    nextChange,
    nextReceiver,
    sendCrypto,
    updateMasterMnemonic,
    updateMasterSeed,
    updateWalletHistory,
}

/* Mutations. */
const mutations = {
    setChangeAccounts,
    setEmptyWallet,
    setImportedSeeds,
    setMasterMnemonic,
    setMasterSeed,
    setNextChange,
    setNextReceiver,
    setReceivingAccounts,
    setWalletHistory,
}

/* Export. */
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
