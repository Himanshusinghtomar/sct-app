import AverageRevenue from '@/components/AverageRevenue'
import Frame from '@/components/Frame'
import Header from '@/components/Header'
import Outsourcing from '@/components/Outsourcing'
import Testimonial from '@/components/Testimonial'
import AppLayout from '@/layout/AppLayout'
import App from 'next/app'
import React from 'react'

export default function company() {
  return (
    <>
      <div className='bg-gradient-to-r from-[#171718]  to-[#76777a]'>
        <div className='max-w-[1600px] m-auto'>
          <Header bgColor="" />
          <div className="px-5 text-center  py-20">
              <p className=" font-semibold text-light-orange text-2xl">Our Mission & Succes Story</p>
              <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl font-bold text-white">About Our Company</h1>
              <p className="max-w-sm m-auto mt-7 text-light-orange/70">we can help cut down costs and improve your customer support channels</p>
          </div>
        </div>
      </div>
        <Frame/>
      <AppLayout>
        <Testimonial/>
      </AppLayout>
    </>
  )
}

