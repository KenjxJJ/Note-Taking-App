import React, { useState, useContext } from "react";
import {useHistory} from "react-router-dom"
import { NoteContext } from "../store/NoteContext";

const AddNoteForm = () => {
  
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const {addNote, notes } = useContext(NoteContext);
  let history = useHistory();
  

  const submitNote = (e) => {
    e.preventDefault();
    const newNote = {
      id: notes.length + 1,
      title,
      subject,
    };
    addNote(newNote);
    history.push("/");
  };

  return (
    
    <div>
      <div className="form-container container">
      <h1 className="centered">Create a new Note🐊🐊🐊 </h1>
        <form onSubmit={submitNote}>
          <label for="fname">Title</label>
          <input
            type="text"
            id="fname"
            className="form-control rounded-0"
            name="firstname"
            placeholder="Title.."
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label for="subject">Subject</label>
          <textarea
            id="subject"
            className="form-control rounded-0"
            name="subject"
            placeholder="Start Writing ...."
            style={{ height: "200px" }}
            onChange={(e) => setSubject(e.target.value)}
          ></textarea>
          <label>
            
            <input type="file" name="Add Note Image" id="imgurl" />
            Add Note image💣
          </label>
          <br />
          <button><input
            type="submit"
            value="Submit"
            className="btn btn-success rounded-0"
          /></button>
        </form>
      </div>
    </div>
  );
  
};

export default AddNoteForm;