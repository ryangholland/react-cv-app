function WorkExperience({ name, city, state, title, startDate, endDate, extraInfo }) {
    return (
      <div>
        <div>
          <h3>{name}</h3>
          <p>
            {city}, {state}
          </p>
        </div>
        <div>
          <h4>{title}</h4>
          <p>{startDate} - {endDate}</p>
        </div>
        <ul>
          {extraInfo.map((item) => {
            return <li key={item.id}>{item.text}</li>;
          })}
        </ul>
      </div>
    );
  }
  
  export default WorkExperience;