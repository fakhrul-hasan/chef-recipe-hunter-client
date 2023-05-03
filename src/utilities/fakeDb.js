const addToDb = id =>{
    let favCart = getFavCart();
    favCart.push(id);
    localStorage.setItem('fav-cart', JSON.stringify(favCart));
}
const getFavCart=()=>{
    let favCart = [];
    const storedCart = localStorage.getItem('fav-cart');
    if(storedCart){
        favCart = JSON.parse(storedCart);
    }
    return favCart;
}

export {addToDb, getFavCart}