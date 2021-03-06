import React from 'react';
import ReactSwitch from 'react-switch';

const Switch = ({ checked, onChange, ...rest }) => {
  // const [checked, setChecked] = useState(false);
  // const handleChange = (nextChecked) => {
  //   setChecked(nextChecked);
  // };

  return (
    <ReactSwitch
      onChange={onChange}
      checked={checked}
      className={`react-switch ${rest.className && rest.className}`}
      checkedIcon={false}
      uncheckedIcon={false}
      height={15}
      width={30}
      handleDiameter={13}
    />
  );
};

export default Switch;
