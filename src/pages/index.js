import * as React from "react"
import {Link} from "gatsby"
import Layout from "../components/Layout/Layout"
import Helmet from "../components/seo/helmet"
import Galleries from "../components/galleries"
import "./index.css"


const IndexPage = () => {
    return (
        <>
            <Helmet />
            <Layout>
                <Link to="/about">About</Link>
                <Galleries />
            </Layout>
        </>
    )
}



export default IndexPage




