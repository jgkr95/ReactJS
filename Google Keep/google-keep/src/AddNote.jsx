import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


function AddNote(props) {
    let deleteNote = () => {
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className="column">
                <div className="card">
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                    
                        <DeleteOutlineIcon  onClick={deleteNote} className="DeleteOutlineIcon"/>
                    
                </div>
            </div>
        </>
    )
}

export default AddNote
