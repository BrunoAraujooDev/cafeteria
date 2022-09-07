
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Menu } from "../../../context/MenuContext"
import { getCoffeeMenu } from "../../../services/coffee.service"






export function MenuCafeteria(){

    
    const [menuData, setMenuData] = useState<Menu[]>([{
        title: '',
        description: '',
        ingredients: [],
        image: '',
        id: 0
    }])

    
    
    
    

    return (
        <section>
            <h3>Nossos cafés</h3>

            <CardItem>
                { menuData.map((item: Menu) =>  {
                    return (
                        <div key={item.id}>
                            <img src={item.image} alt="" />
                        </div>
                    )
                } )}
            </CardItem>
        </section>
    )
}

const CardItem = styled.div`
    height: 19.37rem;
    width: 16rem;
    background-color: ${prop => prop.theme['base-card']};
    border-radius: 6px 36px;
`

 