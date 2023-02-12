'use strict'

import { dbService } from './db.service.js'
import { utilService } from './util.service.js'
const KEY = 'contacts'

export const contactService = {
    query,
    get,
    remove,
    save,
    getEmptyContact,
}

async function query() {
    var contacts = await dbService.query(KEY)

    console.log(contacts)
    if (!contacts || !contacts.length) {
        contacts = _createDefaultContacts()
        await dbService.insert(KEY, contacts)
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
    return {
        name: utilService.generateRandomName(),
        score: utilService.getRandomIntInclusive(20, 100),
    }
}

function _createDefaultContacts() {
    return [
        _createContact('Udi', 50),
        _createContact('Fiubert', 73),
        _createContact('Hubert', 100),
        _createContact('Schubert', 100),
    ]
}

function _createContact(name, score) {
    return {
        name,
        score,
    }
}
