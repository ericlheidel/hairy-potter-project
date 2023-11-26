import { makePottery } from "./PotteryWheel.js"

export const firePottery = (potteryItem, temperature) => {
    makePottery()

    potteryItem.fired = true
    potteryItem.temp = temperature

    if (temperature > 2200) {
        potteryItem.cracked = true
    } else {
        potteryItem.cracked = false
    }

    return potteryItem
}