import Layout from "@/components/Layout"
import StoreNavigation from "./StoreNavigation"
import Navbar from "../Navbar"
import Header from "./Header"

export default ()=>{
    return(
        <Layout>
            <div className="space-y-5">
            <Header/>
            <Navbar/>
            <br/>
            <hr/>
            <StoreNavigation/>
            </div>
        </Layout>
    )
}