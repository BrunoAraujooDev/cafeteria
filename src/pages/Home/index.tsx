import { Intro } from "./Intro";
import { MenuCafeteria } from "./Menu/MenuCafeteria";

export function Home(){
    return (
        <main>
            <Intro/>
            <MenuCafeteria/>
        </main>
    )
}