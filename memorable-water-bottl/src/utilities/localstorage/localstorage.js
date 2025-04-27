/**
 * 1.To get somthing from local storage, you will get it as string 
 * 2.Convert this to javascript object/array
 */

const getCartFromLocalStorage = () =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }

    return [];
}

const saveItemToCartLocalStorage = id =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addItemToCartLocalStorage = id =>{
    const cart = getCartFromLocalStorage();
    const newCart = [...cart, id];

    //save new cart to the local storage

    saveItemToCartLocalStorage(newCart);
}

export {getCartFromLocalStorage, addItemToCartLocalStorage}