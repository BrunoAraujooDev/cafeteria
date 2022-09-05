import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import coffee_delivery from '../../../assets/Imagem.svg';

export function Intro() {
    return (
        <section>
            <div>

                <div>
                    <h1>
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>
                    <p>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </p>
                </div>
                <div>
                    <p>
                        <ShoppingCart />
                        Compra simples e segura
                    </p>
                    <p>
                        <Package />
                        Embalagem mantém o café intacto
                    </p>
                    <p>
                        <Timer size={32} />
                        Entrega rápida e rastreada
                    </p>
                    <p>
                        <Coffee size={32} weight="fill" />
                        O café chega fresquinho até você
                    </p>
                </div>
            </div>
            <div>
                <img src={coffee_delivery} alt="Imagem de um copo térmico de café branco com detalhes pretos e grãos de café ao redor dele, com o fundo amarelo" />
            </div>
        </section>
    )
}