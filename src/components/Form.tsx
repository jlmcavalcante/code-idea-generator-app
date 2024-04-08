import { useState } from 'react';
import InputField from './InputField';
import { Button, View, Text } from 'react-native';
import SelectInput from './SelectInput';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Form = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [nivel, setNivel] = useState('iniciante');

  const options = [
    { label: 'Iniciante', value: 'iniciante' },
    { label: 'Intermediário', value: 'intermediario' },
    { label: 'Avançado', value: 'avancado' },
  ];

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
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('DisplayData')}
        />
      </View>
    </form>
  );
};

export default Form;