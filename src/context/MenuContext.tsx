import { createContext, ReactNode, useReducer } from "react";
import { addItemList } from "../reducers/actions";
import { MenuReducer } from "../reducers/reducer";


export interface Menu {
    title: string
    description: string
    ingredients: string[]
    image: string
    id: number
}

interface MenuContextType {
    menuSelected?: Menu[]
    countCoffeeSelected?: number | null
    handleMenuCart: (item: Menu | undefined, quantity: number) => void
}

interface MenuContextProp {
    children: ReactNode
  }

export const MenuContext = createContext({} as MenuContextType);


export async function MenuContextProvider({children } : MenuContextProp){


    const [menuState, dispatch] = useReducer(MenuReducer, 
        {
            menuSelected: [],
            countCoffeeSelected: null,
        }
    )

    function handleMenuCart(item: Menu | undefined, quantity: number){
        dispatch(addItemList(item, quantity))
    }


    const { menuSelected, countCoffeeSelected } = menuState;

return (
    <MenuContext.Provider value={{menuSelected, countCoffeeSelected, handleMenuCart }}>
        {children}
    </MenuContext.Provider>
)

}