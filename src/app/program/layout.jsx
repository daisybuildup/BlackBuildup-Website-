import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export const metadata = {
  title: "Programs | CCLC",
  description: "CCLC program page",
};

const layout = ({children}) => {
  return (
    <div className=' max-w-380 mx-auto min-h-screen'>
        <Header/>
     {children}
     <Footer/>
    </div>
  )
}

export default layout