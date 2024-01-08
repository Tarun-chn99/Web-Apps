import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {

    const {note,openForm} = props;
    const context = useContext(noteContext);
    const {deleteNote} = context;

    return (  
    <div className='col-md-3'>
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
                <i className="fa-solid fa-trash mx-2"         style={{color: "#000000"}} onClick={() => {
                    deleteNote(note._id);
                    props.showAlert("Note deleted!");
                }}></i>
                <i className="fa-solid fa-pen-to-square mx-2" style={{color: "#000000"}} onClick={() => openForm(note)}></i>
            </div>
        </div>
    </div>
  )
}

export default NoteItem