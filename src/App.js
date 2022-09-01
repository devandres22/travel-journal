import React from 'react';

import Navbar from '../src/components/Navbar'

import Card from './components/Card'

import Data from '../src/Data'

import '../src/index.css';

export default function App() {

  return (
    <>    
      <Navbar />
      <main className="main">        
        {Data.map((item, index) => {          
          return (
            <>
              <Card item={item}/>              
              {index !== Data.length - 1 && <hr/> }
            </>
          )
        })}     
      </main>
    </>
  );
}

