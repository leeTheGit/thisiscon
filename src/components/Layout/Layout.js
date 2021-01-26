import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Container from "../grid/container"


export default function Layout({children}) {
    return (
        <>
            <Header />
            <main>
                <Container>
                    {children}
                </Container>
            </main>
            <Footer />
        </>
    )
}
