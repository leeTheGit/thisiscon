import React        from 'react'
import styled       from "styled-components"
import { Link }     from "gatsby"


const Header = (props) => {

    const title = props.title || "Constance Hunter";

    return (
        <HeaderContainer>
            <Link to={'/'}>
                <Heading>{title}</Heading>
            </Link>

        </HeaderContainer>
    )
}

const HeaderContainer = styled.div` 
    /* background: #494949; */
    padding:20px;
    margin-bottom:41px;
`



const Heading = styled.h1` 
    font-family: 'Montserrat', sans-serif;
    font-size:30px;
    font-weight:300;
    color:black;
    text-align:center;
`

export default Header;