'use strict'

import { dbService } from './db.service.js'
import { utilService } from './util.service.js'
const KEY = 'contacts'

export const contactService = {
    getContacts,
    query,
    get,
    remove,
    save,
    getEmptyContact,
}


async function getContacts(filterBy = null) {
    let contacts = await query()
    return new Promise((resolve, reject) => {
        var contactsToReturn = contacts
        if (filterBy && filterBy.name) {
            _filter(filterBy.name)
                .then(filteredContacts => {
                    resolve(_sort(filteredContacts))
                })
                .catch(error => {
                    reject(error)
                })
        } else {
            resolve(_sort(contactsToReturn))
        }
    })
}

async function _filter(term) {
    let contacts = await query()
    term = term.toLocaleLowerCase()
    return contacts.filter(contact => { //for now i only use name
        return (contact.name && contact.name.toLocaleLowerCase().includes(term)) ||
            (contact.phone && contact.phone.toLocaleLowerCase().includes(term)) ||
            (contact.email && contact.email.toLocaleLowerCase().includes(term))
    })
}

function _sort(arr) {
    console.log('arr', arr)
    if (Array.isArray(arr)) {
        return arr.sort((a, b) => {
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                return -1
            }
            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                return 1
            }

            return 0
        })
    } else {
        throw new Error('The argument passed to the _sort function is not an array.')
    }
}

async function query(filterBy) {
    var contacts = await dbService.query(KEY)
    if (!contacts || !contacts.length) {
        contacts = _createDefaultContacts()
        await dbService.insert(KEY, contacts)
    }
    if (filterBy) {
        const regex = new RegExp(filterBy, 'i')
        contacts = contacts.filter(contact => regex.test(contact.name))
    }
    return contacts
}


async function get(id) {
    return await dbService.get(KEY, id)
}

async function remove(id) {
    return await dbService.remove(KEY, id)
}

async function save(contact) {
    if (contact._id) return await dbService.put(KEY, contact)
    else return await dbService.post(KEY, contact)
}

function getEmptyContact() {
    const rand = utilService.getRandomIntInclusive(1, 1000)
    const contactName = utilService.generateRandomName() + ' ' + utilService.getRandomUppercaseLetter() + '.'
    const contactScore = utilService.getRandomIntInclusive(20, 100)
    const phoneNum = '0' + utilService.getRandomIntInclusive(10, 99) + '-' + utilService.getRandomIntInclusive(100, 999) + '-' + utilService.getRandomIntInclusive(1000, 9999)
    return {
        name: contactName,
        score: contactScore,
        email: contactName + contactScore + '@gmail.com',
        phone: phoneNum,
        imgUrl: `https://robohash.org/${rand}?set=set5`
    }
}

function _createDefaultContacts() {
    return [
        _createContact('Udi U.', 50, '055-555-5553'),
        _createContact('Fiubert F.', 73, '055-555-5554'),
        _createContact('Hubert H.', 100, '055-555-5555'),
        _createContact('Schubert S.', 100, '055-555-5556'),
        ...Array.from({ length: 16 }, (_, i) => getEmptyContact())
    ]
}

function _createContact(name, score, phone) {
    const rand = utilService.getRandomIntInclusive(1, 1000)
    return {
        name,
        score,
        phone,
        email: name + score + '@gmail.com',
        imgUrl: `https://robohash.org/${rand}?set=set5`,
    }
}
