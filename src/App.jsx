import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation'
import ContactHeader from './Components/ContactHeader'
import Button from './Components/Button'
import ContactForm from './Components/ContactForm'
function App() {
 
  return (
    <>
    <div className="container">
        <Navigation></Navigation>
        <ContactHeader></ContactHeader>
        <ContactForm/>
        
    </div>
     
    </>
  )
}

export default App
