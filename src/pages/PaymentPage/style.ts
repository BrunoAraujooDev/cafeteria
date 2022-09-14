import styled from "styled-components";


export const CheckoutContainer = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    

    form {
        display: flex;
        margin-top: 12.5rem;

    }
`

export const InputFormSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    

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

