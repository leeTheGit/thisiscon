import React from 'react'
import { graphql }  from "gatsby"
import { Link }     from "gatsby"
import styled       from "styled-components"
import Img          from 'gatsby-image'

import Helmet       from "../components/seo/helmet"
import Layout       from "../components/Layout/Layout"
import Row          from "../components/grid/flexrow"
import Col          from "../components/grid/col"

function projectTemplate({data}) {
    const {contentfulProject:project} = data;

    return (
        <>
        <Helmet />

        <Layout>
            <Row>
                <Col classes={["col12"]}>
                    <BreadCrumb to={`/${project.gallery}`}>{project.gallery}</BreadCrumb>
                    <SectionTitle>{project.title}</SectionTitle>
                    <Description>{project.description.description}</Description>
                    <Image fluid={project.image.fluid} alt={project.image.title}></Image>

                </Col>
            </Row>
        </Layout>
        </>
    )
}

const Image = styled(Img)` 
    height:600px;
    width:100%;
`

const BreadCrumb = styled(Link)`
    display:block;
    font-size:15px;
    margin-bottom:30px;
`

const SectionTitle = styled.h1` 
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;

`
const Description = styled.p` 
    font-family: 'Montserrat', sans-serif;
    margin-top:10px;
    margin-bottom:50px;

`



export const query = graphql`
    query MyQuery($slug:String) {
        contentfulProject(slug: {eq: $slug}) {
        title
        slug
        gallery
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
`


export default projectTemplate;
