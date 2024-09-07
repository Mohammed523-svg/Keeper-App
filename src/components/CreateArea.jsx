import { StrictMode, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [state, setState] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function showInput() {
   if(!state){
    setState(true);
   }
  }

  return (
    <div>
      <form className="create-note">
        {state && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={showInput}
          value={note.content}
          placeholder="Take a note..."
          rows={state ? 3 : 1}
        />
          <Zoom in={state}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
          </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
