let idNumber = 1

export const makePottery = (potteryShape, potteryWeight, potteryHeight) => {

    const id = idNumber++ -1

    let potteryItem = {}

    potteryItem["shape"] = potteryShape
    potteryItem["weight"] = potteryWeight
    potteryItem["height"] = potteryHeight
    potteryItem["id"] = id

    return potteryItem
}