import { useState } from "react";

function Education({
  id,
  name,
  city,
  state,
  study,
  date,
  extraInfo,
  editing,
  updateInfo,
  deleteSchool
}) {
  const [editMode, setEditMode] = useState(editing);

  const [newName, setNewName] = useState(name);
  const [newCity, setNewCity] = useState(city);
  const [newState, setNewState] = useState(state);
  const [newStudy, setNewStudy] = useState(study);
  const [newDate, setNewDate] = useState(date);

  const submitChanges = (e) => {
    e.preventDefault();

    console.log(id);

    updateInfo(
      {
        id: id,
        name: newName,
        city: newCity,
        state: newState,
        study: newStudy,
        date: newDate,
        extraInfo: extraInfo,
      },
      id
    );

    setEditMode(false);
  };

  if (editMode) {
    return (
      <div>
        <h1>SCHOOL EDIT MODE</h1>
        <form onSubmit={submitChanges}>
          <label htmlFor="name">Name:</label>
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            type="text"
            id="name"
          ></input>
          <label htmlFor="city">City:</label>
          <input
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
            type="text"
            id="city"
          ></input>
          <label htmlFor="state">State:</label>
          <input
            value={newState}
            onChange={(e) => setNewState(e.target.value)}
            type="text"
            id="state"
          ></input>
          <label htmlFor="study">Area of Study:</label>
          <input
            value={newStudy}
            onChange={(e) => setNewStudy(e.target.value)}
            type="text"
            id="study"
          ></input>
          <label htmlFor="date">Graduation Date:</label>
          <input
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            type="text"
            id="date"
          ></input>
          <button onClick={submitChanges}>Submit</button>
        </form>

        <button onClick={submitChanges}>Submit</button>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h3>{name}</h3>
          <p>
            {city}, {state}
          </p>
        </div>
        <div>
          <h4>{study}</h4>
          <p>{date}</p>
        </div>
        <ul>
          {extraInfo.map((item) => {
            return <li key={item.id}>{item.text}</li>;
          })}
        </ul>
        <button onClick={() => setEditMode(true)}>Edit</button>
        <button onClick={() => deleteSchool(id)}>Delete</button>
      </div>
    );
  }
}

export default Education;
