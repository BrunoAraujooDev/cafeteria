import { Outlet } from "react-router-dom"
import styled from "styled-components"
import { Header } from "../../components/Header"

export function DefaultLayout() {
    return (
        <Container>
            <Header/>
            <Outlet/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
`