import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import styled from "styled-components";
import logo from '../../assets/Logo.svg';
import { MenuContext } from "../../context/MenuContext";


export function Header(){

    const { countCoffeeSelected } = useContext(MenuContext);

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
                        { countCoffeeSelected && <CountingSelection>{countCoffeeSelected}</CountingSelection>}
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
    position: fixed;
    top: 0;
    background-color: ${prop => prop.theme['base-background']};

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

const CountingSelection = styled.span`
    position: absolute;
    content: '';
    top: 1rem;
    right: 9.5rem;
    border-radius: 50%;
    background-color: ${prop => prop.theme['produto-yellow-dark']};
    color:  ${prop => prop.theme['white']};
    padding: 8px;
    font-size: 0.8rem;

`