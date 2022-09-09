import { createContext, ReactNode, useReducer } from "react";
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


    const { menuSelected, countCoffeeSelected } = menuState;

return (
    <MenuContext.Provider value={{menuSelected, countCoffeeSelected }}>
        {children}
    </MenuContext.Provider>
)

}