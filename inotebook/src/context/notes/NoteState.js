import noteContext from './noteContext'
import {useState} from 'react'

const NoteState = (props) => {
  
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  const getAllNotes = async () => {

    const response = await fetch(`${host}/api/notes/getAllNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('session_token')
      }
      });
    const json = await response.json(); 
    console.log(json);
    setNotes(json);
  }

  const addNote = async (title,description,tag) => {

    const response = await fetch(`${host}/api/notes/addNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('session_token')
      },
      body: JSON.stringify({title,description,tag}), 
      });
    const json =  await response.json(); 
    console.log(json);

    //Logic to add in client side
    const note = {
        "_id": json._id,
        "user": json.user,
        "title": title,
        "description": description,
        "tag": "Acer",
        "date": "2023-08-17T06:06:43.004Z",
        "__v": 0
    }
    setNotes(notes.concat(note));
  }

  const deleteNote = async (id) => {

    //API Call
    const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('session_token')
      }
      });

      const json = await response.json();
      console.log(json);

    //Logic to delete in client side
    const newNotes = notes.filter((note) => {return note._id!==id});
    setNotes(newNotes);

  }

  const editNote = async (id,title,description,tag) => {
    //Api call
    const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('session_token')
      },
      body: JSON.stringify({title,description,tag}), 
      });
    const json =  await response.json(); 
    console.log(json);
    
    let newNotes = JSON.parse(JSON.stringify(notes));
    //Logic to edit in client side
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if(element._id === id){
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  return(
        <noteContext.Provider value={{notes,addNote,deleteNote,editNote,getAllNotes}}>
            {props.children}
        </noteContext.Provider>
    );
}


export default NoteState;