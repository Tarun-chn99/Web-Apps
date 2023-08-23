import React, {useContext,useEffect,useState,useRef} from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import Addnote from './Addnote';

const Notes = () => {
  
    useEffect(() => {
        getAllNotes();
        // eslint-disable-next-line
    },[]);

    const context = useContext(noteContext);
    // eslint-disable-next-line
    const {notes,getAllNotes,editNote} = context;
    const [note, setNote] = useState({title: "" , description: "", tag:"" });
    const ref = useRef(null);
   
    const handleClick = (e) => {
        e.preventDefault();
        editNote(note._id,note.title,note.description,note.tag);

    }
    const onChange = (e) => {
        setNote({...note, [e.target.name] : e.target.value})    
    }

    const updateNote = (currentNote) => {
        ref.current.click();    
        setNote(currentNote);
    }
    
    return (
        <>
            <Addnote/>

            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form className='my-4'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange}/>
                    </div>   
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}/>
                    </div>              
                </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                </div>
                </div>
            </div>
            </div>

            <div className="row my-5">
                <h3>Your Notes</h3>
                {notes.map((note) => {
                return <NoteItem note={note} updateNote={updateNote} key={note._id} />
                })}
            </div> 
        </>
    )
}

export default Notes