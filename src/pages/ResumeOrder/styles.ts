import { DownloadSimple } from "phosphor-react";
import styled from "styled-components";


export const OrderSuccessContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    padding: 0 21rem;
`

export const ConfirmedPayment = styled.p`
    color: ${prop => prop.theme['produto-yellow-dark']}; 
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
`

export const ConfirmedPaymentSubtitle = styled.p`
    color: ${prop => prop.theme['base-subtitle']}; 
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
`

export const DivImageInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6rem;
    margin-top: 2rem;

    img{
        height: 100%;
        width: 32rem;
    }
`

export const InfoPayment = styled.div`
    display: flex;
    border: 1px solid transparent;
    background: linear-gradient( ${prop => prop.theme['white']}, 
        ${prop => prop.theme['white']}) padding-box,
        linear-gradient(to left, ${prop => prop.theme['produto-purple']}, 
        ${prop => prop.theme['produto-yellow']}) border-box   ;
    border-radius: 6px 36px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 40px;
    gap: 32px;
    width: 32rem;
    height: 100%;
`

export const DescriptionsDiv = styled.div`
    display: flex;
    gap: 12px;

    div:nth-child(2) {
        font-weight: 400;
        color: ${prop => prop.theme['base-text']};

        span {
            font-weight: bold;
        }
    }


`

 const DescriptionsIcon = styled.div`
    color: ${prop => prop.theme['white']};
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
` 

export const DescriptionMapTag = styled(DescriptionsIcon)` 
    background-color: ${prop => prop.theme['produto-purple']};
`

export const DescriptionClockTag = styled(DescriptionsIcon)` 
    background-color: ${prop => prop.theme['produto-yellow']};
`

export const DescriptionCurrencyTag = styled(DescriptionsIcon)` 
    background-color: ${prop => prop.theme['produto-yellow-dark']};
`