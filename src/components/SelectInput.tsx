import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';

type SelectProps = {
  onValueChange: (text: string) => void, 
  selectedValue: string, 
  options: any[]
}

const SelectInput = (props: SelectProps) => {
  return (
    <Picker
      selectedValue={props.selectedValue}
      onValueChange={props.onValueChange}
      style={{ borderWidth: 1, borderColor: '#ccc', padding: 10 }}>
      {props.options.map((option) => (
        <Picker.Item key={option.value} label={option.label} value={option.value} />
      ))}
    </Picker>
  );
};

export default SelectInput;
