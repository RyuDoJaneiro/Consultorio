import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LandingPage = () => 
{
  return(
        <>
        <Navbar/>
        <div>
                <img id="landing-image" src="https://media.istockphoto.com/id/1126789804/es/foto/m%C3%A9dico-con-tableta-digital-en-su-oficina.jpg?s=612x612&w=0&k=20&c=V_mhVVt4vdVJ4a7hNqq9XlBCaK0TuokCSXlSzF3RPUg=" alt="Image not found"/>
        </div>
        <Footer/>
        </>
  )
}

export default LandingPage