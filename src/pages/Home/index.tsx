import { Intro } from "./Intro";
import { Menu } from "./Menu/menu";

export function Home(){
    return (
        <main>
            <Intro/>
            <Menu/>
        </main>
    )
}