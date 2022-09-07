import { Menu } from "../context/MenuContext"

export enum ActionTypes {
    ADD_ITEM =  'ADD_ITEM',
    DELETE_ITEM = 'DELETE_ITEM'
}

export function addItemList(item: Menu) {

    return {
        type: ActionTypes.ADD_ITEM,
        payload: {
            newItem: item
        }
    }
}

export function deleteItemList(id: number) {

    return {
        type: ActionTypes.DELETE_ITEM,
        payload: {
            deletedItemId: id
        }
    }
}