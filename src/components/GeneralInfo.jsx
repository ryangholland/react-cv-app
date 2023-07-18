function GeneralInfo({ name, address, city, state, zip, phone, email }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {address} - {city}, {state} {zip} - {phone} - {email}
      </p>
    </div>
  );
}

export default GeneralInfo;
