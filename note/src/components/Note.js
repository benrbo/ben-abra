import React, { useState } from "react";


function Note(props) {
  const [displayForm, setForm] = useState(false);
  function handleClick() {
    props.onDelete(props.id);
  }
  function handleEdit(e) {
    e.preventDefault();
    const title = e.target.children[0].value;
    const content = e.target.children[1].value;
    props.onEdit(props.id, title, content);
    setForm(false)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <form
        onSubmit={handleEdit}
        className={`${displayForm ? "show" : "hide"}`}
      >
        <input type="text" placeholder="title" />
        <input type="text" placeholder="content" />
        <input type="submit" value="Submit" />
      </form>
      <button onClick={handleClick}> X </button>
      <button onClick={() => setForm(!displayForm)}> Edit </button>
    </div>
  );
}

export default Note;


