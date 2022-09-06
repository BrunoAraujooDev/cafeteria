
import { useEffect, useState } from "react"
import { getCoffeeMenu } from "../../../services/coffee.service"

interface Menu {
    title: string
    description: string
    ingredients: string[]
    imagem: string
    id: number
}
 

export  function Menu(){

     useEffect(  () => {

        const data =  getCoffeeMenu();
        console.log('data', data)


    }, [])


    return (
        <section>
            <h3>Nossos cafés</h3>

            <div>
                <span>Imagem</span>
                {/* {data?.length > 0 && data.map((item: Menu) =>  {
                    return (
                        <span key={item.id}>item.description</span>
                    )
                } )} */}
            </div>
        </section>
    )
}

 