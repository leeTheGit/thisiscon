import React        from 'react'
import styled       from "styled-components"
import { Link }     from "gatsby"


const Header = () => {
    return (
        <HeaderContainer>
            <Link to={'/'}>
                <Heading>this.is.Con</Heading>
            </Link>

        </HeaderContainer>
    )
}

const HeaderContainer = styled.div` 
    background: #494949;
    padding:20px;
    margin-bottom:41px;
`



const Heading = styled.h1` 
    font-family: 'Montserrat', sans-serif;
    font-size:30px;
    font-weight:300;
    color:white;
    text-align:center;
`

export default Header;