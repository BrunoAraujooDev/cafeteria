import { createContext, ReactNode, useReducer } from "react";
import { MenuReducer } from "../reducers/reducer";
import { getCoffeeMenu } from "../services/coffee.service";


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
    coffeeList: Menu[]
}

interface MenuContextProp {
    children: ReactNode
  }

export const MenuContext = createContext({} as MenuContextType);


export function MenuContextProvider({children } : MenuContextProp){


    const [menuState, dispatch] = useReducer(MenuReducer, 
        {
            menuSelected: [],
            countCoffeeSelected: null,
        }
    )


    const { menuSelected, countCoffeeSelected } = menuState;

    let coffeeList: Menu[] = []

    getCoffeeMenu().then(resp => coffeeList = resp)


return (
    <MenuContext.Provider value={{menuSelected, countCoffeeSelected, coffeeList }}>
        {children}
    </MenuContext.Provider>
)

}