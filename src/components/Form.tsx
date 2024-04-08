import React, { useState } from 'react';
import InputField from './InputField';
import { View } from 'react-native';
import SelectInput from './SelectInput';

const Form = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [nivel, setNivel] = useState('iniciante');

  const options = [
    { label: 'Iniciante', value: 'iniciante' },
    { label: 'Intermediário', value: 'intermediario' },
    { label: 'Avançado', value: 'avancado' },
  ];

  const handleSubmit = () => {
    // Exibir os valores armazenados nas variáveis
    console.log(`Nome: ${nome}`);
    console.log(`Sobrenome: ${sobrenome}`);
    console.log(`Email: ${email}`);
    console.log(`Nível: ${nivel}`);
  };

  return (
    <form>
      <View style={{gap: 24}}>
        <InputField onChangeText={setNome} value={nome} placeHolder='Insira seu nome'/>
        <InputField onChangeText={setSobrenome} value={sobrenome} placeHolder='Insira seu sobrenome' />
        <InputField onChangeText={setEmail} value={email} placeHolder='Insira seu email'/>
        <SelectInput
          onValueChange={setNivel}
          selectedValue={nivel}
          options={options}
        />
        <button type="button" onClick={handleSubmit}>Enviar</button>
      </View>
    </form>
  );
};

export default Form;