import React, { useState } from 'react';
import Switch, { type SwitchProps } from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export interface ToggleSwitchProps {
    label?: string;
    defaultChecked?: boolean;
    color?: SwitchProps['color'];
    onChange?: (checked: boolean) => void;
}

export default function ToggleSwitch({
    label = 'Toggle',
    defaultChecked = false,
    color = 'primary',
    onChange,
}: ToggleSwitchProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setChecked(newChecked);
    if (onChange) onChange(newChecked);
  };
    console.log(color, typeof color);
  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={handleChange}
          data-testid="toggle-switch"
          color={color}
        />
      }
      label={label}
    />
  );
}
