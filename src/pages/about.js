import React from "react"
import { Link } from "gatsby"
import Helmet       from "../components/seo/helmet"
import Layout       from "../components/Layout/Layout"
import Row          from "../components/grid/flexrow"
import Col          from "../components/grid/col"



const About = () => {
    
    return (
        <>
            <Helmet />

            <Layout>
                <Row>
                    <Col classes={["col12"]}>
                        <h1>The about page</h1>
                        <Link to="/">Back to index</Link>
                    </Col>
                </Row>
            </Layout>
        </>
    )
}

export default About;