import React from 'react';

import './App.css';
import Header from './Header';
import Footer from './Footer';

import Note from './Note';
import AddNote from './AddNote'
import { useState } from 'react';

function App() {

  let [addItem,setaddItem]= useState([])

  const addNote = (note)=>{

    setaddItem((prev)=>{
      return [...prev,note]
    })
    
    
    
  }
  const onDelete = (id)=>{

    setaddItem((oldData)=>
      oldData.filter((curData,indx)=>{
        return indx !== id; 
      }
      
      )
    

    );

  }
  return (
    <>
      <Header />
      <Note passNote = {addNote}/>
     
      {
        addItem.map((val,index)=>{
          return ( <AddNote 
            key= {index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem ={onDelete}
         />)
          
        })
      }

    </>
  );
}

export default App;
