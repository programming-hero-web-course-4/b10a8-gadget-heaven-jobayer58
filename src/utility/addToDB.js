const getStoreCartList = () => {
    const storedListStr = localStorage.getItem('cart-list')
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList
    }else{
        return []
    }
    

}

const addToStoreCartList = (id) => {
    const storedList = getStoreCartList()
    if (storedList.includes(id)) {
        console.log(id, 'alReady exist')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('cart-list',storedListStr)
    }
}

const getStoreWishList = () => {
    const storedListStr = localStorage.getItem('wish-list')
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList
    }else{
        return []
    }
    

}

const addToStoreWishList = (id) => {
    const storedList = getStoreWishList()
    if (storedList.includes(id)) {
        console.log(id, 'alReady exist')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('wish-list',storedListStr)
    }
}




export {addToStoreCartList, getStoreCartList, addToStoreWishList,getStoreWishList}