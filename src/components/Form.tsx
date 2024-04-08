import React, { useState } from 'react';
import InputField from './InputField';
import { View } from 'react-native';

const Form = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const options = [
    { label: 'Iniciante', value: 'iniciante' },
    { label: 'Intermediário', value: 'intermediario' },
    { label: 'Avançado', value: 'avancado' },
  ];

  return (
    <form>
      <View style={{flexDirection: 'column', gap: 24}}>
        <InputField onChangeText={setNome} value={nome} placeHolder='Insira seu nome' />
        <InputField onChangeText={setEmail} value={email} placeHolder='Insira seu email' />
      </View>
    </form>
  );
};

export default Form;
