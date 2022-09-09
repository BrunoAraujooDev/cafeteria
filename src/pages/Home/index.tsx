import styled from "styled-components";
import { Intro } from "./Intro";
import { MenuCafeteria } from "./Menu/MenuCafeteria";

export function Home(){
    return (
        <HomeContainer>
            <Intro/>
            <MenuCafeteria/>
        </HomeContainer>
    )
}


const HomeContainer = styled.main`
    padding: 5rem 2rem;
`