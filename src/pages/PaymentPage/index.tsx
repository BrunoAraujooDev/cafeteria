import { Bank, CreditCard, CurrencyDollar, MapPin, Minus, Money, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { MenuContext } from "../../context/MenuContext";
import { CheckoutContainer, InputFormSection, MapPinDiv, InputArea, InputAreaDiv, LabelInputComplemento, CurrencyDollarDiv, PaymentOptionButton, PaymentOptionDiv, InputDiv } from "./style";

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
                    {menuSelected?.map(coffee => {
                        return (
                            <div key={coffee.id}>
                                {/* <img src={coffee.image} alt={coffee.title}/> */}
                                <div>
                                    <p>{coffee.title}</p>
                                    <div>
                                        <div>
                                            <span>
                                                <Minus weight="fill" />
                                            </span>
                                            <p>
                                                {coffee.quantity}
                                            </p>
                                            <span >
                                                <Plus weight="fill" />
                                            </span>
                                        </div>
                                        <button type="button">
                                            <Trash size={32}  />
                                            Remover
                                        </button>
                                    </div>
                                </div>
                                <p>R$ {9.90 * (coffee.quantity || 1)}</p>
                            </div>
                        )
                    })}
                    <div>
                        <p>Total de itens</p>
                        <p>{`R$ ${totalPay}`}</p>
                    </div>
                    <div>
                        <p>Entrega</p>
                        <p>R$ 3,50</p>
                    </div>
                    <div>
                        <p>Total </p>
                        <p>R$ total com entrega</p>
                    </div>
                    <button type="submit" disabled>
                        CONFIRMAR PEDIDO
                    </button>
                </InputFormSection>
            </form>
        </CheckoutContainer>
    )
}