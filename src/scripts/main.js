// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 5, 10)
let bowl = makePottery("bowl", 6, 12)
let vase = makePottery("vase", 7, 14)
let candlestick = makePottery("candlestick", 8, 16)
let pot = makePottery("pot", 9, 18)

// console.log(mug)
// console.log(bowl)
// console.log(vase)
// console.log(candlestick)
// console.log(pot)

// Fire each piece of pottery in the kiln
let fireMug = firePottery(mug, 100)
let fireBowl = firePottery(bowl, 1000)
let fireVase = firePottery(vase, 3000)
let fireCandlestick = firePottery(candlestick, 2201)
let firePot = firePottery(pot, 2199)

// console.log(fireMug)
// console.log(fireBowl)
// console.log(fireVase)
// console.log(fireCandlestick)
// console.log(firePot)

// Determine which ones should be sold, and their price
let sellMug = toSellOrNotToSell(mug)
let sellBowl = toSellOrNotToSell(bowl)
let sellVase = toSellOrNotToSell(vase)
let sellCandlestick = toSellOrNotToSell(candlestick)
let sellPot = toSellOrNotToSell(pot)

// console.log(sellMug)
// console.log(sellBowl)
// console.log(sellVase)
// console.log(sellCandlestick)
// console.log(sellPot)

let finalList = usePottery()
console.log(finalList)

// Invoke the component function that renders the HTML list



