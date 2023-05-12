import Layout from "@/components/Layout"
import user from "@/images/user-36-01.jpg"

export default () => {
    return (
        <Layout>
            <div><div className="flex -space-x-1 overflow-hidden">
                <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src={user}
                    alt=""
                />
                <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src={user} alt=""
                />
                <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src={user} alt=""
                />
                <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src={user} alt=""
                />
            </div>

                <div className="flex -space-x-2 overflow-hidden">
                    <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src={user} alt=""
                    />
                    <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src={user} alt=""
                    />
                    <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src={user} alt=""
                    />
                    <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src={user} alt=""
                    />
                </div>

                <div className="flex -space-x-2 overflow-hidden">
                    <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        src={user} alt=""
                    />
                    <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        src={user} alt=""
                    />
                    <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        src={user} alt=""
                    />
                    <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        src={user} alt=""
                    />
                </div></div>
        </Layout>
    )
}
