let idNumber = 1

export const makePottery = (potteryShape, potteryWeight, potteryHeight) => {

    // const id = idNumber++

    let potteryItem = {}

    potteryItem["shape"] = potteryShape
    potteryItem["weight"] = potteryWeight
    potteryItem["height"] = potteryHeight
    potteryItem["id"] = idNumber++

    console.log(potteryItem)
    return potteryItem
}