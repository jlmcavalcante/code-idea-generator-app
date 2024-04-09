import React from 'react';
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import SelectInput from './SelectInput';

const Form = ({ navigation } : any) => {
  const options = ['Iniciante', 'Intermediário', 'Avançado']
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [level, setLevel] = React.useState(options[0]);

  return (
    <View style={{margin: 32}}>
      <View style={{marginBottom: 24}}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder='Nome completo'
          onChangeText={newName => setName(newName)}
        />
      </View>
      <View style={{marginBottom: 24}}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='exemplo@exemplo'
          onChangeText={newEmail => setEmail(newEmail)}
        />
      </View>
      <View style={{marginBottom: 24}}>
        <Text style={styles.label}>Nível de Experiência</Text>
          <Picker
            style={{height: 54, borderWidth: 2, borderColor: '#000', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 200, marginHorizontal: 12, }}
            selectedValue={options[0]}
            onValueChange={(newLevel) => setLevel(newLevel)}
          >
            {options.map((option) => (
              <Picker.Item key={option} label={option} value={option} />
            ))}
        </Picker>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('DisplayData', {
              userName: name, 
              userEmail: email,
              userLevel: level
            });
          }}
        >
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginHorizontal: 32,
    marginBottom: 8,
    fontWeight: '800',
    fontSize: 16
  },
  input: {
    height: 54,
    marginHorizontal: 12,
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderColor: '#000',
    borderRadius: 200
  },
  button: {
    width: 280,
    padding: 8,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: '#323232',
    backgroundColor: '#F9DE69',
    alignItems: 'center',
    marginHorizontal: 12,
    marginTop: 24
  },
  buttonText: {
    fontSize: 24,
    padding: 4,
  },
});

export default Form;