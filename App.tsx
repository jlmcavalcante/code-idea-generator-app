import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Form from './src/components/Form';
import logo from './assets/logo-code-quest-01.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text>Welcome to the</Text>
        <Image
          source={logo}
          style={{width: 100, height: 100}}
        />
      </View>
      <Form />
      <StatusBar style="auto" />
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
