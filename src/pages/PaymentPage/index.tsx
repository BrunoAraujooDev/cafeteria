import { Bank, CreditCard, CurrencyDollar, MapPin, Minus, Money, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { MenuContext } from "../../context/MenuContext";
import { CheckoutContainer, InputFormSection, MapPinDiv, InputArea, InputAreaDiv, LabelInputComplemento, CurrencyDollarDiv, PaymentOptionButton, 
    PaymentOptionDiv, InputDiv, ChoisesDiv, PaymentFormSection, AddOrRemoveAmountDiv, CountDiv, CoffeeName, PriceCoffee, TotalPaymentDiv, TotalPlusDeliveryDiv, SubmitButton } from "./style";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";


export interface checkoutData {
    cep: number,
    rua: string,
    numero: number,
    bairro: string,
    complemento?: string,
    cidade: string,
    uf: string
    method?: string
}


export function PaymentPage(){

    const { menuSelected, handlePaymentCheckout } = useContext(MenuContext);

    const {   register, handleSubmit,  formState: { errors } } = useForm<checkoutData>()
    
    const [ paymentMethod, setPaymentMethod] = useState<string>('');


    const navigate = useNavigate();

    

    const [totalPay, setTotalPay] = useState<Number>(() => {
        const total = menuSelected?.reduce((acc, item) => parseFloat((acc + (item.quantity * 9.90)).toFixed(2)) , 0) || 0
        return total
    });

    const TotalPayPlusTaxes = totalPay.valueOf() + 3.5

    function handleForm(data: checkoutData){
        handlePaymentCheckout({...data, method: paymentMethod})

        navigate("/success")

    }
    
    

    return (
        <CheckoutContainer>
            <form onSubmit={handleSubmit(handleForm)}>
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

                    <InputArea type="number" required placeholder="CEP"  maxLength={8} minLength={8}
                        {...register('cep')}
                    />
                    {errors.cep && 'Informe um CEP com o total de 8 caracteres'}
                    <InputArea type="text" required placeholder="Rua" min={5}
                        {...register('rua')}
                    />
                    {errors.rua && 'Informe o endereço de entrega'}
                    <InputAreaDiv>
                        <InputArea type="number" required placeholder="Número" min={1}
                            {...register('numero')}
                        />
                        {errors.numero && 'Informe o número de sua localização'}
                        <LabelInputComplemento htmlFor="">Opcional</LabelInputComplemento>
                        <InputArea type="text"  placeholder="Complemento"
                            {...register('complemento')}
                        />   
                    </InputAreaDiv>
                    <InputAreaDiv>
                        <InputArea type="text" required placeholder="Bairro" min={3}
                            {...register('bairro')}
                        />
                        {errors.bairro && 'Informe o bairro de entrega'}
                        <InputArea type="text" required placeholder="Cidade" min={3}
                            {...register('cidade')}
                        />
                        {errors.cidade && 'Informe a cidade de sua localização'}
                        <InputArea type="text" required placeholder="UF" min={2}
                            {...register('uf')}
                        />
                        {errors.uf && 'Informe a UF de sua localização'}
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
                            <PaymentOptionButton type='button' onClick={() => setPaymentMethod('CARTÃO DE CRÉDITO')}>
                                <CreditCard   />
                                CARTÃO DE CRÉDITO
                            </PaymentOptionButton>
                            <PaymentOptionButton type='button' onClick={() => setPaymentMethod('CARTÃO DE DÉBITO')}>
                                <Bank   />
                                    CARTÃO DE DÉBITO
                            </PaymentOptionButton>
                            <PaymentOptionButton type='button' onClick={() => setPaymentMethod('DINHEIRO')}>
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
                        <p>{`R$ ${TotalPayPlusTaxes}0`}</p>
                    </TotalPlusDeliveryDiv>
                    <SubmitButton type="submit" disabled={paymentMethod === ''}>
                        confirmar pedido
                    </SubmitButton>
                    </PaymentFormSection>
                </InputFormSection>
            </form>
        </CheckoutContainer>
    )
}