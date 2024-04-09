import { Image, StyleSheet, Button, Text, View } from 'react-native';
import logo from '../../assets/logo-code-quest-01.png';
import Form from './Form';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 36}}>Bem vindo ao</Text>
        <Image
          source={logo}
          style={{width: 400, height: 400}}
        />
      </View>
      <Button
        title="Comece Agora"
        onPress={() =>
          navigate('Form')
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

