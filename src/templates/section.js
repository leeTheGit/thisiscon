import React from 'react'
import { graphql }  from "gatsby"
import { Link }     from "gatsby"
import styled       from "styled-components"
import Img          from 'gatsby-image'

import Helmet       from "../components/seo/helmet"
import Layout       from "../components/Layout/Layout"
import Row          from "../components/grid/flexrow"
import Col          from "../components/grid/col"



function Sections({data}) {
    console.log(data);
    const {allContentfulProject:{nodes:projects}} = data;
    const {contentfulSection:section} = data;
    console.log(projects);
    return (
        <>
            <Helmet />

            <Layout>
                <Row>
                    <Col classes={["col12"]}>
                        <SectionTitle>{section.title}</SectionTitle>
                        <Description>{section.description.description}</Description>
                    </Col>
                </Row>



                <Row style={{marginTop:"40px"}}>
                    {projects.map((project) => {
                        return (
                            <Col classes={["col4"]} key={project.id} marginBottom>
                                <h2>{project.title}</h2>
                                <Link to={`/${project.gallery}/${project.slug}`}>
                                    <Image fluid={project.image.fluid} alt={project.image.title}></Image>
                                </Link>
                            </Col>
                        )
                    })}
                </Row>
            </Layout>
        </>

    )
}



const Image = styled(Img)` 
    height:200px;
    width:200px;
`
const SectionTitle = styled.h1` 
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;

`
const Description = styled.p` 
    font-family: 'Montserrat', sans-serif;
    margin-top:10px;

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
