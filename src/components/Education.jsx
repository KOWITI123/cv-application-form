import React, { useState } from 'react';

const Education = () => {
  const [schoolName, setSchoolName] = useState('');
  const [degreeName, setDegreeName] = useState('');
  const [graduationDate, setGraduationDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setEditMode(false);
  };

  const handleSchoolNameChange = (e) => {
    setSchoolName(e.target.value);
  };

  const handleDegreeNameChange = (e) => {
    setDegreeName(e.target.value);
  };

  const handleGraduationDateChange = (e) => {
    setGraduationDate(e.target.value);
  };

 

   // Function to toggle edit mode
   const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      <h2>Education</h2>
      <div className="input-section">
        {editMode ? (
          <>
            <input
              type="text"
              placeholder="School Name"
              value={schoolName}
              onChange={handleSchoolNameChange}
            />
            <br />

            <input
              type="text"
              placeholder="Degree Name"
              value={degreeName}
              onChange={handleDegreeNameChange}
            />
            <br />

            <input
              type="text"
              placeholder="Graduation Date"
              value={graduationDate}
              onChange={handleGraduationDateChange}
            />
            <br />

            <button onClick={handleSubmit}>Submit</button>
          </>
        ) : (
          <div>
            <p>School Name: {schoolName}</p>
            <p>Degree Name: {degreeName}</p>
            <p>Graduation Date: {graduationDate}</p>
            
          </div>
        )}
      </div>
      <br />

      <button onClick={toggleEditMode}>
          {editMode ? 'Cancel' : 'Edit'} {/* Toggle the button label */}
        </button>

      {submitted && (
        <div>
          <h3>Submitted Educational Information</h3>
          <p>School Name: {schoolName}</p>
          <p>Degree Name: {degreeName}</p>
          <p>Graduation Date: {graduationDate}</p>
        </div>
      )}
    </div>
  );
};

export default Education;
