import { useState } from "react";

function GeneralInfo({
  name,
  address,
  city,
  state,
  zip,
  phone,
  email,
  updateInfo,
}) {
  const [editMode, setEditMode] = useState(false);

  const [newName, setNewName] = useState(name);
  const [newAddress, setNewAddress] = useState(address);
  const [newCity, setNewCity] = useState(city);
  const [newState, setNewState] = useState(state);
  const [newZip, setNewZip] = useState(zip);
  const [newPhone, setNewPhone] = useState(phone);
  const [newEmail, setNewEmail] = useState(email);

  const submitChanges = (e) => {
    e.preventDefault();

    updateInfo({
      name: newName,
      address: newAddress,
      city: newCity,
      state: newState,
      zip: newZip,
      phone: newPhone,
      email: newEmail,
    });

    setEditMode(false);
  };

  if (editMode) {
    return (
      <div>
        <form onSubmit={submitChanges}>
          <label htmlFor="name">Name:</label>
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            type="text"
            id="name"
          ></input>
          <label htmlFor="address">Address:</label>
          <input
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            type="text"
            id="address"
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
          <label htmlFor="zip">ZIP:</label>
          <input
            value={newZip}
            onChange={(e) => setNewZip(e.target.value)}
            type="text"
            id="zip"
          ></input>
          <label htmlFor="phone">Phone:</label>
          <input
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
            type="text"
            id="phone"
          ></input>
          <label htmlFor="email">Email:</label>
          <input
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            type="text"
            id="email"
          ></input>
          <button onClick={submitChanges}>Submit</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{name}</h1>
        <p>
          {address} - {city}, {state} {zip} - {phone} - {email}
        </p>
        <button onClick={() => setEditMode(true)}>Edit</button>
      </div>
    );
  }
}

export default GeneralInfo;
