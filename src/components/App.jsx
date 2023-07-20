import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";

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
        study: "Computer Science",
        date: "May 2016",
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
        editing: false,
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

  const [generalInfo, setGeneralInfo] = useState(data.generalInfo);
  const [education, setEducation] = useState(data.education);
  const [workExperience, setWorkExperience] = useState(data.workExperience);

  const updateGeneralInfo = (newInfo) => {
    setGeneralInfo({ ...newInfo });
  };

  const updateEducation = (newInfo, id) => {
    setEducation(
      education.map((school) => (school.id === id ? { ...newInfo } : school))
    );
  };

  const deleteEducation = (id) => {
    setEducation(education.filter((school) => school.id !== id));
  };

  const addSchool = () => {
    setEducation([
      ...education,
      {
        id: uuidv4(),
        name: "New School",
        city: "",
        state: "",
        study: "",
        date: "",
        extraInfo: [
          {
            id: uuidv4(),
            text: "",
          },
        ],
        editing: true,
      },
    ]);
  };

  const addWorkplace = () => {
    setWorkExperience([
      ...workExperience,
      {
        id: uuidv4(),
        name: "New Workplace",
        city: "",
        state: "",
        title: "",
        startDate: "",
        endDate: "",
        extraInfo: [
          {
            id: uuidv4(),
            text: "",
          },
        ],
      },
    ]);
  };

  return (
    <>
      <GeneralInfo {...generalInfo} updateInfo={updateGeneralInfo} />
      <hr />
      <div>
        <h2>Education:</h2>
        {education.map((school) => {
          return (
            <Education
              {...school}
              key={school.id}
              updateInfo={updateEducation}
              deleteSchool={deleteEducation}
            />
          );
        })}
        <button onClick={addSchool}>Add School</button>
      </div>
      <hr />
      <div>
        <h2>Work Experience:</h2>
        {workExperience.map((workplace) => {
          return <Education {...workplace} key={workplace.id} />;
        })}
        <button onClick={addWorkplace}>Add Workplace</button>
      </div>
    </>
  );
}

export default App;
