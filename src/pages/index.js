import * as React from "react"
import Layout from "../components/Layout/Layout"
import Helmet from "../components/seo/helmet"
import Galleries from "../components/galleries"
import "./index.css"


const IndexPage = () => {
    return (
        <>
            <Helmet />
            <Layout>
                <Galleries />
            </Layout>
        </>
    )
}



export default IndexPage




