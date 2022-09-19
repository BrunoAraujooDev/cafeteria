import { Menu } from "../context/MenuContext"
import { checkoutData } from "../pages/PaymentPage"

export enum ActionTypes {
    ADD_ITEM =  'ADD_ITEM',
    DELETE_ITEM = 'DELETE_ITEM',
    HANDLE_PAYMENT = 'HANDLE_PAYMENT'

}

export function addItemList(item: Menu | undefined, quantity: number) {

    const coffeeWithQuantity = {
        ...item,
        quantity: quantity
    }

    return {
        type: ActionTypes.ADD_ITEM,
        payload: {
            newItem: coffeeWithQuantity,
            quantity: quantity
        }
    }
}

export function deleteItemList(id: number, quantity: number) {

    return {
        type: ActionTypes.DELETE_ITEM,
        payload: {
            deletedItemId: id,
            quantity: quantity
        }
    }
}

export function handlePayment(payment: checkoutData){
    return{
        type: ActionTypes.HANDLE_PAYMENT,
        payload: {
            checkout: payment
        }
    }
}
