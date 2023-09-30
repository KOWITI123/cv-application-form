import React, { useState } from 'react';

const Experience = () => {
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [editMode, setEditMode] = useState(false); 

  const handleSubmit = () => {
    setSubmitted(true);
    setEditMode(false); // Disable edit mode after submission
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // Function to toggle edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      <h2>Practical Experience</h2>
      <div className="input-section">
        {editMode ? ( // Render input fields when editMode is true
          <>
            <input
              type="text"
              placeholder="Position"
              value={position}
              onChange={handlePositionChange}
            />
            <br />
            <input
              type="text"
              placeholder="Company"
              value={company}
              onChange={handleCompanyChange}
            />
            <br />
            <input
              type="text"
              placeholder="From Date"
              value={fromDate}
              onChange={handleFromDateChange}
            />
            <br />
            <input
              type="text"
              placeholder="To Date"
              value={toDate}
              onChange={handleToDateChange}
            />
            <br />
            <textarea
              rows="10"
              placeholder="Description"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
            <br />
            <button onClick={handleSubmit}>Submit</button>
          </>
        ) : (
          // Render displayed information when editMode is false
          <>
            <p>Position: {position}</p>
            <p>Company: {company}</p>
            <p>From Date: {fromDate}</p>
            <p>To Date: {toDate}</p>
            <p>Description: {description}</p>
          </>
        )}
        <br />
        <button onClick={toggleEditMode}>
          {editMode ? 'Cancel' : 'Edit'} {/* Toggle the button label */}
        </button>
      </div>
      {submitted && (
        <div>
          <h3>Submitted Practical Experience</h3>
          <p>Position: {position}</p>
          <p>Company: {company}</p>
          <p>From Date: {fromDate}</p>
          <p>To Date: {toDate}</p>
          <p>Description: {description}</p>
        </div>
      )}
    </div>
  );
};

export default Experience;
