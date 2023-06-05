import Head from "next/head";
import Hero from "@/components/Hero";
import Group from "@/components/Group";
import About from "@/components/About";
import AverageRevenue from "@/components/AverageRevenue";
import Testimonial from "@/components/Testimonial";
import Header from "@/components/Header";
import AppLayout from "@/layout/AppLayout";
import Cars from "@/components/Cars";
export default function Home() {
  return (
    <>
      <Head>
        <title>Singh Car Trade-Best Used Car Dealer</title>
        <meta
          name="description"
          content="Singh Car Trade - Best Used Car Dealer in Purnia,Bihar."
        />
      </Head>
      
        <div className="bg-gradient-to-r from-[#171718]  to-[#76777a]">
          <AppLayout>
            <Header bgColor="gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            <Hero />
          </AppLayout>
        </div>
        <AppLayout>
          
        </AppLayout>
        <div className="bg-black py-10">
          <AppLayout>
              <Cars />
          </AppLayout>
        </div>
        <div className="bg-gradient-to-r from-[#171718]  to-[#F2F3FB] py-10">
          <AppLayout>
              <About />
          </AppLayout>
        </div>
      <AppLayout>
        
        
        <Testimonial />
      </AppLayout>
    </>
  );
}
