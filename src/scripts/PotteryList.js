import { potteryToBeSold } from "./PotteryCatalog.js"

export const PotteryList = () => {

    // let n = 0

    let html = ``

    for (const item of potteryToBeSold) {
        html += `
        <section class="pottery" id="pottery--${item.id}">
            <h2 class="pottery__shape">${item.shape}</h2>
            <div class="pottery__properties">
            Item weighs ${item.weight} grams and is ${item.height} cm in height
            </div>
            <div class="pottery__price">Price is $${item.price}</div>
        </section>
        `
    } return html
}