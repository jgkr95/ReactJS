import React,{useState,useEffect} from 'react';
import Note from './Note';
import AddNote from './AddNote';
import axios from 'axios';
function Notes(){
    let [notesArr,setNotesArr]= useState([])
  useEffect(() => {
    setTimeout(() => {
      let id = JSON.stringify(localStorage.getItem('user'))
      console.log(id)
      axios.get(`http://localhost:8080/api/getNotes/${id.substring(1, id.length-1)}`).then((res) => {
        console.log(res.data)
        setNotesArr(res.data)

      });
    }, 1000);
  }, []);
  const addNote = (note)=>{

    setNotesArr((prev)=>{
      return [...prev,note]
    })
    
    
  }
  const onDelete = (objId, id)=>{
    
    setNotesArr((oldData)=>
      oldData.filter((curData,indx)=>{
        return indx !== id; 
      }
      )
    

    );
    axios.delete(`http://localhost:8080/api/delete/${objId}`).then(res => console.log(res))

}

    return(
        <>
        <Note passNote = {addNote}/>
     
      {
        notesArr.map((val,index)=>{
          return ( <AddNote 
            key= {index}
            id={index}
            title={val.title}
            content={val.content}
            objId = {val._id}
            deleteItem ={onDelete}
         />)
          
        })
      }
    </>
    )
}

export default Notes