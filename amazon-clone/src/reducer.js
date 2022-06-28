
// Reducer is the one listening for changes and acts accordingly
export const initialState = {
    basket:[],
    user:null
    
};

// Selector

export var getBasketTotal = (basket)=>{
    return basket?basket.reduce((initialAmount,item)=>item.price+initialAmount,0):0;
}

const reducer = (state=initialState,action)=>{
    
    switch(action.type){
        case 'ADD_TO_BASKET':
            const ab = [...state.basket,action.item];
            return {
                ...state,
                basket:[...state.basket,action.item],
            }

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem)=>basketItem.id===action.id
            )

            let newBasket = [...state.basket];
            if(index>=0){
                newBasket.splice(index,1);
            }else{
                console.warn(`${action.id} is not in the cart`)
            }

            return {
                ...state,basket:newBasket
            }

        case 'SET_USER':
            return {...state,user:action.user};  
        case 'EMPTY_BASKET':
            return {...state,basket:[]}      
        default:
            return state;
    }

}
export default reducer;