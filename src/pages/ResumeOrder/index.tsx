import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';
import { useContext } from 'react';
import Illustration from '../../assets/Illustration.png';
import { MenuContext } from '../../context/MenuContext';
import { ConfirmedPayment, ConfirmedPaymentSubtitle, DescriptionsDiv, InfoPayment, OrderSuccessContainer, DescriptionMapTag, DescriptionClockTag, DescriptionCurrencyTag, DivImageInfo } from './styles';

export function ResumeOrder(){

    const {paymentInfo } = useContext(MenuContext)

    return (
        <OrderSuccessContainer>
            <ConfirmedPayment>Uhu! Pedido confirmado</ConfirmedPayment>
            <ConfirmedPaymentSubtitle>Agora é só aguardar que logo o café chegará até você</ConfirmedPaymentSubtitle>
            <DivImageInfo>
                <InfoPayment>
                    <DescriptionsDiv>
                        <DescriptionMapTag>
                            <MapPin />

                        </DescriptionMapTag>
                        <div>
                            <p>Entrega em <span>{paymentInfo?.rua}, {paymentInfo?.numero}</span></p>
                            <p>{paymentInfo?.bairro} - {paymentInfo?.cidade}, {paymentInfo?.uf}</p>
                        </div>
                    </DescriptionsDiv>
                    <DescriptionsDiv>
                        <DescriptionClockTag >
                            <Clock/>
                        </DescriptionClockTag>
                        <div>
                            <p>Previsão de entrega</p>
                            <span>20 min - 30 min</span>
                        </div>
                    </DescriptionsDiv>
                    <DescriptionsDiv>
                        <DescriptionCurrencyTag>
                            <CurrencyDollar/>
                        </DescriptionCurrencyTag>
                        <div>
                            <p>Pagamento na entrega</p>
                            <span>{paymentInfo?.method}</span>
                        </div>
                    </DescriptionsDiv>
                </InfoPayment>
                <img src={Illustration} alt="Um entregador levando o pedido numa motocicleta de cor roxa." />
            </DivImageInfo>
        </OrderSuccessContainer>
    )
}