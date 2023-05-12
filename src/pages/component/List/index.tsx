import Layout from "@/components/Layout"
import ProductList from "./ProductList"
import PreviewList from "./PreviewList"
import Overview from "./Overview"
import ProductList2 from "./ProductList2"

export default () => {
    return (
        <Layout>
            <div className="space-y-5">
                <h2>List1</h2>
                <ProductList />
                <h2>List1</h2>
                <ProductList2 />
                <h2>List2</h2>
                <PreviewList />
                <h2>List3</h2>
                <Overview />
            </div>
        </Layout>
    )
}