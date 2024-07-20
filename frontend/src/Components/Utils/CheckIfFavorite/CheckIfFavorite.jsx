export default function checkProductIdExists(dataArray, targetProductId) {
    for (var i = 0; i < dataArray.length; i++) {
        if (dataArray[i].productId === targetProductId) {
            return true;
        }
    }
    return false;
}