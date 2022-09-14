import { Bank, CreditCard, CurrencyDollar, MapPin, Minus, Money, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import { CheckoutContainer } from "./style";

export function PaymentPage(){

    const { menuSelected } = useContext(MenuContext);
    console.log('menuSelected', menuSelected)

    return (
        <CheckoutContainer>
            <form>
                <h3>Complete seu pedido</h3>
                <section>
                    <div>
                        <MapPin/>
                        <h5>Endereço de Entrega</h5>
                    </div>
                    <p>
                        Informe o endereço onde deseja receber seu pedido
                    </p>

                    <input type="number" placeholder="CEP"/>
                    <input type="text" placeholder="Rua"/>
                    <div>
                        <input type="number" placeholder="Número"/>
                        <input type="text" placeholder="Complemento"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Bairro"/>
                        <input type="text" placeholder="Cidade"/>
                        <input type="text" placeholder="UF"/>
                    </div>
                    <div>
                        <div>
                            <CurrencyDollar  weight="fill" />
                            <h5>Pagamento</h5>
                        </div>
                        <p>
                            O pagamento é feito na entrega. Escolha a forma que deseja pagar
                        </p>
                        <div>
                            <CreditCard size={32}  />
                            <input type="checkbox" id="credito"/>
                            <label htmlFor="credito">
                                CARTÃO DE CRÉDITO
                            </label>
                        </div>
                        <div>
                            <Bank size={32}  />
                            <input type="checkbox" id="debito"/>
                            <label htmlFor="debito">
                                CARTÃO DE DÉBITO
                            </label>
                        </div>
                        <div>
                            <Money size={32}  />
                            <input type="checkbox" id="dinheiro"/>
                            <label htmlFor="dinheiro">
                                DINHEIRO
                            </label>
                        </div>

                    </div>




                </section>
                <section>
                    <h3>Cafés selecionados</h3>
                    {menuSelected?.map(coffee => {
                        return (
                            <div>
                                <img src={coffee.image} alt={coffee.title}/>
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
                        <p>R$ total</p>
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
                </section>
            </form>
        </CheckoutContainer>
    )
}