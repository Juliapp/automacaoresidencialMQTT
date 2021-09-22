import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

const Switch = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <ReactSwitch
      onChange={handleChange}
      checked={checked}
      className="react-switch"
    />
  );
};

export default Switch;
