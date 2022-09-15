import { Bank, CreditCard, CurrencyDollar, MapPin, Minus, Money, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { MenuContext } from "../../context/MenuContext";
import { CheckoutContainer, InputFormSection, MapPinDiv, InputArea, InputAreaDiv, LabelInputComplemento, CurrencyDollarDiv, PaymentOptionButton, 
    PaymentOptionDiv, InputDiv, ChoisesDiv, PaymentFormSection, AddOrRemoveAmountDiv, CountDiv, CoffeeName, PriceCoffee, TotalPaymentDiv, TotalPlusDeliveryDiv, SubmitButton } from "./style";

export function PaymentPage(){

    const { menuSelected } = useContext(MenuContext);
    

    const [totalPay, setTotalPay] = useState<Number>(() => {
        const total = menuSelected?.reduce((acc, item) => parseFloat((acc + (item.quantity * 9.90)).toFixed(2)) , 0) || 0
        return total
    });

    return (
        <CheckoutContainer>
            <form>
                <InputFormSection>
                <h3>Complete seu pedido</h3>
                <InputDiv>

                    <MapPinDiv>
                        <MapPin size={22}/>
                        <div>
                            <h5>Endereço de Entrega</h5>
                            <p>
                                Informe o endereço onde deseja receber seu pedido
                            </p>
                        </div>
                    </MapPinDiv>

                    <InputArea type="number" placeholder="CEP"/>
                    <InputArea type="text" placeholder="Rua"/>
                    <InputAreaDiv>
                        <InputArea type="number" placeholder="Número"/>
                        <LabelInputComplemento htmlFor="">Opcional</LabelInputComplemento>
                        <InputArea type="text" placeholder="Complemento"/>   
                    </InputAreaDiv>
                    <InputAreaDiv>
                        <InputArea type="text" placeholder="Bairro"/>
                        <InputArea type="text" placeholder="Cidade"/>
                        <InputArea type="text" placeholder="UF"/>
                    </InputAreaDiv>
                </InputDiv>
                    <InputDiv>
                        <CurrencyDollarDiv>
                            <CurrencyDollar size={22} />
                            <div>
                                <h5>Pagamento</h5>
                                <p>
                                    O pagamento é feito na entrega. Escolha a forma que deseja pagar
                                </p>
                            </div>
                        </CurrencyDollarDiv>
                        <PaymentOptionDiv>
                            <PaymentOptionButton type='button'>
                                <CreditCard   />
                                CARTÃO DE CRÉDITO
                            </PaymentOptionButton>
                            <PaymentOptionButton type='button'>
                                <Bank   />
                                    CARTÃO DE DÉBITO
                            </PaymentOptionButton>
                            <PaymentOptionButton type='button'>
                                <Money   />
                                    DINHEIRO
                            </PaymentOptionButton>
                        </PaymentOptionDiv>
                    </InputDiv>
                </InputFormSection>
                <InputFormSection>
                    <h3>Cafés selecionados</h3>
                    <PaymentFormSection>

                    {menuSelected?.map(coffee => {
                        return (
                            <ChoisesDiv key={coffee.id}>
                                <img src={coffee.image} alt={coffee.title}/>
                                <div>
                                    <CoffeeName>{coffee.title}</CoffeeName>
                                    <AddOrRemoveAmountDiv>
                                        <CountDiv>
                                            <span>
                                                <Minus weight="fill" />
                                            </span>
                                            <p>
                                                {coffee.quantity}
                                            </p>
                                            <span >
                                                <Plus weight="fill" />
                                            </span>
                                        </CountDiv>
                                        <button type="button">
                                            <Trash size={16}  />
                                            Remover
                                        </button>
                                    </AddOrRemoveAmountDiv>
                                </div>
                                <PriceCoffee>R$ {9.90 * (coffee.quantity || 1)}0</PriceCoffee>
                            </ChoisesDiv>
                        )
                    })}
                    <TotalPaymentDiv>
                        <p>Total de itens</p>
                        <p>{`R$ ${totalPay}0`}</p>
                    </TotalPaymentDiv>
                    <TotalPaymentDiv>
                        <p>Entrega</p>
                        <p>R$ 3.50</p>
                    </TotalPaymentDiv>
                    <TotalPlusDeliveryDiv>
                        <p>Total </p>
                        <p>{`R$ ${totalPay + 3.5}0`}</p>
                    </TotalPlusDeliveryDiv>
                    <SubmitButton type="submit" disabled>
                        confirmar pedido
                    </SubmitButton>
                    </PaymentFormSection>
                </InputFormSection>
            </form>
        </CheckoutContainer>
    )
}