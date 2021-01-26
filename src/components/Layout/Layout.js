import React from 'react'
import Footer from "./Footer"
import Container from "../grid/container"
import Header from "./Header"

export default function Layout({children}) {
    return (
        <>
            <Header title="Constance Hunter" />
            <main>
                <Container>
                    {children}
                </Container>
            </main>
            <Footer />
        </>
    )
}
