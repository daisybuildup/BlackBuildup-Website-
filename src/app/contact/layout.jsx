import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'

export const metadata = {
  title: "Contact | CCLC",
  description: "CCLC contact page",
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