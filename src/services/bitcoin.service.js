'use strict'

import axios from "axios"
import {storageService} from "./storage.service.js"


const exchangeRateAPI = 'https://blockchain.info/tobtc?currency=USD&value=1'
const marketPriceHistoryAPI = 'https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true'
const avgBlockSizeAPI = 'https://api.blockchain.info/charts/avg-block-size?timespan=1months&format=json&cors=true'
const marketStatsAPI = 'https://api.blockchain.info/stats?cors=true'


export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

async function getRate() {
    let rate = storageService.load('rate')
    if(rate) return rate
    try {
        rate = await axios.get(exchangeRateAPI)
        console.log('rate:',rate)
        storageService.save('rate', rate.data)
        return rate.data
    }
    catch (err) {
        throw new Error('Err', err)
    }
}

async function getMarketPriceHistory() {
    let pricesHistory = storageService.load('prices-history')
    if(pricesHistory) return pricesHistory
    try {
        pricesHistory = await axios.get(marketPriceHistoryAPI)
        storageService.save('prices-history', pricesHistory.data)
        return pricesHistory.data
    }
    catch (err) {
        throw new Error('Err', err)
    }
}
// {
//     x: timestamp
//     y: value in USdollar
// }

async function getAvgBlockSize() {
    let blockSizeAvgs = storageService.load('block-size-avgs')
    if(blockSizeAvgs) return blockSizeAvgs
    try {
        const blockSizeAvgs = await axios.get(avgBlockSizeAPI)
        // console.log(blockSizeAvgs)
        return blockSizeAvgs.data
    }
    catch (err) {
        throw new Error('Err', err)
    }
}
// {
//     x: timestamp
//     y: avarege block size in MB
// }
