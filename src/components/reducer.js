export const initialState = {
    cart: [],
    user:null
};

// Incrementing Subtotal
export const getSubtotal = (cart) => { 
    return (
        cart?.reduce((amount, item) => item.price + amount, 0)  
    )
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, action.item] }
        
        case "REMOVE_FROM_CART":
    
            const index = state.cart.findIndex(
                (item) => item.id === action.id
            )

            let newCart = [...state.cart];

            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.warn(`Cant remove Item `)
            }


            return {
                // first Way 
                // ...state,
                // cart: state.cart.filter(item => item.id !== action.id)


                ...state,
                cart:newCart
            }
        
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }

        
        default:
            return state;
    }
}       