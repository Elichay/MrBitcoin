'use strict'

export const utilService = {
    makeId,
    getRandomInt,
    getRandomIntInclusive,
    getRandomUppercaseLetter,
    generateRandomName,
}

function makeId() {
    var pt1 = Date.now().toString(16)
    var pt2 = getRandomInt(1000, 9999).toString(16)
    var pt3 = getRandomInt(1000, 9999).toString(16)
    return `${pt3}-${pt1}-${pt2}`.toUpperCase()
}

function getRandomInt(num1, num2) {
    var max = num1 >= num2 ? num1 + 1 : num2 + 1
    var min = num1 <= num2 ? num1 : num2
    return Math.floor(Math.random() * (max - min)) + min
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
  }

  function getRandomUppercaseLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return letters[Math.floor(Math.random() * 26)]
  }

  function generateRandomName() {
    const names = [
        "Emma", "Olivia", "Ava", "Isabella", "Sophia", "Charlotte", "Mia", "Amelia", "Harper", "Evelyn",
        "Abigail", "Emily", "Elizabeth", "Avery", "Sofia", "Ella", "Madison", "Scarlett", "Victoria", "Aria",
        "Grace", "Chloe", "Noa", "Liam", "Yael", "Tal", "Eitan", "Adi", "Nir", "Lilach",
        "Orly", "Alon", "Shirel", "Eyal", "Ido", "Omer", "Omri", "Niv", "Gal", "Gilad",
        "Emma", "Olivia", "Ava", "Isabella", "Sophia", "Charlotte", "Mia", "Amelia", "Harper", "Evelyn",
        "Abigail", "Emily", "Elizabeth", "Avery", "Sofia", "Ella", "Madison", "Scarlett", "Victoria", "Aria",
        "Grace", "Chloe", "Noa", "Liam", "Yael", "Tal", "Eitan", "Adi", "Nir", "Lilach"
      ]
    const randomIndex = Math.floor(Math.random() * names.length)
    return names[randomIndex]
  }