import { useState } from "react";

function Education({ name, city, state, study, date, extraInfo, editing }) {
  const [editMode, setEditMode] = useState(editing);

  if (editMode) {
    return <h1>SCHOOL EDIT MODE</h1>;
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
      </div>
    );
  }
}

export default Education;
