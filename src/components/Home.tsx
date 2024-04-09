import { Image, StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../../assets/ideia.png';
import * as React from 'react';

export default function Home({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{
          height: 250,
          width: 500,
          zIndex: 0
        }}
        start={{x:0,y:1}}
        end={{x:1,y:0}}
        locations={[0.2, 1]}
        colors={['#1D4350','#E0EAFC']}
      >
      </LinearGradient>

      <View style={{alignItems: 'center', zIndex: 1, position: 'relative', bottom: 150, gap: 40}}>
        <View>
          <Image
            source={logo}
            style={{marginBottom: 24, width: 200, height: 200}}
          />
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 36, fontFamily: 'monospace', fontWeight:'800'}}>
              Code.Idea
            </Text>
            <Text style={{fontSize: 36, fontFamily: 'monospace', fontWeight:'800'}}>
              Generator
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() =>
              navigate('Form')
            }
          >
            <Text style={styles.buttonText}>Começar Agora</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 280,
    padding: 8,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: '#323232',
    backgroundColor: '#F9DE69',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24,
    padding: 12,
  },
});

