import { Menu } from "../context/MenuContext";
import { checkoutData } from "../pages/PaymentPage";
import { ActionTypes } from "./actions";



interface MenuState {
    menuSelected: Menu[]
    countCoffeeSelected: number | null
    paymentInfo?: checkoutData
}


export function MenuReducer(state: MenuState, action: any){

    switch(action.type){
        case ActionTypes.ADD_ITEM:
            return {
                ...state,
                menuSelected: [...state.menuSelected, action.payload.newItem],
                countCoffeeSelected: state.countCoffeeSelected + action.payload.quantity
            }
        case ActionTypes.DELETE_ITEM:
            return {
                ...state,
                menuSelected: state.menuSelected.filter(item => item.id !== action.paylaod.deletedItemId),
                countCoffeeSelected: (state.countCoffeeSelected || 0) - action.payload.quantity
            }
        case ActionTypes.HANDLE_PAYMENT:
            return {
                ...state,
                paymentInfo: action.payload.checkout
            }
        default:
            return state;
    }
}