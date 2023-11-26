import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"

const potteryToBeSold = []

export const toSellOrNotToSell = (potteryItem) => {

    if (potteryItem.cracked == true) {
        return potteryItem
    } else if (potteryItem.weight >= 6 && potteryItem.cracked == false) {
        potteryItem.price = 40
        potteryToBeSold.push(potteryItem)
    } else if (potteryItem.weight < 6 && potteryItem.cracked == false) {
        potteryItem.price = 20
        potteryToBeSold.push(potteryItem)
    } return potteryItem
}

export const usePottery = () => {
    return potteryToBeSold
}