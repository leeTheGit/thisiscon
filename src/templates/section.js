import React from 'react'
import { graphql }  from "gatsby"
import { Link }     from "gatsby"
import styled       from "styled-components"
import Img          from 'gatsby-image'


import Helmet       from "../components/seo/helmet"
import Layout       from "../components/Layout/Layout"
import Row          from "../components/grid/flexrow"
import Col          from "../components/grid/col"
import size         from '../components/Layout/responsive'



function Sections({data}) {
    const {allContentfulProject:{nodes:projects}} = data;
    const {contentfulSection:section} = data;

    return (
        <>
            <Helmet />

            <Layout>
                <Row>
                    <Col classes={["col12"]}>
                        <SectionTitle><Path to={'/'}>index/</Path>{section.slug}</SectionTitle>
                    </Col>
                </Row>


                <Row style={{marginTop:"20px"}}>

                {projects.map( (project) => {
                    return (
                        <Col classes={["col12", "colMd4"]}>

                            <SectionContainer>
                                <Section>
                                    <Link to={`/${project.gallery}/${project.slug}`}>

                                        {project.image &&
                                            <Image fluid={project.image[0].fluid} alt={project.image[0].title}></Image>
                                        }

                                        <SectionName>{project.title}</SectionName>
                                    </Link>
                                </Section>
                            </SectionContainer>

                        </Col>

                    )
                })}

                </Row>

            </Layout>
        </>

    )
}


const SectionTitle = styled.h1` 
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-weight:300;
    margin-bottom:15px;
`

const Path = styled(Link)` 
    color: rgba(0,0,0,.3);
    &:hover {
        color:black;
    }
`



const SectionContainer = styled.div` 
    position:relative;
    margin-bottom:40px;
`

const Section = styled.div` 
    /* position:absolute; */
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
    border-radius: 5%;

    ${_ => size.desktoplg(`
        height:280px;
    `)}

    ${_ => size.desktopmd(`
        height:280px;
    `)}

    ${_ => size.desktop(`
        height:220px;
    `)}
    ${_ => size.tablet(`
        height:160px;
    `)}

    ${_ => size.mobileLG(`
        height:410px;
    `)}
    ${_ => size.mobile(`
        height:410px;
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



export const query = graphql`
    query GetSectionProjects($slug: String) {
        allContentfulProject(filter: {gallery: {eq: $slug}}) {
            nodes {
                title
                gallery
                description {
                    description
                }
                image {
                    fluid {
                        src
                    }
                }
                slug
            }
        }
        contentfulSection(slug: {eq: $slug}) {
            slug
            title
            description {
              description
            }
        }        
    }
`



export default Sections;
