
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { Menu, MenuContext } from "../../../context/MenuContext"
import { getCoffeeMenu } from "../../../services/coffee.service"



export function MenuCafeteria() {


    const { handleMenuCart  } = useContext(MenuContext);

    const [menuData, setMenuData] = useState<Menu[]>([{
        title: '',
        description: '',
        ingredients: [],
        image: '',
        id: 0
    }])

    const [quantitySelected, setQuantitySelected] = useState<number[]>(
        () => {
            let newArray = new Array(16)
            newArray.fill(1, 0, newArray.length)

            return newArray;
        }
    )

    useEffect(() => {
        getCoffeeMenu().then(resp => setMenuData(resp));
    }, [])



    function insertIntoCart(id: number, index: number) {

        const selectedCoffee = menuData.find(item => item.id === id);
        
       console.log(typeof  handleMenuCart);
       
        handleMenuCart(selectedCoffee, quantitySelected[index])

    }

    function addCount(index: number) {
        const updateArray = [...quantitySelected]

        updateArray[index] = quantitySelected[index] + 1
        
        setQuantitySelected( updateArray)
    }
    
    function deleteCount(index: number) {
        const updateArray = [...quantitySelected]

        if(quantitySelected[index] > 1) {
            updateArray[index] = quantitySelected[index] - 1
            setQuantitySelected( updateArray)

        }
      
    }
    



    return (
        <ContainerMenu>
            <h3>Nossos cafés</h3>

            <CardContainer>
                {menuData.map((item: Menu, index: number) => {
                    return (
                        <CardItem key={item.id}>
                            <CardImage src={item.image} alt={item.description} />
                            <TagDiv>
                                {item.ingredients.map((item) => {
                                    return (

                                        <TagItem key={item}>{item}</TagItem>

                                    )
                                })}
                            </TagDiv>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                            <CardValueDiv>
                                <SpanPrice>R$ <span>9,90</span></SpanPrice>
                                <CountDiv>
                                    <span onClick={() => deleteCount(index)}>
                                        <Minus weight="fill" />
                                    </span>
                                    <p>
                                        {quantitySelected[index]}
                                    </p>
                                    <span onClick={() => addCount(index)}>
                                        <Plus weight="fill" />
                                    </span>
                                </CountDiv>
                                <CartIcon onClick={() => insertIntoCart(item.id, index)}>
                                    <ShoppingCartSimple weight="fill" />
                                </CartIcon>
                            </CardValueDiv>
                        </CardItem>
                    )
                })}
            </CardContainer>

        </ContainerMenu>
    )
}

const ContainerMenu = styled.section`
    padding: 2rem 10rem;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 3.375rem;
`

const CardItem = styled.div`  
    height: 23rem;
    width: 18rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${prop => prop.theme['base-card']};
    border-radius: 6px 36px;
    gap: 8px;
    padding: 8px 16px;
`

const CardImage = styled.img`
    height: 7.5rem;
    min-height: 7.5rem;
    width: 7.5rem;
    min-width: 7.5rem;
    object-fit: cover;
    border-radius: 2rem;
    margin: 1.125rem;
`

const TagDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
`

const TagItem = styled.span`
    background-color: ${prop => prop.theme['produto-yellow-light']};
    color: ${prop => prop.theme['produto-yellow-dark']};
    padding: 4px 8px;
    border-radius: 100px;
    line-height: 1.3;
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
`

const CardTitle = styled.h3`
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.3;
    color: ${prop => prop.theme['base-subtitle']};
`

const CardDescription = styled.p`
    text-align: center;
    line-height: 1.3;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${prop => prop.theme['base-label']};
    text-overflow: ellipsis;
    max-height: 4rem;
    overflow: hidden;

`

const CardValueDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.43rem;
    margin-top: 2.06rem;
`

const SpanPrice = styled.p`

    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;

    span {
        font-family: 'Baloo 2';
        font-weight: 700;
        color: ${prop => prop.theme['base-subtitle']};
        font-size: 1.125rem;
    }

`

const CartIcon = styled.span`
    background-color: ${prop => prop.theme['produto-purple-dark']};
    color: ${prop => prop.theme['white']};
    padding: 8px;
    border-radius: 6px;
    height: 2rem;
    text-align: center;
    cursor: pointer;

    &:hover{
        background-color: ${prop => prop.theme['produto-purple']};
    }
`

const CountDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${prop => prop.theme['base-button']};
    border-radius: 6px;
    padding: 8px;
    gap: 4px;
    
    span {
        color: ${prop => prop.theme['produto-purple-dark']};
        height: 0.875rem;
        width: 0.875rem;
        margin: 0 3px;
        cursor: pointer;

        &:hover{
            color: ${prop => prop.theme['base-light']};
        }
    }

    p{
        font-weight: 400;
        line-height: 1.3;
        margin: 0 3px;
    }
`

