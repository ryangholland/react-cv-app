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
  deleteSchool,
}) {
  const [editMode, setEditMode] = useState(editing);

  const [newName, setNewName] = useState(name);
  const [newCity, setNewCity] = useState(city);
  const [newState, setNewState] = useState(state);
  const [newStudy, setNewStudy] = useState(study);
  const [newDate, setNewDate] = useState(date);
  const [newInfo0, setNewInfo0] = useState(extraInfo[0].text);
  const [newInfo1, setNewInfo1] = useState(extraInfo[1].text);
  const [newInfo2, setNewInfo2] = useState(extraInfo[2].text);

  const submitChanges = (e) => {
    e.preventDefault();

    const newInfo = [...extraInfo];
    newInfo[0].text = newInfo0;
    newInfo[1].text = newInfo1;
    newInfo[2].text = newInfo2;

    updateInfo(
      {
        id: id,
        name: newName,
        city: newCity,
        state: newState,
        study: newStudy,
        date: newDate,
        extraInfo: newInfo,
      },
      id
    );

    setEditMode(false);
  };

  if (editMode) {
    return (
      <div className="edit-mode">
        <form onSubmit={submitChanges}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              type="text"
              id="name"
            ></input>
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
              type="text"
              id="city"
            ></input>
          </div>
          <div>
            <label htmlFor="state">State:</label>
            <input
              value={newState}
              onChange={(e) => setNewState(e.target.value)}
              type="text"
              id="state"
            ></input>
          </div>
          <div>
            <label htmlFor="study">Area of Study:</label>
            <input
              value={newStudy}
              onChange={(e) => setNewStudy(e.target.value)}
              type="text"
              id="study"
            ></input>
          </div>
          <div>
            <label htmlFor="date">Graduation Date:</label>
            <input
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              type="text"
              id="date"
            ></input>
          </div>
          <div>
            <label htmlFor="extraInfo0">Extra Info:</label>
            <input
              value={newInfo0}
              onChange={(e) => setNewInfo0(e.target.value)}
              type="text"
              id="extraInfo0"
            ></input>
          </div>
          <div>
            <label htmlFor="extraInfo1">Extra Info:</label>
            <input
              value={newInfo1}
              onChange={(e) => setNewInfo1(e.target.value)}
              type="text"
              id="extraInfo1"
            ></input>
          </div>
          <div>
            <label htmlFor="extraInfo2">Extra Info:</label>
            <input
              value={newInfo2}
              onChange={(e) => setNewInfo2(e.target.value)}
              type="text"
              id="extraInfo2"
            ></input>
          </div>
        </form>
        <div>
          <button onClick={submitChanges}>Submit</button>
          <button onClick={() => deleteSchool(id)}>Delete</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="education-info">
        <div className="col">
          <h3>{name}</h3>
          <p>
            {city}, {state}
          </p>
        </div>
        <div className="col">
          <h4>{study}</h4>
          <p>{date}</p>
        </div>
        <ul>
          {extraInfo.map((item) => {
            return item.text ? <li key={item.id}>{item.text}</li> : null;
          })}
        </ul>
        <div className="btns">
          <button onClick={() => setEditMode(true)}>Edit</button>
          <button onClick={() => deleteSchool(id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default Education;
