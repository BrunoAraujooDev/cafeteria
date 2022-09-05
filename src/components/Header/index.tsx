import { MapPin, ShoppingCart } from "phosphor-react";
import styled from "styled-components";
import logo from '../../assets/Logo.svg';


export function Header(){

    return (
        <HeaderContainer>
            <img src={logo} alt="Logo da cafeteria com um copo de café roxo à esquerda e o nome coffee delivery na direita" />
            <nav>
                <HeaderList>
                    <LocalizationList>
                        <MapPin weight="fill"/>
                        São Gonçalo, RJ
                    </LocalizationList>
                    <CartList>
                        <ShoppingCart />
                    </CartList>
                </HeaderList>
            </nav>
        </HeaderContainer>
    )
}


const HeaderContainer = styled.header`
    
    display: flex;
    justify-content: space-between;
    padding: 2rem 10rem;
    align-items: center;
    width: 100vw;
    height: 6.5rem;

    img {
        width: 5.3rem;
        height: 2.5rem;
    }

`

const HeaderList = styled.ul`
    
    height: 2.37rem;
    width: 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;

`

const ListIcons = styled.li`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border-radius: 6px;
    padding: 0.5rem;
`

const LocalizationList = styled(ListIcons)`
    background-color: ${prop => prop.theme['produto-purple-light']};
    color: ${prop => prop.theme['produto-purple-dark']};
    height: 100%;
`

const CartList = styled(ListIcons)`
    background-color: ${prop => prop.theme['produto-yellow-light']};
    color: ${prop => prop.theme['produto-yellow-dark']};
`