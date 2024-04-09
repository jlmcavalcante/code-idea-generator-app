import { Image, StyleSheet, Button, Text, View } from 'react-native';
import logo from '../../assets/ideia.png';
import * as React from 'react';

export default function Home({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={logo}
          style={{marginBottom: 24, width: 180, height: 180}}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontSize: 36, fontFamily: 'monospace'}}>
            Code.Idea
          </Text>
          <Text style={{fontSize: 36, fontFamily: 'monospace'}}>
            Generator
          </Text>
        </View>
      </View>
      <View style={{width: 300}}>
        <Button
          title="Comece Agora"
          onPress={() =>
            navigate('Form')
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2/3,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 36
  },
});

