import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'

export const metadata = {
  title: "CCLC | Advocacy",
  description: "CCLC advocacy page",
};

const layout = ({children}) => {
  return (
    <div className='font-mont max-w-380 w-full min-h-screen'>
        <Header/>
     {children}
     <Footer/>
    </div>
  )
}

export default layout