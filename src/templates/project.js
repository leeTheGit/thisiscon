import React        from 'react'
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
    // console.log(project);
    return (
        <>
        <Helmet />

        <Layout>
            <Row>
                <Col classes={["col12"]}>
                    <SectionTitle><Path to={'/'}>index/</Path><Path to={`/${project.gallery}`}>{project.gallery}/</Path>{project.title}</SectionTitle>
                    {/* {project.description &&
                        <Description>{project.description}</Description>
                    } */}

                    {project.image && project.image.map((img) => {
                        return <Image key={img.id} fluid={img.fluid} alt={img.title}></Image>
                    })}
                    

                </Col>
            </Row>
        </Layout>
        </>
    )
}

const Image = styled(Img)` 
    height:600px;
    width:100%;
    margin-bottom:30px;
`


const SectionTitle = styled.h1` 
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-weight:300;
    margin-bottom:20px;

`
// const Description = styled.p` 
//     font-family: 'Montserrat', sans-serif;
//     margin-top:10px;
//     margin-bottom:50px;

// `
const Path = styled(Link)` 
    color: rgba(0,0,0,.3);
    &:hover {
        color:black;
    }

`


export const query = graphql`
    query MyQuery($slug:String) {
        contentfulProject(slug: {eq: $slug}) {
            id
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
