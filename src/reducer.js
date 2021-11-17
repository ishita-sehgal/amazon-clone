export const initialState={
    basket:[],
};
//selector
export const getBasketTotal=(basket)=>
    // '?' is for no error if basket not there or empty etc..
    basket?.reduce((amount,item)=> item.price+amount,0);


const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket:[...state.basket,action.item],
            };
            case 'REMOVE_FROM_BASKET':
                const index= state.basket.findIndex(action.id)
       default:
            return state;
    }
};
export default reducer;