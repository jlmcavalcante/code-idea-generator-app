import {Text, View, StyleSheet, Image} from 'react-native';
import profile from '../../assets/perfil-de-usuario.png';

export default function DisplayData ({route, navigation} : any) {
  const {userName, userEmail, userLevel} = route.params;

  return (
    <View style={{flexDirection:'column', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={profile}
        style={{marginBottom: 24, width: 200, height: 200}}
      />
      <Text style={styles.title}>Dados do Usuário:</Text>
      <View style={{justifyContent: 'flex-start', gap: 12}}>
        <Text style={styles.data}>Nome: {userName}</Text>
        <Text style={styles.data}>Email: {userEmail}</Text>
        <Text style={styles.data}>Nível de experiência: {userLevel}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    marginBottom: 16,
    fontWeight: 'bold',
    backgroundColor:'#F9DE69',
    padding: 12,
    borderRadius: 8
  },
  data: {
    fontSize: 20,
  }
})