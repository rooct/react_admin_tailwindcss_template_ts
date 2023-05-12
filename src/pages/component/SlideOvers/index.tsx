import Layout from "@/components/Layout"
import Overs from "./Overs"
import ShopCarts from "./ShopCarts"

export default ()=>{
    return(
        <Layout>
            <div className="space-y-10">
                <Overs/>
                <ShopCarts/>
            </div>
        </Layout>
    )
}