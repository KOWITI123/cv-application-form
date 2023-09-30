import  { useState } from 'react';

const GeneralInfo = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setEditMode(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

   // Function to toggle edit mode
   const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      <h2>General Info</h2>
      <div className="input-section">
        {editMode ? (
          <>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={handleNameChange}
            />
            <br />

            <input
              type="text"
              placeholder="Status"
              value={status}
              onChange={handleStatusChange}
            />
            <br />

            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <br />

            <button onClick={handleSubmit}>Submit</button>
          </>
        ) : (
          <div>
            <p>Name: {name}</p>
            <p>Status: {status}</p>
            <p>Email: {email}</p>
            
          </div>
        )}
      </div>
      <br />

      <button onClick={toggleEditMode}>
          {editMode ? 'Cancel' : 'Edit'} {/* Toggle the button label */}
        </button>

      {submitted && (
        <div>
          <h3>Submitted General Information</h3>
          <p>Name: {name}</p>
          <p>Status: {status}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
