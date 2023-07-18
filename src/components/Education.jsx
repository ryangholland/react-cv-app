function Education({ name, city, state, study, date, extraInfo }) {
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
    </div>
  );
}

export default Education;
