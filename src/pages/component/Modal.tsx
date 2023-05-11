import Layout from "@/components/Layout"
import ExampleModal from "@/components/modal"
import { useState } from "react"

export default ()=>{
    const [open,setOpen] = useState(false);

    return(
        <Layout>
            <button className="border px-3 py-1" onClick={()=>setOpen(true)}>Modal</button>
            <ExampleModal open={open} setOpen={setOpen}>
                <div>
                    hello
                </div>
                </ExampleModal>
        </Layout>
    )
}