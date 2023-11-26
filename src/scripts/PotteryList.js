import { potteryToBeSold } from "./PotteryCatalog.js"

const potteryListArticle = document.querySelector(".potteryList")

export const potteryList = () => {

let n = 0

    for (const item of potteryToBeSold) {
        potteryListArticle.innerHTML += `
        <section class="pottery" id="pottery--${n + 1}">
            <h2 class="pottery__shape">${item.shape}</h2>
            <div class="pottery__properties">
            Item weighs ${item.weight} grams and is ${item.height} cm in height
            </div>
            <div class="pottery__price">Price is $${item.price}</div>
        </section>
        `
    }
}