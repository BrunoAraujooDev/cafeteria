import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import styled from "styled-components";
import coffee_delivery from '../../../assets/Imagem.svg';

export function Intro() {
    return (
        <IntroContainer>
            <IntroTextDiv>

                <IntroTitleDiv>
                    <IntroTitle>
                        Encontre o café perfeito para qualquer hora do dia
                    </IntroTitle>
                    <p>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </p>
                </IntroTitleDiv>
                <IntroList>
                    <li>
                        <ListIconCart >
                            <ShoppingCart />
                        </ListIconCart>
                        Compra simples e segura
                    </li>
                    <li>
                        <ListIconPackage >
                            <Package />
                        </ListIconPackage>
                        Embalagem mantém o café intacto
                    </li>
                    <li>
                        <ListIconClock >
                            <Timer />
                        </ListIconClock>
                        Entrega rápida e rastreada
                    </li>
                    <li>
                        <ListIconCoffee>
                            <Coffee weight="fill" />
                        </ListIconCoffee>
                        O café chega fresquinho até você
                    </li>
                </IntroList>
            </IntroTextDiv>
            <IntroImageDiv>
                <img src={coffee_delivery} alt="Imagem de um copo térmico de café branco com detalhes pretos e grãos de café ao redor dele, com o fundo amarelo" />
            </IntroImageDiv>
        </IntroContainer>
    )
}

const IntroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 10rem;
`

const IntroTextDiv = styled.div`
    max-width: calc(40rem + 2rem);
    min-width: calc(25rem + 2rem);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.1px);
    border: 1px solid rgba(128, 71, 248, 0.01);
    padding: 2rem;
`

const IntroTitleDiv = styled.div`
    gap: 1rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 4.125rem;

    p{
        line-height: 1.3;
        font-size: 1.25rem;
        font-weight: 400;
        color: ${prop => prop.theme['base-subtitle']};
    }
`

const IntroTitle = styled.h1`
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 1.3;
    font-size: 3rem;
    color: ${prop => prop.theme['base-light']};
    
`



const IntroList = styled.ul`
    list-style: none;
    display: grid;
    grid-template: 50% 1fr / 50% 1fr;
    gap: 1.125rem;


    li {
        display: flex;
        min-width: 14.43;
    }
`

const ListIcon = styled.span`
    color: ${prop => prop.theme['white']};
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
` 

const ListIconCart = styled(ListIcon)`
    background-color: ${prop => prop.theme['produto-yellow-dark']};
` 

const ListIconPackage = styled(ListIcon)`
    background-color: ${prop => prop.theme['base-text']};
` 

const ListIconClock = styled(ListIcon)`
    background-color: ${prop => prop.theme['produto-yellow']};
` 

const ListIconCoffee = styled(ListIcon)`
    background-color: ${prop => prop.theme['produto-purple']};
` 

const IntroImageDiv = styled.div` 
    margin-left: 5rem;
`
