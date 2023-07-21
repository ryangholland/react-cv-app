import { useState } from "react";

function WorkExperience({
  id,
  name,
  city,
  state,
  title,
  startDate,
  endDate,
  extraInfo,
  editing,
  updateInfo,
  deleteWorkplace,
}) {
  const [editMode, setEditMode] = useState(editing);

  const [newName, setNewName] = useState(name);
  const [newCity, setNewCity] = useState(city);
  const [newState, setNewState] = useState(state);
  const [newTitle, setNewTitle] = useState(title);
  const [newStartDate, setNewStartDate] = useState(startDate);
  const [newEndDate, setNewEndDate] = useState(endDate);
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
        title: newTitle,
        startDate: newStartDate,
        endDate: newEndDate,
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
            <label htmlFor="title">Job Title:</label>
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              type="text"
              id="title"
            ></input>
          </div>
          <div>
            <label htmlFor="startDate">Start Date:</label>
            <input
              value={newStartDate}
              onChange={(e) => setNewStartDate(e.target.value)}
              type="text"
              id="startDate"
            ></input>
          </div>
          <div>
            <label htmlFor="endDate">End Date:</label>
            <input
              value={newEndDate}
              onChange={(e) => setNewEndDate(e.target.value)}
              type="text"
              id="endDate"
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
        <div className="btns">
          <button onClick={submitChanges}>Submit</button>
          <button onClick={() => deleteWorkplace(id)}>Delete</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="work-info">
        <div className="col">
          <h3>{name}</h3>
          <p>
            {city}, {state}
          </p>
        </div>
        <div className="col">
          <h4>{title}</h4>
          <p>
            {startDate} - {endDate}
          </p>
        </div>
        <ul>
          {extraInfo.map((item) => {
            return item.text ? <li key={item.id}>{item.text}</li> : null;
          })}
        </ul>
        <div className="btns">
          <button onClick={() => setEditMode(true)}>Edit</button>
          <button onClick={() => deleteWorkplace(id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default WorkExperience;