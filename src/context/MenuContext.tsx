import { createContext, ReactNode, useReducer } from "react";
import { checkoutData } from "../pages/PaymentPage";
import { addItemList, handlePayment } from "../reducers/actions";
import { MenuReducer } from "../reducers/reducer";


export interface Menu {
    title: string
    description: string
    ingredients: string[]
    image: string
    id: number
    quantity: number
}

interface MenuContextType {
    menuSelected?: Menu[]
    countCoffeeSelected?: number | null
    handleMenuCart: (item: Menu | undefined, quantity: number) => void
    handlePaymentCheckout: (item: checkoutData, method: String) => void
    paymentInfo?: checkoutData
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

    function handleMenuCart(item: Menu | undefined, quantity: number){
        dispatch(addItemList(item, quantity))
    }

    function handlePaymentCheckout(paymentForm: checkoutData, method: String){
        dispatch(handlePayment(paymentForm, method))
    }


    const { menuSelected, countCoffeeSelected, paymentInfo } = menuState;

return (
    <MenuContext.Provider value={{menuSelected, countCoffeeSelected, handleMenuCart, paymentInfo, handlePaymentCheckout }}>
        {children}
    </MenuContext.Provider>
)

}