import React, { useState } from 'react';
import InputField from './InputField';

const Form = () => {
  const [nome, setNome] = useState('');

  const options = [
    { label: 'Iniciante', value: 'iniciante' },
    { label: 'Intermediário', value: 'intermediario' },
    { label: 'Avançado', value: 'avancado' },
  ];

  return (
    <form>
      <InputField onChangeText={setNome} value={nome} />
    </form>
  );
};

export default Form;
