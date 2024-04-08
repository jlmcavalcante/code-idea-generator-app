import React, { useState } from 'react';
import { TextInput } from 'react-native';

type InputProps = {
  onChangeText: (text: string) => void,
  value: string,
}

const InputField = (props: InputProps) => {
  return (
    <TextInput
      style={{ borderWidth: 1, borderColor: '#ccc', padding: 10 }}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
};

export default InputField;
