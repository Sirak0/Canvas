import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Preloader from './Components/Preloader/Preloader';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';
import Section3 from './Components/Section3/Section3';
import Section4 from './Components/Section4/Section4';
import Section5 from './Components/Section5/Section5';
import View from './Components/View/View';

function App() {
  return (
    <div className="App">
     <Preloader/>
     <Header /> 
     <View/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
     <Section5 />
     <Footer/>

     
      
    </div>
    
  );
  
}


export default App;
