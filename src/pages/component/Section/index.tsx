import Layout from "@/components/Layout"
import PromoSection from "./PromoSection"
import HeaderSection from "./HeaderSection"
import CATSection from "./CATSection"
import ContentSection from "./ContentSection"
import TeamSection from "./TeamSection"
import BlogSection from "./BlogSection"
import FeatureSection from "./FeatureSection"
import NewsletterSection from "./NewsletterSection"
import HeroSection from "./HeroSection"
import Contract from "./Contract"
import Feature2 from "./Feature2"
import Price from "./Price"

import { useState } from "react";

const TABS = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"
];



const sections = [
    {
        name:"CATSection",
        component: <CATSection/>
    },
    {
        name:"HeroSection",
        component: <HeroSection/>
    },
    {
        name:"BlogSection",
        component: <BlogSection/>
    },
    {
        name:"PromoSection",
        component: <PromoSection/>
    },
    {
        name:"TeamSection",
        component: <TeamSection/>
    },
    {
        name:"Contract",
        component: <Contract/>
    },
    {
        name:"Price",
        component: <Price/>
    },
    {
        name:"HeaderSection",
        component: <HeaderSection/>
    },
    {
        name:"ContentSection",
        component: <ContentSection/>
    },
    {
        name:"FeatureSection",
        component: <FeatureSection/>
    },
    {
        name:"Feature2",
        component: <Feature2/>
    },
    {
        name:"NewsletterSection",
        component: <NewsletterSection/>
    },
]

export default () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <Layout>
           <div className="grid grid-cols-5 gap-4">
           {
                sections.map((item,key)=>{
                    return(<button key={key} onClick={()=>setActiveTab(key)} className={`border px-3 py-1 cursor-pointer rounded-lg hover:bg-gray-200 bg-white ${key==activeTab?'border-blue-500':''}`}>{item.name}</button>)
                })
            }
           </div>
            
            <div className="space-y-5 mt-5 ">
                {sections[activeTab].component}
                {/* <CATSection />
                <HeroSection />
                <TeamSection />
                <BlogSection />
                <PromoSection />
                <Contract />
                <Price />
                <HeaderSection />
                <ContentSection />
                <FeatureSection />
                <Feature2 />
                <NewsletterSection /> */}


            </div>
        </Layout>
    )
}