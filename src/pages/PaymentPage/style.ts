import styled from "styled-components";


export const CheckoutContainer = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    
    
    form {
        display: flex;
        margin-top: 8rem;
        justify-content: center;
        align-items: flex-start;
        gap: 2rem;

        @media (max-width: 1180px) {
            flex-direction: column;
            margin-top: 60rem;
            padding: 5em;
            width: 100%;
        }
        

    }
`

export const InputFormSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    
    h3 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.3;
        color: ${prop => prop.theme['base-subtitle']};
    }
`

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    background-color: ${prop => prop.theme['base-card']};
    padding: 2.5rem;
    border-radius: 6px;
    width: 40rem;
`



export const MapPinDiv = styled.div`
    display: flex;
    gap: 8px;

    svg{
        color: ${prop => prop.theme['produto-yellow-dark']};
    }

    div {
        line-height: 1.3;

        h5 {
            color: ${prop => prop.theme['base-subtitle']};
            font-size: 1rem;      
        }

        p {
            color: ${prop => prop.theme['base-text']};
            font-size: 0.875rem;
        }
    }
`

export const InputArea = styled.input`
    background-color: ${prop => prop.theme['base-input']};
    border: 1px solid ${prop => prop.theme['base-button']};
    border-radius: 4px;
    padding: 0.75rem;
    width: 100%;
`

export const InputAreaDiv = styled.div`
    display: flex;
    gap: 0.875rem;
    width: 100%;

    input[type=number]{
        width: 30%;
    }
`

export const LabelInputComplemento = styled.label`
    position: relative;
    left: 22rem;
    top: 1rem;
    font-style: italic;
    font-size: 0.75rem;

`

export const CurrencyDollarDiv = styled(MapPinDiv)`

    svg{
        color: ${prop => prop.theme['produto-purple']};
    }
`

export const PaymentOptionDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 0.75rem;
    margin-top: 2rem;
`

export const PaymentOptionButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 0.75rem;
    border-radius: 6px;
    border: none;
    background-color: ${prop => prop.theme['base-button']};
    cursor: pointer;
    line-height: 1.6;
    font-size: 0.75rem;
    font-weight: 400;

    svg {
        color: ${prop => prop.theme['produto-purple']};
        height: 2rem;
        width: 2rem;
    }
    
    &:focus {
        border: 1px solid ${prop => prop.theme['produto-purple']};
        background-color: ${prop => prop.theme['produto-purple-light']};
    }
    &:active {
        border: 1px solid ${prop => prop.theme['produto-purple']};
        background-color: ${prop => prop.theme['produto-purple-light']};
    }
`

export const PaymentFormSection  = styled(InputFormSection) `
    background-color: ${prop => prop.theme['base-card']};
    border-radius: 6px 44px;
    padding: 2.5rem;
    gap: 24px;
`


export const ChoisesDiv = styled.div`
    display: flex;
    gap: 20px;
    padding: 24px;
    border-bottom: 1px solid ${prop => prop.theme['base-button']};

    img {
        width: 4rem;
        height: 4rem;
        border-radius: 8px;
    }


`

export const CoffeeName = styled.p`
    font-weight: 400;
    line-height: 1.3;
    font-size: 1rem;
    color: ${prop => prop.theme['base-subtitle']};
    margin-bottom: 10px;
` 

export const AddOrRemoveAmountDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px;
        gap: 4px;
        background-color: ${prop => prop.theme['base-button']};
        border-radius: 6px;
        border: none;
        line-height: 1.6;
        font-size: 0.75rem;
        font-weight: 400;
        text-transform: uppercase;
        color: ${prop => prop.theme['base-text']};

        svg {
            color: ${prop => prop.theme['produto-purple']};
        }

        &:hover{
            background-color: ${prop => prop.theme['base-hover']};
        }
    }
`

export const CountDiv = styled.div`
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

export const PriceCoffee = styled.p` 
    font-weight: 700;
    line-height: 1.3;
    color: ${prop => prop.theme['base-text']};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const TotalPaymentDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    p{
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.3;
        color: ${prop => prop.theme['base-text']};
    }

`

export const TotalPlusDeliveryDiv = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: ${prop => prop.theme['base-subtitle']};
    font-weight: 700;
    font-size: 1.25rem;
`

export const SubmitButton = styled.button`
    background-color: ${prop => prop.theme['produto-yellow']};
    padding: 12px 8px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    color: ${prop => prop.theme['white']};

    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.6;
    text-transform: uppercase;
    width: 100%;

    &:hover{
        background-color: ${prop => prop.theme['produto-yellow-dark']};
    }
`

