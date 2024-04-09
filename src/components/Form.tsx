import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

const Form = ({ navigation: { navigate } }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

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
      <Button
        title="Confirmar"
        onPress={() =>
          navigate('DisplayData', {name: name, email: email})
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginHorizontal: 12,
    marginBottom: 8,
    fontSize: 16
  },
  input: {
    height: 40,
    marginHorizontal: 12,
    borderWidth: 2,
    padding: 10,
    borderColor: '#000',
    borderRadius: 4
  },
});

export default Form;