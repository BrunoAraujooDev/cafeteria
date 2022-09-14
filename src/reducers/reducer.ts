import { Menu } from "../context/MenuContext";
import { ActionTypes } from "./actions";



interface MenuState {
    menuSelected: Menu[]
    countCoffeeSelected: number | null
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
        default:
            return state;
    }
}