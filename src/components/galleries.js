import React from 'react'
import styled from "styled-components"
import {Link} from "gatsby"
import { useStaticQuery, graphql }  from "gatsby"
import Row          from "../components/grid/flexrow"


const getSections = graphql` 
    {
        allContentfulSection {
          nodes {
            slug
            title
            description {
              description
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
                <div>
                    {sections.map( (section) => {
                        return (
                            <Link to={`/${section.slug}`}>
                                <h2>{section.title}</h2>
                            </Link>
                        )
                    })}
                </div>
            </Row>

        </Gallery>
    )
}


const Gallery = styled.div` 
    font-size:30px;
    color:red;
    font-weight:blanchedalmond;
`



export default Galleries
