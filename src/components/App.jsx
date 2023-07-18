import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import GeneralInfo from "./GeneralInfo";

function App() {

  const data = {
    generalInfo: {
      name: "John Doe",
      address: "555 Street Ln.",
      city: "New Fake City",
      state: "NY",
      zip: "12345",
      phone: "(555) 555-5555",
      email: "john@doe.com",
    },
    education: [
      {
        id: uuidv4(),
        name: "Fake University",
        city: "Faketown",
        state: "FL",
        field: "Computer Science",
        gradDate: "May 2016",
        extraInfo: [
          {
            id: uuidv4(),
            text: "Bachelor of Science",
          },
          {
            id: uuidv4(),
            text: "4.0 GPA",
          },
          {
            id: uuidv4(),
            text: "Smart Person Club President",
          },
        ],
      },
    ],
    workExperience: [
      {
        id: uuidv4(),
        name: "Fake Workplace",
        city: "Notrealshire",
        state: "FL",
        title: "Grunt",
        startDate: "February 2013",
        endDate: "June 2016",
        extraInfo: [
          {
            id: uuidv4(),
            text: "Slaved away for the boss",
          },
          {
            id: uuidv4(),
            text: "Did work-related things",
          },
          {
            id: uuidv4(),
            text: "Three-time employee of the month",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "Another Fake Workplace",
        city: "New Fake City",
        state: "NY",
        title: "CEO",
        startDate: "July 2016",
        endDate: "Present",
        extraInfo: [
          {
            id: uuidv4(),
            text: "Made difficult fake decisions",
          },
          {
            id: uuidv4(),
            text: "Raised profits by an arbitrary percent",
          },
          {
            id: uuidv4(),
            text: "Led the merger and acquistion of Fake Workplace",
          },
        ],
      },
    ],
  };

  return (
    <>
      <GeneralInfo stuff={data.generalInfo} />
      <hr />
      <div>
        <h2>Education:</h2>
        <p>Filler text</p>
      </div>
      <hr />
      <div>
        <h2>Work Experience:</h2>
        <div>Filler text</div>
      </div>
    </>
  );
}

export default App;
