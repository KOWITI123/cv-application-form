import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Buttons = ({ onSubmit }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    // Call the onSubmit function passed from the parent component
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
      {submitted && <p>Submitted successfully!</p>}
    </div>
  );
};

export default Buttons;
