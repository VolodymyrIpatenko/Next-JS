import { useState } from 'react';

export const useToggle = () => {
  const [value, setValue] = useState(false);

  function onToggle() {
    setValue(state => !state);
  }
  return [value, { onToggle }];
};

export const useInput = () => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.currentTarget.value);
  };

  return [value, setValue, handleChange];
};
