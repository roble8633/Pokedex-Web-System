import React from 'react'
import Header from './Header'
import Ash from './ash.png'
import Dialog from './dialog/Dialog'
import Navbar from './Navbar'
import View from './View'


function Main () {
  return (
    <div>
        <main className='head'>
            <Header />
            <img src={Ash} alt="Ash" className='responsive-image'/>
        </main>
        <Navbar />
        <Dialog />
        <View/>
        
        
    </div>
  );
}

export default Main;
