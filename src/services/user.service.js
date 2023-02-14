'use strict'
import { storageService } from './storage.service.js'

const KEY = 'user'

function getUser() {
    return new Promise((resolve) => {
        resolve(storageService.load(KEY))
    })
}

function signup(name) {
    let user = storageService.load(KEY)
    if (user && user.name===name) return user
    if (!user) user = {}
    user.name = name
    user.balance = 100
    storageService.save(KEY, user)
}


function updateBalance(amount) {
    const user = storageService.load(KEY)
    user.balance += +amount
    storageService.save(KEY, user)
    return user.balance
}

function getTransactions() {
    return new Promise((resolve) => {
        resolve(storageService.load(KEY).transactions)
    })
}

function transferFunds(contact, amount) {
    const user = storageService.load(KEY)
    user.balance -= +amount
    if (!user.transactions) user.transactions = []
    user.transactions.unshift({
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount
    })
    storageService.save(KEY, user)
}




export const userService = {
    signup,
    getUser,
    updateBalance,
    getTransactions,
    transferFunds
}