import React from 'react'
import styled from "styled-components"
import {Link} from "gatsby"
import { useStaticQuery, graphql }  from "gatsby"
import Row          from "../components/grid/flexrow"
import Col          from "../components/grid/col"
import Img          from 'gatsby-image'
import size         from '../components/Layout/responsive'


const getSections = graphql` 
    {
        allContentfulSection {
          nodes {
            slug
            title
            description {
              description
            }
            image {
                fluid {
                    src
                }
            }
          }
        }
      }
    `


const Galleries = () => {

    const {allContentfulSection:{nodes:sections}} = useStaticQuery(getSections);

    return (
        <Gallery>

            <Row>
                <Col classes={["col12"]}>
                    <SectionTitle>index</SectionTitle>
                </Col>
            </Row>

            <Row>
                {sections.map( (section) => {
                    return (
                        <Col classes={["col4"]}>

                            <SectionContainer>
                                <Section>
                                    <Link to={`/${section.slug}`}>

                                    {section.image &&
                                        <Image fluid={section.image.fluid} alt={section.image.title}></Image>
                                    }

                                        <SectionName>{section.title}</SectionName>
                                    </Link>
                                </Section>
                            </SectionContainer>

                        </Col>

                    )
                })}
            </Row>

        </Gallery>
    )
}

const SectionContainer = styled.div` 
    position:relative;
    margin-bottom:20px;
`

const Section = styled.div` 
    /* position:absolute; */
`
const SectionTitle = styled.h1` 
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-weight:300;
    margin-bottom:20px;

`


const SectionName = styled.h2` 
    font-size:30px;
    margin-top:10px;
    font-weight:300;
    top:10px;
    color:black;
`


const Image = styled(Img)` 
    height:100px;
    width:100%;

    ${_ => size.desktoplg(`
        height:280px;
    `)}
    ${_ => size.desktop(`
        height:220px;
    `)}
    ${_ => size.tablet(`
        height:160px;
    `)}


    /* &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        opacity: 0.3;
        background-color: #000;
        z-index: 1;
    } */

`



const Gallery = styled.div` 
    font-size:30px;
`



export default Galleries


// @mixin tintbefore($value:0.4) {
// 	&:before {
// 	  content: '';
// 	  position: absolute;
// 	  top: 0;
// 	  bottom: 0;
// 	  width: 100%;
// 	  opacity: $value;
// 	  background-color: #000;
// 	  z-index: 1;
// 	}
// }
// @mixin tintafter($value:0.4) {
// 	&:after {
// 	  content: '';
// 	  position: absolute;
// 	  top: 0;
// 	  bottom: 0;
// 	  width: 100%;
// 	  opacity: $value;
// 	  background-color: #000;
// 	  z-index: 1;
// 	}
// }

// @mixin gradientbefore() {
// 	&:before {
// 		content: '';
// 		position: absolute;
// 		top: 0;
// 		height:100%;
// 		bottom: 0;
// 		width: 100%;
// 		z-index: 1;
//         background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4));
//         background-image: -o-linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4));
//         background-image: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4));
//     }
// }

// @mixin gradientafter() {
// 	&:after {
// 		content: '';
// 		position: absolute;
// 		top: 0;
// 		bottom: 0;
// 		width: 100%;
// 		z-index: 1;
//         background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4));
//         background-image: -o-linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4));
//         background-image: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4));
//     }
// }
