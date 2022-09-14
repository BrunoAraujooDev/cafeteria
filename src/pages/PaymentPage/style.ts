import styled from "styled-components";


export const CheckoutContainer = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`

export const InputFormSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: ${prop => prop.theme['base-card']};
    padding: 2.5rem;
    gap: 2rem;
    margin-top: 200px;
    border-radius: 6px;
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
    left: 26rem;
    top: 1rem;
    font-style: italic;
    font-size: 0.75rem;

`

export const CurrencyDollarDiv = styled(MapPinDiv)`

    svg{
        color: ${prop => prop.theme['produto-purple']};
    }
`

export const PaymentOptionButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 0.75rem;
    background-color: ${prop => prop.theme['base-button']};
    cursor: pointer;

    svg {
        color: ${prop => prop.theme['produto-purple']};
    }
    
    &:active {

    }
`

